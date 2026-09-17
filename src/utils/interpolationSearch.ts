import { SearchStep, SearchResult } from '../types';

export interface ParseResult {
  isValid: boolean;
  array: number[];
  error?: string;
  isSorted: boolean;
}

export function parseInputArray(input: string): ParseResult {
  if (!input || input.trim() === '') {
    return {
      isValid: false,
      array: [],
      error: 'Mảng không được để trống.',
      isSorted: false,
    };
  }

  // Split by comma, semicolon or whitespace
  const tokens = input
    .trim()
    .split(/[\s,;]+/)
    .filter((token) => token.length > 0);

  if (tokens.length === 0) {
    return {
      isValid: false,
      array: [],
      error: 'Không tìm thấy số nào trong chuỗi nhập.',
      isSorted: false,
    };
  }

  const numbers: number[] = [];
  for (const token of tokens) {
    const num = Number(token);
    if (isNaN(num)) {
      return {
        isValid: false,
        array: [],
        error: `Giá trị "${token}" không phải là một số hợp lệ.`,
        isSorted: false,
      };
    }
    numbers.push(num);
  }

  // Check if sorted ascending
  let isSorted = true;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      isSorted = false;
      break;
    }
  }

  if (!isSorted) {
    return {
      isValid: true,
      array: numbers,
      error: '⚠ Mảng phải được sắp xếp theo thứ tự tăng dần.',
      isSorted: false,
    };
  }

  return {
    isValid: true,
    array: numbers,
    isSorted: true,
  };
}

export function sortArrayAscending(arr: number[]): number[] {
  return [...arr].sort((a, b) => a - b);
}

/**
 * Executes Interpolation Search and generates step-by-step trace
 */
export function runInterpolationSearch(arr: number[], target: number): SearchResult {
  const steps: SearchStep[] = [];
  let low = 0;
  let high = arr.length - 1;
  let comparisons = 0;
  let stepCount = 0;

  if (arr.length === 0) {
    return {
      found: false,
      index: -1,
      iterations: 0,
      comparisons: 0,
      steps: [],
      message: 'Mảng rỗng, không thể thực hiện tìm kiếm.',
    };
  }

  // Helper to get remaining active indices in [low..high]
  const getActiveIndices = (l: number, h: number) => {
    const indices: number[] = [];
    for (let i = Math.max(0, l); i <= Math.min(arr.length - 1, h); i++) {
      indices.push(i);
    }
    return indices;
  };

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    stepCount++;
    const arrLow = arr[low];
    const arrHigh = arr[high];

    // Case 1: arr[low] == arr[high] (all remaining elements have the same value or single element)
    if (arrHigh === arrLow) {
      comparisons++;
      if (arrLow === target) {
        steps.push({
          stepNumber: stepCount,
          low,
          high,
          pos: low,
          target,
          arrLow,
          arrHigh,
          arrPos: arrLow,
          formulaString: `arr[low] == arr[high] (${arrLow} == ${arrHigh})`,
          formulaCalculation: `Tránh chia cho 0: Các phần tử đều bằng nhau. Kiểm tra trực tiếp arr[${low}] = ${arrLow}`,
          comparison: 'SINGLE_ELEMENT_MATCH',
          explanation: `Do arr[high] == arr[low] (${arrHigh} == ${arrLow}), kiểm tra trực tiếp: arr[${low}] = ${arrLow} == ${target}.`,
          nextAction: `Tìm thấy khóa ${target} tại index ${low}.`,
          found: true,
          done: true,
          comparisonsCount: comparisons,
          activeSubarrayIndices: getActiveIndices(low, high),
        });
        return {
          found: true,
          index: low,
          iterations: stepCount,
          comparisons,
          steps,
          message: `Giá trị ${target} nằm tại index ${low}.`,
        };
      } else {
        steps.push({
          stepNumber: stepCount,
          low,
          high,
          pos: low,
          target,
          arrLow,
          arrHigh,
          arrPos: arrLow,
          formulaString: `arr[low] == arr[high] (${arrLow} == ${arrHigh})`,
          formulaCalculation: `arr[${low}] = ${arrLow} != target (${target})`,
          comparison: 'SINGLE_ELEMENT_MISMATCH',
          explanation: `Khoảng tìm kiếm có tất cả phần tử bằng ${arrLow}, khác với target = ${target}.`,
          nextAction: `Không tìm thấy giá trị ${target} trong mảng.`,
          found: false,
          done: true,
          comparisonsCount: comparisons,
          activeSubarrayIndices: getActiveIndices(low, high),
        });
        return {
          found: false,
          index: -1,
          iterations: stepCount,
          comparisons,
          steps,
          message: `Giá trị ${target} không tồn tại trong mảng.`,
        };
      }
    }

    // Standard Interpolation formula:
    // pos = low + floor( ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]) )
    const numerator = (target - arrLow) * (high - low);
    const denominator = arrHigh - arrLow;
    const offset = Math.floor(numerator / denominator);
    let pos = low + offset;

    // Boundary clamp for floating safety
    if (pos < low) pos = low;
    if (pos > high) pos = high;

    const arrPos = arr[pos];
    const formulaStr = `pos = ${low} + ⌊((${target} - ${arrLow}) * (${high} - ${low})) / (${arrHigh} - ${arrLow})⌋`;
    const calcStr = `pos = ${low} + ⌊(${target - arrLow} * ${high - low}) / ${denominator}⌋ = ${low} + ⌊${numerator} / ${denominator}⌋ = ${pos}`;

    comparisons++;

    if (arrPos === target) {
      steps.push({
        stepNumber: stepCount,
        low,
        high,
        pos,
        target,
        arrLow,
        arrHigh,
        arrPos,
        formulaString: formulaStr,
        formulaCalculation: calcStr,
        comparison: 'EQUAL',
        explanation: `arr[${pos}] = ${arrPos} == target (${target}).`,
        nextAction: `Tìm thấy tại vị trí ${pos}.`,
        found: true,
        done: true,
        comparisonsCount: comparisons,
        activeSubarrayIndices: getActiveIndices(low, high),
      });

      return {
        found: true,
        index: pos,
        iterations: stepCount,
        comparisons,
        steps,
        message: `Giá trị ${target} nằm tại index ${pos}.`,
      };
    } else if (arrPos < target) {
      const nextLow = pos + 1;
      steps.push({
        stepNumber: stepCount,
        low,
        high,
        pos,
        target,
        arrLow,
        arrHigh,
        arrPos,
        formulaString: formulaStr,
        formulaCalculation: calcStr,
        comparison: 'LESS',
        explanation: `arr[${pos}] = ${arrPos} < target (${target}). Khóa cần tìm lớn hơn phần tử ước lượng.`,
        nextAction: `Thu hẹp sang nửa bên phải: cập nhật low = pos + 1 = ${nextLow}.`,
        found: false,
        done: false,
        comparisonsCount: comparisons,
        activeSubarrayIndices: getActiveIndices(low, high),
      });
      low = nextLow;
    } else {
      const nextHigh = pos - 1;
      steps.push({
        stepNumber: stepCount,
        low,
        high,
        pos,
        target,
        arrLow,
        arrHigh,
        arrPos,
        formulaString: formulaStr,
        formulaCalculation: calcStr,
        comparison: 'GREATER',
        explanation: `arr[${pos}] = ${arrPos} > target (${target}). Khóa cần tìm nhỏ hơn phần tử ước lượng.`,
        nextAction: `Thu hẹp sang nửa bên trái: cập nhật high = pos - 1 = ${nextHigh}.`,
        found: false,
        done: false,
        comparisonsCount: comparisons,
        activeSubarrayIndices: getActiveIndices(low, high),
      });
      high = nextHigh;
    }
  }

  // If the loop finished without finding:
  // Check why it broke: either low > high or target is outside [arr[low], arr[high]]
  stepCount++;
  let exitReason = '';
  if (low <= high) {
    if (target < arr[low]) {
      exitReason = `target (${target}) < arr[low] (${arr[low]}), nằm ngoài phạm vi giá trị hiện tại.`;
    } else if (target > arr[high]) {
      exitReason = `target (${target}) > arr[high] (${arr[high]}), nằm ngoài phạm vi giá trị hiện tại.`;
    }
  } else {
    exitReason = `Phạm vi tìm kiếm không còn hợp lệ (low = ${low} > high = ${high}).`;
  }

  steps.push({
    stepNumber: stepCount,
    low,
    high,
    pos: -1,
    target,
    arrLow: low >= 0 && low < arr.length ? arr[low] : -1,
    arrHigh: high >= 0 && high < arr.length ? arr[high] : -1,
    arrPos: -1,
    formulaString: `Dừng lặp`,
    formulaCalculation: exitReason,
    comparison: target < (arr[low] ?? Infinity) ? 'OUT_OF_BOUNDS_LOW' : 'OUT_OF_BOUNDS_HIGH',
    explanation: `Điều kiện lặp (low <= high && target >= arr[low] && target <= arr[high]) không còn thỏa mãn.`,
    nextAction: `Kết luận: Giá trị ${target} không tồn tại trong mảng.`,
    found: false,
    done: true,
    comparisonsCount: comparisons,
    activeSubarrayIndices: [],
  });

  return {
    found: false,
    index: -1,
    iterations: steps.length,
    comparisons,
    steps,
    message: `Giá trị ${target} không tồn tại trong mảng.`,
  };
}
