import { Cpu, CheckCircle2, ArrowRight, CornerDownRight, RotateCw } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Bước 1',
      desc: 'Xác định phạm vi tìm kiếm từ low đến high.',
      badge: 'low = 0, high = n - 1',
      color: 'blue',
    },
    {
      num: 2,
      title: 'Bước 2',
      desc: 'Kiểm tra giá trị cần tìm có nằm trong phạm vi giá trị hiện tại hay không.',
      badge: 'target >= arr[low] && target <= arr[high]',
      color: 'indigo',
    },
    {
      num: 3,
      title: 'Bước 3',
      desc: 'Tính vị trí ước lượng bằng công thức Interpolation Search.',
      badge: 'pos = low + ⌊((target - arr[low]) * (high - low)) / (arr[high] - arr[low])⌋',
      color: 'purple',
    },
    {
      num: 4,
      title: 'Bước 4',
      desc: 'So sánh arr[pos] với giá trị cần tìm.',
      badge: 'So sánh arr[pos] với target',
      color: 'slate',
    },
    {
      num: 5,
      title: 'Bước 5',
      desc: 'Nếu bằng nhau → tìm thấy.',
      badge: 'arr[pos] == target → Trả về pos',
      color: 'emerald',
    },
    {
      num: 6,
      title: 'Bước 6',
      desc: 'Nếu arr[pos] < target → tìm kiếm ở bên phải.',
      badge: 'low = pos + 1',
      color: 'sky',
    },
    {
      num: 7,
      title: 'Bước 7',
      desc: 'Nếu arr[pos] > target → tìm kiếm ở bên trái.',
      badge: 'high = pos - 1',
      color: 'amber',
    },
    {
      num: 8,
      title: 'Bước 8',
      desc: 'Lặp lại cho đến khi tìm thấy hoặc phạm vi tìm kiếm không còn hợp lệ.',
      badge: 'Vòng lặp while tiếp tục hoặc trả về -1',
      color: 'rose',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-slate-50/60 border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Quy Trình Từng Bước</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Nguyên lý hoạt động
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Từng bước thực thi thuật toán Interpolation Search một cách hệ thống và chuẩn xác
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-sm hover:border-indigo-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    {step.title}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-snug mb-3">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <code className="text-[11px] font-mono text-indigo-700 bg-indigo-50/80 px-2 py-1 rounded block truncate" title={step.badge}>
                  {step.badge}
                </code>
              </div>
            </div>
          ))}
        </div>

        {/* Quick summary note */}
        <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <RotateCw className="w-4 h-4 text-indigo-600" />
            <span>Mỗi vòng lặp sẽ thu hẹp không gian tìm kiếm dựa trên tỉ lệ nội suy tuyến tính.</span>
          </div>
          <span className="font-mono text-indigo-600 font-semibold">
            Tương đương phương trình đường thẳng y = ax + b
          </span>
        </div>
      </div>
    </section>
  );
}
