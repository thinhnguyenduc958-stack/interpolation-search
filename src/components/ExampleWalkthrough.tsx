import { CheckCircle2, ArrowRight, Calculator, Flag } from 'lucide-react';

export function ExampleWalkthrough() {
  const exampleArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const target = 70;

  return (
    <section id="example" className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flag className="w-3.5 h-3.5" />
            <span>Ví Dụ Minh Họa Chi Tiết</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Ví dụ mẫu từng bước
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Xem xét chi tiết quá trình tính toán và tìm kiếm phần tử <span className="font-mono font-bold text-indigo-600">target = 70</span> trên mảng 10 phần tử
          </p>
        </div>

        {/* Array preview card */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 mb-8">
          <div className="text-xs font-mono text-slate-500 uppercase font-semibold mb-3">
            Mảng ban đầu (Đã sắp xếp tăng dần đều):
          </div>
          <div className="overflow-x-auto pb-2">
            <div className="flex items-center gap-2 min-w-max">
              {exampleArray.map((val, idx) => (
                <div
                  key={idx}
                  className={`w-12 h-14 rounded-xl flex flex-col items-center justify-center font-mono border ${
                    val === target
                      ? 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-xs'
                      : 'bg-white text-slate-800 border-slate-200'
                  }`}
                >
                  <span className="text-sm">{val}</span>
                  <span className={`text-[10px] ${val === target ? 'text-emerald-100' : 'text-slate-400'}`}>
                    i={idx}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline breakdown */}
        <div className="relative border-l-2 border-indigo-200 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {/* Milestone 1: Khởi tạo */}
          <div className="relative">
            <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow-xs">
              1
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <h4 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span>Khởi tạo biên tìm kiếm</span>
                <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  low = 0, high = 9
                </span>
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                Xác định các giá trị tại hai biên:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>low = <span className="font-bold text-blue-600">0</span></div>
                <div>arr[low] = <span className="font-bold text-blue-600">10</span></div>
                <div>high = <span className="font-bold text-amber-600">9</span></div>
                <div>arr[high] = <span className="font-bold text-amber-600">100</span></div>
              </div>
            </div>
          </div>

          {/* Milestone 2: Tính công thức */}
          <div className="relative">
            <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow-xs">
              2
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-purple-600" />
                <span>Tính vị trí ước lượng (pos)</span>
              </h4>
              <div className="space-y-2 text-xs sm:text-sm font-mono bg-purple-50/70 p-4 rounded-xl border border-purple-200 text-purple-950">
                <div>pos = low + ⌊((target - arr[low]) * (high - low)) / (arr[high] - arr[low])⌋</div>
                <div>pos = 0 + ⌊((70 - 10) * (9 - 0)) / (100 - 10)⌋</div>
                <div>pos = 0 + ⌊(60 * 9) / 90⌋</div>
                <div>pos = 0 + ⌊540 / 90⌋</div>
                <div className="font-bold text-base text-purple-700 pt-1 border-t border-purple-200">
                  pos = 0 + 6 = 6
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 3: So sánh & Kết luận */}
          <div className="relative">
            <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow-xs">
              3
            </div>
            <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 shadow-xs">
              <h4 className="text-base font-bold text-emerald-950 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>So sánh arr[pos] với target</span>
              </h4>
              <p className="text-sm text-emerald-900 mb-3">
                Kiểm tra giá trị phần tử tại chỉ số ước lượng:
              </p>
              <div className="bg-white p-3.5 rounded-xl border border-emerald-200 text-xs sm:text-sm font-mono text-slate-800 mb-3">
                arr[6] = 70 === target (70)
              </div>
              <div className="p-3 bg-emerald-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-2xs">
                <span>✓ Kết quả: 70 được tìm thấy tại index 6 chỉ sau đúng 1 bước so sánh!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
