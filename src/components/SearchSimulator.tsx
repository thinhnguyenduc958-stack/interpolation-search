import { useState, useEffect, useRef, useMemo } from 'react';
import { Play, Sparkles, AlertTriangle, Check, RefreshCw, Wand2 } from 'lucide-react';
import { ArrayVisualizer } from './ArrayVisualizer';
import { StepControls } from './StepControls';
import { AlgorithmLog } from './AlgorithmLog';
import { ResultCard } from './ResultCard';
import { parseInputArray, sortArrayAscending, runInterpolationSearch } from '../utils/interpolationSearch';
import { SearchResult, SearchStep } from '../types';

export function SearchSimulator() {
  const [arrayInput, setArrayInput] = useState<string>('10, 20, 30, 40, 50, 60, 70, 80, 90, 100');
  const [targetInput, setTargetInput] = useState<string>('70');

  // Parsed values
  const parseResult = useMemo(() => parseInputArray(arrayInput), [arrayInput]);
  const parsedTarget = Number(targetInput);
  const isTargetValid = !isNaN(parsedTarget) && targetInput.trim() !== '';

  // Execution state
  const [simulationResult, setSimulationResult] = useState<SearchResult | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1); // 0.5x, 1x, 1.5x, 2x

  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize search execution when array or target changes
  const executeSearch = (customArr?: number[], customTarget?: number) => {
    const arrToUse = customArr ?? (parseResult.isValid && parseResult.isSorted ? parseResult.array : []);
    const targetToUse = customTarget ?? parsedTarget;

    if (arrToUse.length === 0 || isNaN(targetToUse)) {
      setSimulationResult(null);
      setCurrentStepIndex(-1);
      return;
    }

    const result = runInterpolationSearch(arrToUse, targetToUse);
    setSimulationResult(result);
    return result;
  };

  // Run initial simulation on mount
  useEffect(() => {
    if (parseResult.isValid && parseResult.isSorted && isTargetValid) {
      const res = runInterpolationSearch(parseResult.array, parsedTarget);
      setSimulationResult(res);
      setCurrentStepIndex(0);
    }
  }, []);

  // Handle Autoplay timer
  useEffect(() => {
    if (isAutoPlaying) {
      if (!simulationResult || currentStepIndex >= simulationResult.steps.length - 1) {
        setIsAutoPlaying(false);
        return;
      }

      const delay = 1200 / playbackSpeed;
      autoPlayTimerRef.current = setTimeout(() => {
        setCurrentStepIndex((prev) => {
          if (!simulationResult || prev >= simulationResult.steps.length - 1) {
            setIsAutoPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, delay);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, currentStepIndex, simulationResult, playbackSpeed]);

  // Button Action Handlers
  const handleRunAll = () => {
    setIsAutoPlaying(false);
    if (!parseResult.isValid || !parseResult.isSorted || !isTargetValid) return;

    const res = executeSearch();
    if (res && res.steps.length > 0) {
      setCurrentStepIndex(res.steps.length - 1);
    }
  };

  const handleStepForward = () => {
    setIsAutoPlaying(false);
    if (!simulationResult) {
      if (!parseResult.isValid || !parseResult.isSorted || !isTargetValid) return;
      const res = executeSearch();
      if (res && res.steps.length > 0) {
        setCurrentStepIndex(0);
      }
      return;
    }

    if (currentStepIndex < simulationResult.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleStepBackward = () => {
    setIsAutoPlaying(false);
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setIsAutoPlaying(false);
    if (!parseResult.isValid || !parseResult.isSorted || !isTargetValid) {
      setCurrentStepIndex(-1);
      return;
    }
    const res = executeSearch();
    if (res && res.steps.length > 0) {
      setCurrentStepIndex(0);
    }
  };

  const handleToggleAutoPlay = () => {
    if (!simulationResult) {
      if (!parseResult.isValid || !parseResult.isSorted || !isTargetValid) return;
      const res = executeSearch();
      if (res && res.steps.length > 0) {
        setCurrentStepIndex(0);
        setIsAutoPlaying(true);
      }
      return;
    }

    if (currentStepIndex >= simulationResult.steps.length - 1) {
      // Loop back to start if finished
      setCurrentStepIndex(0);
      setIsAutoPlaying(true);
    } else {
      setIsAutoPlaying((prev) => !prev);
    }
  };

  const handleRandom = () => {
    setIsAutoPlaying(false);
    // Generate a clean random sorted array of 9 to 12 items with uniform-like distribution
    const length = Math.floor(Math.random() * 4) + 9;
    const start = Math.floor(Math.random() * 20) - 5;
    const step = Math.floor(Math.random() * 8) + 5;
    const newArr: number[] = [];

    for (let i = 0; i < length; i++) {
      // add a small jitter
      const jitter = Math.floor(Math.random() * 3) - 1;
      const val = start + i * step + jitter;
      newArr.push(val);
    }
    const sorted = sortArrayAscending(newArr);
    // Pick a random target (either inside or outside)
    const pickInside = Math.random() > 0.3;
    const target = pickInside
      ? sorted[Math.floor(Math.random() * sorted.length)]
      : sorted[Math.floor(Math.random() * sorted.length)] + 3;

    setArrayInput(sorted.join(', '));
    setTargetInput(target.toString());

    const res = runInterpolationSearch(sorted, target);
    setSimulationResult(res);
    setCurrentStepIndex(0);
  };

  const handleAutoSort = () => {
    if (!parseResult.array || parseResult.array.length === 0) return;
    const sorted = sortArrayAscending(parseResult.array);
    setArrayInput(sorted.join(', '));
    const res = runInterpolationSearch(sorted, parsedTarget);
    setSimulationResult(res);
    setCurrentStepIndex(0);
  };

  // Preset selector
  const loadPreset = (arr: number[], tgt: number) => {
    setIsAutoPlaying(false);
    setArrayInput(arr.join(', '));
    setTargetInput(tgt.toString());
    const res = runInterpolationSearch(arr, tgt);
    setSimulationResult(res);
    setCurrentStepIndex(0);
  };

  // Current active step
  const currentStep: SearchStep | null =
    simulationResult && currentStepIndex >= 0 && currentStepIndex < simulationResult.steps.length
      ? simulationResult.steps[currentStepIndex]
      : null;

  const isFinished =
    simulationResult !== null && currentStepIndex === simulationResult.steps.length - 1;

  return (
    <section id="simulator" className="py-16 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Phòng Thí Nghiệm Tương Tác</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            🔬 Mô phỏng Interpolation Search
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Thử nghiệm với mảng tùy biến, điều khiển từng bước thực thi và quan sát công thức ước lượng hoạt động theo thời gian thực
          </p>
        </div>

        {/* Input Configuration & Presets Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Array Input */}
            <div className="lg:col-span-8 space-y-1.5">
              <label htmlFor="array-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Mảng số (các phần tử cách nhau bởi dấu phẩy hoặc khoảng trắng):
              </label>
              <div className="relative">
                <input
                  id="array-input"
                  type="text"
                  value={arrayInput}
                  onChange={(e) => {
                    setArrayInput(e.target.value);
                    setIsAutoPlaying(false);
                    const parsed = parseInputArray(e.target.value);
                    if (parsed.isValid && parsed.isSorted && isTargetValid) {
                      const res = runInterpolationSearch(parsed.array, parsedTarget);
                      setSimulationResult(res);
                      setCurrentStepIndex(0);
                    } else {
                      setSimulationResult(null);
                      setCurrentStepIndex(-1);
                    }
                  }}
                  placeholder="Ví dụ: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"
                  className={`w-full px-4 py-2.5 rounded-xl font-mono text-sm border focus:outline-hidden focus:ring-2 transition-all ${
                    !parseResult.isValid || !parseResult.isSorted
                      ? 'border-amber-400 bg-amber-50/20 focus:ring-amber-300'
                      : 'border-slate-200 bg-white focus:ring-indigo-500 focus:border-indigo-500'
                  }`}
                />
              </div>

              {/* Validation Message & Auto-Sort button */}
              {parseResult.error && (
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{parseResult.error}</span>
                  </div>
                  {!parseResult.isSorted && parseResult.array.length > 1 && (
                    <button
                      type="button"
                      onClick={handleAutoSort}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors shrink-0 shadow-2xs"
                    >
                      <Wand2 className="w-3 h-3" />
                      <span>Sắp xếp tự động</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Target Value Input */}
            <div className="lg:col-span-4 space-y-1.5">
              <label htmlFor="target-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Giá trị cần tìm (target):
              </label>
              <input
                id="target-input"
                type="number"
                value={targetInput}
                onChange={(e) => {
                  setTargetInput(e.target.value);
                  setIsAutoPlaying(false);
                  const tgt = Number(e.target.value);
                  if (parseResult.isValid && parseResult.isSorted && !isNaN(tgt)) {
                    const res = runInterpolationSearch(parseResult.array, tgt);
                    setSimulationResult(res);
                    setCurrentStepIndex(0);
                  } else {
                    setSimulationResult(null);
                    setCurrentStepIndex(-1);
                  }
                }}
                placeholder="70"
                className="w-full px-4 py-2.5 rounded-xl font-mono text-sm border border-slate-200 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
              {!isTargetValid && (
                <p className="text-[11px] text-rose-600 font-medium">
                  Vui lòng nhập một số hợp lệ cho target.
                </p>
              )}
            </div>
          </div>

          {/* Quick preset chips for rapid testing */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-slate-600 mr-1">Bộ mẫu kiểm thử nhanh:</span>

            <button
              type="button"
              onClick={() => loadPreset([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 70)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-mono transition-colors border border-slate-200"
            >
              Mặc định (target: 70)
            </button>

            <button
              type="button"
              onClick={() => loadPreset([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-mono transition-colors border border-slate-200"
            >
              Đầu mảng (target: 10)
            </button>

            <button
              type="button"
              onClick={() => loadPreset([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-mono transition-colors border border-slate-200"
            >
              Cuối mảng (target: 100)
            </button>

            <button
              type="button"
              onClick={() => loadPreset([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 75)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-mono transition-colors border border-slate-200"
            >
              Không tồn tại (target: 75)
            </button>

            <button
              type="button"
              onClick={() => loadPreset([-50, -25, -10, 0, 15, 30, 60, 90], -10)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-mono transition-colors border border-slate-200"
            >
              Số âm (target: -10)
            </button>

            <button
              type="button"
              onClick={() => loadPreset([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 200)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-mono transition-colors border border-slate-200"
            >
              Vượt biên (target: 200)
            </button>

            <button
              type="button"
              onClick={() => loadPreset([5, 5, 5, 5, 5], 5)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-mono transition-colors border border-slate-200"
            >
              Phần tử bằng nhau (arr[high]==arr[low])
            </button>
          </div>
        </div>

        {/* Step Controls */}
        <StepControls
          onRunAlgorithm={handleRunAll}
          onStepForward={handleStepForward}
          onStepBackward={handleStepBackward}
          onReset={handleReset}
          onRandom={handleRandom}
          onToggleAutoPlay={handleToggleAutoPlay}
          isAutoPlaying={isAutoPlaying}
          canStepForward={
            simulationResult !== null && currentStepIndex < simulationResult.steps.length - 1
          }
          canStepBackward={currentStepIndex > 0}
          currentStepIndex={currentStepIndex}
          totalSteps={simulationResult ? simulationResult.steps.length : 0}
          playbackSpeed={playbackSpeed}
          onChangeSpeed={setPlaybackSpeed}
        />

        {/* Array Visualization */}
        <ArrayVisualizer
          array={parseResult.isValid && parseResult.isSorted ? parseResult.array : []}
          currentStep={currentStep}
          targetValue={parsedTarget}
          isFinished={isFinished}
          onSelectIndex={(idx) => {
            if (parseResult.isValid && parseResult.isSorted) {
              const val = parseResult.array[idx];
              setTargetInput(val.toString());
              const res = runInterpolationSearch(parseResult.array, val);
              setSimulationResult(res);
              setCurrentStepIndex(0);
            }
          }}
        />

        {/* Result Card (Visible when stepped to end or finished) */}
        {simulationResult && (currentStepIndex === simulationResult.steps.length - 1 || simulationResult.steps[currentStepIndex]?.done) && (
          <ResultCard
            result={simulationResult}
            targetValue={parsedTarget}
          />
        )}

        {/* Algorithm Log */}
        <AlgorithmLog
          steps={simulationResult ? simulationResult.steps : []}
          currentStepIndex={currentStepIndex}
          onSelectStep={(idx) => {
            setIsAutoPlaying(false);
            setCurrentStepIndex(idx);
          }}
        />
      </div>
    </section>
  );
}
