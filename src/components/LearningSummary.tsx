import { ArrowDown, CheckCircle2, XCircle, RefreshCw, GitBranch, ListFilter } from 'lucide-react';

export function LearningSummary() {
  const nodes = [
    {
      step: 1,
      title: 'Mảng tăng dần',
      desc: 'Dữ liệu đầu vào bắt buộc được sắp xếp tăng dần, tốt nhất là phân bố đều.',
      badge: 'Input Array',
      color: 'border-blue-300 bg-blue-50/60 text-blue-900',
    },
    {
      step: 2,
      title: 'Xác định low và high',
      desc: 'Thiết lập chỉ số đầu (low = 0) và cuối (high = n - 1), kiểm tra target trong khoảng [arr[low], arr[high]].',
      badge: 'Initialize Bounds',
      color: 'border-indigo-300 bg-indigo-50/60 text-indigo-900',
    },
    {
      step: 3,
      title: 'Ước lượng vị trí pos',
      desc: 'Áp dụng công thức nội suy tuyến tính: pos = low + ⌊((target - arr[low]) * (high - low)) / (arr[high] - arr[low])⌋.',
      badge: 'Calculate Pos',
      color: 'border-purple-300 bg-purple-50/60 text-purple-900',
    },
    {
      step: 4,
      title: 'So sánh arr[pos] với target',
      desc: 'Kiểm tra 3 trường hợp: bằng nhau (bước 6), nhỏ hơn (sang phải) hoặc lớn hơn (sang trái).',
      badge: 'Compare Value',
      color: 'border-amber-300 bg-amber-50/60 text-amber-900',
    },
    {
      step: 5,
      title: 'Điều chỉnh phạm vi',
      desc: 'Nếu arr[pos] < target: low = pos + 1. Nếu arr[pos] > target: high = pos - 1. Lặp lại bước 3.',
      badge: 'Narrow Subarray',
      color: 'border-sky-300 bg-sky-50/60 text-sky-900',
    },
  ];

  return (
    <section id="summary" className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Sơ Đồ Luồng Thuật Toán</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Tóm tắt
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Sơ đồ trực quan hóa luồng tư duy và các bước thực thi của Interpolation Search
          </p>
        </div>

        {/* Vertical Flowchart */}
        <div className="flex flex-col items-center space-y-3">
          {nodes.map((node, index) => (
            <div key={node.step} className="w-full flex flex-col items-center">
              {/* Card Node */}
              <div
                className={`w-full max-w-lg p-5 rounded-2xl border-2 ${node.color} shadow-xs transition-all hover:scale-[1.01]`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    {node.badge}
                  </span>
                  <span className="w-5 h-5 rounded-full bg-white text-slate-700 font-bold font-mono text-[11px] flex items-center justify-center border border-slate-200 shadow-2xs">
                    {node.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {node.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {node.desc}
                </p>
              </div>

              {/* Arrow Down Connector */}
              <div className="py-1.5 flex items-center justify-center text-indigo-400">
                <ArrowDown className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          ))}

          {/* Final Outcome Box: Fork to Found or Not Found */}
          <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-sm">Tìm thấy</div>
                <div className="text-xs text-emerald-800">Trả về index pos</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
              <div>
                <div className="font-bold text-sm">Không tìm thấy</div>
                <div className="text-xs text-rose-800">Trả về kết quả -1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
