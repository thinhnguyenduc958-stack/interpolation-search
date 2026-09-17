import { Gauge, Zap, TrendingUp, AlertTriangle, Database } from 'lucide-react';

export function ComplexitySection() {
  return (
    <section id="complexity" className="py-16 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Gauge className="w-3.5 h-3.5" />
            <span>Phân Tích Hiệu Năng</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Độ phức tạp
          </h2>
          <p className="mt-2 text-base text-slate-600 font-mono">
            Time & Space Complexity Analysis
          </p>
        </div>

        {/* 3 Main Time Complexity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Best Case */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Best Case
                </span>
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="font-mono text-3xl font-extrabold text-slate-900 mb-2">
                O(1)
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Xảy ra khi phần tử cần tìm nằm ngay tại vị trí ước lượng đầu tiên được tính toán bởi công thức (như ví dụ với mảng phân bố đều hoàn hảo).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-emerald-600 font-semibold">
              Chỉ cần 1 phép so sánh
            </div>
          </div>

          {/* Average Case */}
          <div className="bg-white rounded-2xl p-6 border border-indigo-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                  Average Case
                </span>
                <TrendingUp className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="font-mono text-3xl font-extrabold text-slate-900 mb-2">
                O(log log n)
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Interpolation Search có thể đạt hiệu quả rất cao khi dữ liệu được phân bố tương đối đồng đều.
                Với 1 triệu phần tử, trung bình chỉ mất khoảng 4 đến 5 bước lặp!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-indigo-600 font-semibold">
              Nhanh hơn O(log n)
            </div>
          </div>

          {/* Worst Case */}
          <div className="bg-white rounded-2xl p-6 border border-rose-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                  Worst Case
                </span>
                <AlertTriangle className="w-5 h-5 text-rose-600" />
              </div>
              <div className="font-mono text-3xl font-extrabold text-slate-900 mb-2">
                O(n)
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Trong trường hợp dữ liệu phân bố không đều, hiệu năng có thể giảm và trường hợp xấu nhất có thể là O(n).
                Ví dụ: Dãy lũy thừa hoặc lệch hẳn về một phía.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-rose-600 font-semibold">
              Suy biến thành tìm kiếm tuyến tính
            </div>
          </div>
        </div>

        {/* Space Complexity & Explanation Card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <Database className="w-4 h-4 text-slate-600" />
              <span>Space Complexity</span>
            </div>
            <div className="font-mono text-3xl font-extrabold text-slate-900">
              O(1)
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Thuật toán là In-place, chỉ cần vài biến nguyên (low, high, pos) mà không tốn thêm bộ nhớ đệm phụ trợ.
            </p>
          </div>

          <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-center text-sm text-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900">
              Tại sao lại là O(log log n)?
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Nếu như Binary Search chia đôi không gian mỗi lần (giảm kích thước bài toán từ <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">n</code> về <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">n/2</code>), thì Interpolation Search trên dữ liệu phân bố đều thu hẹp kích thước bài toán từ <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">n</code> về <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">√n</code>!
            </p>
            <p className="text-slate-600 leading-relaxed">
              Phương trình đệ quy <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">T(n) = T(√n) + O(1)</code> dẫn trực tiếp tới độ phức tạp kì vọng <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-indigo-700 font-bold">O(log log n)</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
