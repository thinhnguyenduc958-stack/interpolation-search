import { AlertTriangle, XCircle, ShieldAlert } from 'lucide-react';

export function CommonMistakes() {
  const mistakes = [
    {
      num: 1,
      title: 'Không sắp xếp mảng trước khi tìm',
      desc: 'Interpolation Search chỉ hoạt động trên mảng có tính đơn điệu tăng dần. Nếu mảng chưa sắp xếp, công thức nội suy sẽ nhảy tới các chỉ số sai hoặc vô nghĩa.',
      solution: 'Luôn sắp xếp mảng (Sort) trước khi áp dụng thuật toán.',
    },
    {
      num: 2,
      title: 'Chia cho 0 khi arr[high] == arr[low]',
      desc: 'Mẫu số trong công thức là (arr[high] - arr[low]). Nếu tất cả phần tử trong đoạn tìm kiếm bằng nhau, mẫu số bằng 0 gây sập chương trình (Division by Zero).',
      solution: 'Thêm điều kiện kiểm tra if (arr[high] == arr[low]) trước khi tính pos.',
    },
    {
      num: 3,
      title: 'Không kiểm tra target có nằm trong khoảng giá trị hay không',
      desc: 'Nếu target < arr[low] hoặc target > arr[high], công thức có thể tính ra pos âm (< 0) hoặc vượt quá kích thước mảng (>= n), gây lỗi Out of bounds.',
      solution: 'Duy trì điều kiện vòng lặp: target >= arr[low] && target <= arr[high].',
    },
    {
      num: 4,
      title: 'Tính sai công thức vị trí',
      desc: 'Quên cộng low ở đầu công thức, hoặc nhầm lẫn thứ tự nhân chia dẫn đến ép kiểu nguyên làm mất độ chính xác trước khi nhân với (high - low).',
      solution: 'Viết công thức theo mẫu: pos = low + floor( ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]) ).',
    },
    {
      num: 5,
      title: 'Nhầm Interpolation Search với Binary Search',
      desc: 'Viết nhầm công thức thành pos = (low + high) / 2 làm mất đi tính chất ước lượng tỉ lệ giá trị của Interpolation Search.',
      solution: 'Ghi nhớ Binary Search cố định chia đôi, còn Interpolation Search nội suy theo giá trị khóa.',
    },
    {
      num: 6,
      title: 'Không cập nhật low/high sau mỗi lần so sánh',
      desc: 'Quên cộng/trừ 1 (ví dụ gán nhầm low = pos thay vì low = pos + 1) có thể dẫn tới vòng lặp vô tận (Infinite loop).',
      solution: 'Khi arr[pos] < target: low = pos + 1; khi arr[pos] > target: high = pos - 1.',
    },
  ];

  return (
    <section id="mistakes" className="py-16 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Phòng Ngừa Lỗi Lập Trình</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            ⚠ Những lỗi thường gặp
          </h2>
          <p className="mt-2 text-base text-slate-600">
            6 cạm bẫy phổ biến khi sinh viên và lập trình viên cài đặt thuật toán Interpolation Search
          </p>
        </div>

        {/* Mistakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mistakes.map((m) => (
            <div
              key={m.num}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                    {m.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {m.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {m.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 bg-amber-50/40 p-2.5 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900">Cách khắc phục: </span>
                {m.solution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
