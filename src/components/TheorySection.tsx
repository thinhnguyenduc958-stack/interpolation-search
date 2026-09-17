import { BookOpen, Sparkles, Scale, TrendingUp, Compass, PhoneCall } from 'lucide-react';

export function TheorySection() {
  return (
    <section id="theory" className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Khái Niệm Nền Tảng</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Tìm kiếm nội suy là gì?
          </h2>
          <p className="mt-2 text-base text-slate-600 font-mono">
            Interpolation Search: An improved variant of Binary Search
          </p>
        </div>

        {/* 3 Core Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Bản chất thuật toán
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tìm kiếm nội suy (<strong>Interpolation Search</strong>) là thuật toán tìm kiếm trên{' '}
                <mark className="bg-indigo-100/80 text-indigo-900 px-1 py-0.5 rounded font-semibold">
                  mảng đã sắp xếp
                </mark>{' '}
                theo thứ tự{' '}
                <mark className="bg-indigo-100/80 text-indigo-900 px-1 py-0.5 rounded font-semibold">
                  tăng dần
                </mark>.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Yêu cầu cơ sở: Mảng có thứ tự
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-purple-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Khác biệt so với Binary Search
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Khác với tìm kiếm nhị phân (Binary Search) luôn chia đôi khoảng tìm kiếm ở chính giữa,
                Interpolation Search sẽ{' '}
                <mark className="bg-purple-100/80 text-purple-900 px-1 py-0.5 rounded font-semibold">
                  ước lượng vị trí
                </mark>{' '}
                của phần tử cần tìm dựa trên giá trị của khóa tìm kiếm.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Tận dụng độ lớn của khóa tìm kiếm
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Điều kiện phân bố dữ liệu
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thuật toán hoạt động hiệu quả khi các phần tử trong mảng{' '}
                <mark className="bg-emerald-100/80 text-emerald-900 px-1 py-0.5 rounded font-semibold">
                  phân bố tương đối đồng đều
                </mark>. Tuy nhiên dữ liệu phải được sắp xếp theo thứ tự tăng dần trước khi tìm.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Đạt hiệu suất O(log log n) lý tưởng
            </div>
          </div>
        </div>

        {/* Real-world intuition box */}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50/70 via-white to-slate-50 rounded-2xl border border-indigo-100/80 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div className="text-sm text-slate-700 leading-relaxed">
            <p className="font-bold text-slate-900 mb-1 flex items-center gap-2">
              <span>Hình ảnh tương tự trong đời sống: Tra cứu danh bạ hoặc từ điển</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </p>
            <p>
              Nếu bạn muốn tra từ bắt đầu bằng chữ <strong>"B"</strong> trong từ điển dày 1000 trang, bạn sẽ mở ở những trang đầu thay vì lật ngay chính giữa (trang 500 chữ M).
              Nếu tra chữ <strong>"V"</strong>, bạn sẽ lật ở phần cuối. Đó chính là trực giác của <em>Interpolation Search</em>!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
