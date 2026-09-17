import { Calculator, HelpCircle, Layers, ArrowRight, Lightbulb } from 'lucide-react';

export function FormulaCard() {
  const variables = [
    {
      symbol: 'low',
      meaning: 'Vị trí đầu của phạm vi tìm kiếm.',
      color: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      symbol: 'high',
      meaning: 'Vị trí cuối của phạm vi tìm kiếm.',
      color: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      symbol: 'target',
      meaning: 'Giá trị cần tìm.',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      symbol: 'arr[low]',
      meaning: 'Giá trị nhỏ nhất trong phạm vi hiện tại.',
      color: 'text-sky-700 bg-sky-50 border-sky-200',
    },
    {
      symbol: 'arr[high]',
      meaning: 'Giá trị lớn nhất trong phạm vi hiện tại.',
      color: 'text-orange-700 bg-orange-50 border-orange-200',
    },
    {
      symbol: 'pos',
      meaning: 'Vị trí được ước lượng.',
      color: 'text-purple-700 bg-purple-50 border-purple-200',
    },
  ];

  return (
    <section id="formula" className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Toán Học & Công Thức</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Công thức Interpolation Search
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Trái tim của thuật toán: Công thức tính vị trí ước lượng dựa trên phép nội suy tuyến tính
          </p>
        </div>

        {/* Large Prominent Formula Card */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-indigo-900/50 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-4">
              INTERPOLATION POSITION FORMULA
            </div>

            {/* Formula Display */}
            <div className="w-full overflow-x-auto py-6 px-2">
              <div className="font-mono text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center justify-center min-w-max gap-3">
                <span className="text-purple-400 bg-purple-500/20 px-3 py-1.5 rounded-xl border border-purple-400/30">
                  pos
                </span>
                <span className="text-slate-400">=</span>
                <span className="text-blue-400 bg-blue-500/20 px-3 py-1.5 rounded-xl border border-blue-400/30">
                  low
                </span>
                <span className="text-slate-400">+</span>
                
                {/* Fraction representation */}
                <div className="inline-flex flex-col items-center mx-1">
                  <div className="px-3 pb-1 border-b-2 border-slate-400/80 text-center flex items-center gap-1.5">
                    <span className="text-slate-300">(</span>
                    <span className="text-emerald-400">target</span>
                    <span className="text-slate-400">-</span>
                    <span className="text-sky-300">arr[low]</span>
                    <span className="text-slate-300">)</span>
                    <span className="text-slate-400">×</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-amber-400">high</span>
                    <span className="text-slate-400">-</span>
                    <span className="text-blue-400">low</span>
                    <span className="text-slate-300">)</span>
                  </div>
                  <div className="pt-1 px-3 text-center flex items-center gap-1.5">
                    <span className="text-orange-400">arr[high]</span>
                    <span className="text-slate-400">-</span>
                    <span className="text-sky-300">arr[low]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Raw code notation */}
            <div className="mt-4 px-4 py-2 rounded-lg bg-black/40 border border-white/10 font-mono text-xs text-indigo-200">
              pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
            </div>
          </div>
        </div>

        {/* Variable Explanations Grid */}
        <div className="mt-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Giải thích các biến trong công thức:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {variables.map((v) => (
              <div
                key={v.symbol}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:bg-white hover:shadow-xs transition-all"
              >
                <div
                  className={`px-2.5 py-1 rounded-lg font-mono font-bold text-xs border ${v.color} shrink-0 mt-0.5`}
                >
                  {v.symbol}
                </div>
                <div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {v.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mathematical Intuition & Analogy */}
        <div className="mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100/80">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="text-sm text-slate-700 space-y-2">
              <h4 className="font-bold text-slate-900">
                Ý nghĩa hình học: Tỉ lệ nội suy tuyến tính (Linear Interpolation)
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Biểu thức <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-indigo-200 text-indigo-800">frac = (target - arr[low]) / (arr[high] - arr[low])</code> đại diện cho <strong>tỉ lệ phần trăm (từ 0.0 đến 1.0)</strong> mà giá trị target chiếm trên toàn dải giá trị.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Sau đó nhân tỉ lệ này với độ dài chỉ số <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-indigo-200 text-indigo-800">(high - low)</code> rồi cộng với chỉ số bắt đầu <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-indigo-200 text-indigo-800">low</code> để dịch chuyển chính xác đến tọa độ ước lượng!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
