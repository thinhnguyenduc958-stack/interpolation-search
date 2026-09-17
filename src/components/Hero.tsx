import { useState, useEffect } from 'react';
import { Play, ArrowDown, Sparkles, Target, Calculator } from 'lucide-react';

export function Hero() {
  const heroArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const [selectedTarget, setSelectedTarget] = useState<number>(70);
  const [animatingIndex, setAnimatingIndex] = useState<number>(6); // 70 is at index 6

  // Calculate interpolation index for hero preview
  const low = 0;
  const high = heroArray.length - 1;
  const arrLow = heroArray[low];
  const arrHigh = heroArray[high];

  const calculatedPos =
    arrHigh !== arrLow
      ? Math.round(low + ((selectedTarget - arrLow) * (high - low)) / (arrHigh - arrLow))
      : 0;

  useEffect(() => {
    // When target changes, animate pointer
    setAnimatingIndex(calculatedPos);
  }, [calculatedPos]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white via-indigo-50/20 to-slate-50 border-b border-slate-200/60"
    >
      {/* Background subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Academic Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>GIẢI THUẬT & CẤU TRÚC DỮ LIỆU</span>
        </div>

        {/* Main Headings */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
        >
          TÌM KIẾM NỘI SUY
        </h1>
        <p
          id="hero-subtitle"
          className="mt-2 text-xl sm:text-2xl font-semibold text-indigo-600 tracking-normal font-mono"
        >
          Interpolation Search
        </p>

        {/* Description */}
        <p
          id="hero-description"
          className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Thuật toán tìm kiếm dựa trên ước lượng vị trí của phần tử trong một mảng đã được sắp xếp.
          Tương tự như cách bạn tra cứu từ trong từ điển theo thứ tự chữ cái thay vì luôn mở trang chính giữa.
        </p>

        {/* Two Call to action buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            id="hero-btn-simulator"
            href="#simulator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>▶ Chạy mô phỏng</span>
          </a>
          <a
            id="hero-btn-theory"
            href="#theory"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 font-medium text-sm border border-slate-200 shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            <ArrowDown className="w-4 h-4 text-slate-500" />
            <span>↓ Xem lý thuyết</span>
          </a>
        </div>

        {/* Interactive Array Preview Box */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm max-w-4xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                Mô hình trực quan: Array & Interpolation Pointer
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Bấm vào một số để đổi target:</span>
              <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                Target = {selectedTarget}
              </span>
            </div>
          </div>

          {/* Array visual presentation */}
          <div className="mt-6">
            <div className="overflow-x-auto pb-4 pt-8">
              <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max px-2">
                {heroArray.map((val, idx) => {
                  const isTarget = val === selectedTarget;
                  const isEstimated = idx === animatingIndex;

                  return (
                    <div key={idx} className="relative flex flex-col items-center">
                      {/* Estimated pointer indicator on top */}
                      {isEstimated && (
                        <div className="absolute -top-7 flex flex-col items-center">
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-100 border border-purple-300 px-1.5 py-0.2 rounded shadow-xs whitespace-nowrap">
                            POS ({idx})
                          </span>
                          <span className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-purple-600 mt-0.5" />
                        </div>
                      )}

                      {/* Element card */}
                      <button
                        type="button"
                        onClick={() => setSelectedTarget(val)}
                        className={`w-12 h-14 sm:w-14 sm:h-16 rounded-xl flex flex-col items-center justify-center font-mono text-base sm:text-lg font-bold transition-all duration-200 ${
                          isTarget
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 ring-2 ring-emerald-400 scale-105'
                            : isEstimated
                            ? 'bg-purple-50 text-purple-900 border-2 border-purple-500 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                        title={`Chọn target = ${val} (Index: ${idx})`}
                      >
                        <span>{val}</span>
                        <span className={`text-[10px] font-normal mt-0.5 ${isTarget ? 'text-emerald-100' : 'text-slate-600'}`}>
                          i={idx}
                        </span>
                      </button>

                      {/* Low and High labels */}
                      {idx === 0 && (
                        <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                          LOW
                        </span>
                      )}
                      {idx === heroArray.length - 1 && (
                        <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                          HIGH
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick explanation formula line for the hero */}
            <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-purple-600 shrink-0" />
                <span>
                  Ước lượng: pos = 0 + [({selectedTarget} - 10) × 8 / (90 - 10)] = {animatingIndex}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-emerald-700 font-semibold">
                  arr[{animatingIndex}] = {heroArray[animatingIndex]} {heroArray[animatingIndex] === selectedTarget ? '(Khớp ngay bước đầu!)' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
