export const codeSnippets = {
  cpp: {
    language: 'C++',
    fileName: 'InterpolationSearch.cpp',
    code: `// C++ Implementation of Interpolation Search
#include <iostream>
#include <vector>

using namespace std;

int interpolationSearch(const vector<int>& arr, int target) {
    int low = 0;
    int high = arr.size() - 1;

    // Điều kiện dừng:
    // 1. low <= high
    // 2. target nằm trong phạm vi giá trị [arr[low], arr[high]]
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        
        // Tránh lỗi chia cho 0 khi các phần tử trong khoảng bằng nhau
        if (arr[high] == arr[low]) {
            if (arr[low] == target)
                return low;
            return -1;
        }

        // Công thức ước lượng vị trí (Interpolation Formula)
        int pos = low + (((double)(target - arr[low]) * (high - low)) /
                         (arr[high] - arr[low]));

        // Kiểm tra phần tử tại vị trí ước lượng
        if (arr[pos] == target)
            return pos;

        // Nếu target lớn hơn, tìm kiếm ở nửa bên phải
        if (arr[pos] < target)
            low = pos + 1;
        // Nếu target nhỏ hơn, tìm kiếm ở nửa bên trái
        else
            high = pos - 1;
    }

    return -1; // Không tìm thấy
}

int main() {
    vector<int> arr = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
    int target = 70;
    
    int index = interpolationSearch(arr, target);
    if (index != -1)
        cout << "Tim thay " << target << " tai chi so: " << index << endl;
    else
        cout << "Khong tim thay " << target << endl;

    return 0;
}`,
  },
  java: {
    language: 'Java',
    fileName: 'InterpolationSearch.java',
    code: `// Java Implementation of Interpolation Search
public class InterpolationSearch {

    public static int interpolationSearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;

        // Vòng lặp tìm kiếm
        while (low <= high && target >= arr[low] && target <= arr[high]) {
            
            // Xử lý trường hợp tránh chia cho 0
            if (arr[high] == arr[low]) {
                if (arr[low] == target) return low;
                return -1;
            }

            // Tính vị trí ước lượng
            int pos = low + (int)(((long)(target - arr[low]) * (high - low)) / 
                                  (arr[high] - arr[low]));

            // So sánh giá trị tại pos với target
            if (arr[pos] == target) {
                return pos;
            }

            // Thu hẹp phạm vi tìm kiếm
            if (arr[pos] < target) {
                low = pos + 1;
            } else {
                high = pos - 1;
            }
        }

        return -1; // Không tìm thấy
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
        int target = 70;
        int result = interpolationSearch(arr, target);

        if (result != -1) {
            System.out.println("Tìm thấy " + target + " tại index: " + result);
        } else {
            System.out.println("Không tìm thấy " + target);
        }
    }
}`,
  },
  python: {
    language: 'Python',
    fileName: 'interpolation_search.py',
    code: `# Python 3 Implementation of Interpolation Search
def interpolation_search(arr: list[int], target: int) -> int:
    low = 0
    high = len(arr) - 1

    # Điều kiện tìm kiếm và kiểm tra biên giá trị
    while low <= high and target >= arr[low] and target <= arr[high]:
        
        # Phòng ngừa chia cho 0 khi arr[high] == arr[low]
        if arr[high] == arr[low]:
            if arr[low] == target:
                return low
            return -1

        # Công thức nội suy ước lượng vị trí
        pos = low + int(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]))

        # So sánh với target
        if arr[pos] == target:
            return pos

        # Target nằm ở nửa bên phải
        if arr[pos] < target:
            low = pos + 1
        # Target nằm ở nửa bên trái
        else:
            high = pos - 1

    return -1


if __name__ == "__main__":
    arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    target = 70
    index = interpolation_search(arr, target)
    
    if index != -1:
        print(f"Tìm thấy {target} tại index: {index}")
    else:
        print(f"Không tìm thấy {target}")`,
  },
  javascript: {
    language: 'JavaScript',
    fileName: 'interpolationSearch.js',
    code: `// JavaScript (ES6+) Implementation of Interpolation Search
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  // Lặp trong khi target nằm trong khoảng giá trị hiện tại
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    
    // Phòng ngừa chia cho 0 khi khoảng có các phần tử bằng nhau
    if (arr[high] === arr[low]) {
      if (arr[low] === target) return low;
      return -1;
    }

    // Công thức tính vị trí ước lượng
    const pos = low + Math.floor(
      ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    // Kiểm tra kết quả
    if (arr[pos] === target) {
      return pos;
    }

    // Thu hẹp khoảng tìm kiếm
    if (arr[pos] < target) {
      low = pos + 1; // Tìm nửa phải
    } else {
      high = pos - 1; // Tìm nửa trái
    }
  }

  return -1; // Không tìm thấy
}

// Ví dụ chạy thử:
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;
const index = interpolationSearch(arr, target);
console.log(index !== -1 ? \`Tìm thấy \${target} tại index \${index}\` : "Không tìm thấy");`,
  },
};
