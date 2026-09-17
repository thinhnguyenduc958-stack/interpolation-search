import { Cpu, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">
                ALGO <span className="text-indigo-400">LAB</span>
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Tìm hiểu thuật toán bằng trực quan và thực hành.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm font-medium">
            <a href="#hero" className="hover:text-white transition-colors">
              Tổng quan
            </a>
            <a href="#theory" className="hover:text-white transition-colors">
              Lý thuyết
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              Cách hoạt động
            </a>
            <a href="#formula" className="hover:text-white transition-colors">
              Công thức
            </a>
            <a href="#simulator" className="hover:text-white transition-colors">
              Mô phỏng
            </a>
            <a href="#complexity" className="hover:text-white transition-colors">
              Độ phức tạp
            </a>
            <a href="#comparison" className="hover:text-white transition-colors">
              So sánh
            </a>
            <a href="#code" className="hover:text-white transition-colors">
              Mã nguồn
            </a>
            <a href="#quiz" className="hover:text-white transition-colors">
              Trắc nghiệm
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
            aria-label="Lên đầu trang"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Lên đầu trang</span>
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 ALGO LAB. Dành riêng cho sinh viên học Cấu trúc dữ liệu & Giải thuật.</p>
          <p className="flex items-center gap-1">
            <span>Interpolation Search Interactive Learning Platform</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
