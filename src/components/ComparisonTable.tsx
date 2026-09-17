import { GitCompare, Check, Minus } from 'lucide-react';

export function ComparisonTable() {
  const comparisons = [
    {
      criteria: 'Dữ liệu yêu cầu',
      interpolation: 'Mảng tăng dần',
      binary: 'Mảng tăng dần',
      note: 'Cả hai đều yêu cầu mảng phải được sắp xếp trước',
    },
    {
      criteria: 'Cách chọn vị trí',
      interpolation: 'Ước lượng vị trí (dựa trên giá trị target)',
      binary: 'Chia đôi (mid = (low + high) / 2)',
      note: 'Interpolation thích ứng theo giá trị, Binary cố định tại tâm',
    },
    {
      criteria: 'Trường hợp trung bình',
      interpolation: 'O(log log n)',
      binary: 'O(log n)',
      note: 'Interpolation nhanh hơn vượt trội khi phân bố đều',
      highlight: 'inter',
    },
    {
      criteria: 'Trường hợp xấu nhất',
      interpolation: 'O(n)',
      binary: 'O(log n)',
      note: 'Binary Search đảm bảo giới hạn an toàn hơn khi phân bố lệch',
      highlight: 'binary',
    },
    {
      criteria: 'Bộ nhớ phụ (Space)',
      interpolation: 'O(1)',
      binary: 'O(1)',
      note: 'Cả hai đều tìm kiếm tại chỗ (in-place) với thuật toán lặp',
    },
    {
      criteria: 'Điều kiện phân bố dữ liệu',
      interpolation: 'Hiệu quả khi phân bố đều',
      binary: 'Không yêu cầu phân bố đều',
      note: 'Binary search độc lập với quy luật phân bố khoảng cách',
    },
  ];

  return (
    <section id="comparison" className="py-16 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GitCompare className="w-3.5 h-3.5" />
            <span>Đối Sánh Học Thuật</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            So sánh: Interpolation vs Binary Search
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Bảng đối sánh kỹ thuật chi tiết giúp lựa chọn giải thuật tối ưu theo từng đặc thù bài toán
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    Tiêu chí
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50/50 w-3/8">
                    Interpolation Search
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-700 w-3/8">
                    Binary Search
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      <div>{row.criteria}</div>
                      <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                        {row.note}
                      </div>
                    </td>
                    <td
                      className={`py-4 px-6 font-mono text-sm ${
                        row.highlight === 'inter'
                          ? 'text-emerald-700 font-bold bg-emerald-50/40'
                          : row.highlight === 'binary'
                          ? 'text-rose-700 font-bold bg-rose-50/40'
                          : 'text-indigo-950 font-medium bg-indigo-50/20'
                      }`}
                    >
                      {row.interpolation}
                    </td>
                    <td
                      className={`py-4 px-6 font-mono text-sm ${
                        row.highlight === 'binary'
                          ? 'text-emerald-700 font-bold bg-emerald-50/40'
                          : 'text-slate-800'
                      }`}
                    >
                      {row.binary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick takeaway summary banner */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-semibold text-slate-800">
              💡 Lời khuyên thiết kế:
            </span>
            <span>
              Sử dụng <strong>Interpolation Search</strong> cho cơ sở dữ liệu số lớn phân bố đều (chẳng hạn mã sinh viên, ID tự tăng). Sử dụng <strong>Binary Search</strong> khi không chắc chắn về phân bố dữ liệu.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
