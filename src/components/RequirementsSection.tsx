import { CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export function RequirementsSection() {
  const requirements = [
    {
      title: 'Mảng phải được sắp xếp tăng dần',
      desc: 'Đây là điều kiện tiên quyết bắt buộc. Nếu mảng chưa được sắp xếp, công thức nội suy dựa trên giả định đơn điệu sẽ tính sai hoàn toàn.',
      isPositive: true,
    },
    {
      title: 'Dữ liệu nên có phân bố tương đối đồng đều để thuật toán phát huy hiệu quả',
      desc: 'Khi các khoảng cách giữa các phần tử xấp xỉ bằng nhau (phân bố đều), vị trí ước lượng pos sẽ vô cùng sát với vị trí thực tế của target.',
      isPositive: true,
    },
    {
      title: 'Có thể áp dụng tốt với dữ liệu số',
      desc: 'Công thức sử dụng các phép tính số học (trừ, nhân, chia tỉ lệ) nên cực kỳ tự nhiên và tối ưu cho dữ liệu kiểu số nguyên hoặc số thực.',
      isPositive: true,
    },
    {
      title: 'Không phù hợp bằng Binary Search trong nhiều trường hợp dữ liệu phân bố không đều',
      desc: 'Nếu dữ liệu tăng theo cấp số nhân (exponential) hoặc tập trung dày đặc một nơi, Binary Search với O(log n) đảm bảo sẽ ổn định và đáng tin cậy hơn.',
      isPositive: false,
    },
  ];

  return (
    <section id="requirements" className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Tiêu Chuẩn Áp Dụng</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Điều kiện để sử dụng
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Những tiền đề cần thỏa mãn để thuật toán đạt tính đúng đắn và phát huy tối đa ưu thế
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {requirements.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all ${
                item.isPositive
                  ? 'bg-slate-50/80 border-slate-200/90 hover:border-indigo-300'
                  : 'bg-amber-50/40 border-amber-200/80 hover:border-amber-300'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    item.isPositive
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {item.isPositive ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
