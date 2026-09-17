import { useState, useEffect } from 'react';
import { Menu, X, Cpu, Compass, BookOpen, Play, Gauge, GitCompare, Code, HelpCircle } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tổng quan', href: '#hero', icon: Compass },
    { name: 'Lý thuyết', href: '#theory', icon: BookOpen },
    { name: 'Cách hoạt động', href: '#how-it-works', icon: Cpu },
    { name: 'Mô phỏng', href: '#simulator', icon: Play },
    { name: 'Độ phức tạp', href: '#complexity', icon: Gauge },
    { name: 'So sánh', href: '#comparison', icon: GitCompare },
    { name: 'Mã nguồn', href: '#code', icon: Code },
    { name: 'Trắc nghiệm', href: '#quiz', icon: HelpCircle },
  ];

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="#hero"
            className="flex items-center gap-2.5 text-slate-900 group"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-200 group-hover:bg-indigo-700 transition-colors">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-900 leading-none">
                ALGO <span className="text-indigo-600">LAB</span>
              </span>
              <span className="text-[10px] text-slate-600 font-medium tracking-wider uppercase mt-0.5">
                Algorithms Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.href.replace('#', '')}`}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              id="nav-quick-simulator-btn"
              href="#simulator"
              className="ml-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Mô phỏng
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-indigo-600 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
              aria-label="Mở menu điều hướng"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div
          id="mobile-nav-dropdown"
          className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                <Icon className="w-4 h-4 text-slate-600" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#simulator"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              Mở bộ mô phỏng ngay
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
