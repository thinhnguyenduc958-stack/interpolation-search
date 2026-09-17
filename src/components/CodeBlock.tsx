import { useState } from 'react';
import { Code2, Copy, Check, Terminal, FileCode } from 'lucide-react';
import { codeSnippets } from '../data/codeSnippets';
import { CodeLanguage } from '../types';

export function CodeBlock() {
  const [activeLang, setActiveLang] = useState<CodeLanguage>('cpp');
  const [copied, setCopied] = useState(false);

  const currentSnippet = codeSnippets[activeLang];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const languages: { id: CodeLanguage; label: string }[] = [
    { id: 'cpp', label: 'C++' },
    { id: 'java', label: 'Java' },
    { id: 'python', label: 'Python' },
    { id: 'javascript', label: 'JavaScript' },
  ];

  return (
    <section id="code" className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Mã Nguồn Mẫu Chuẩn</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Mã nguồn cài đặt
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Cài đặt hoàn chỉnh thuật toán Interpolation Search bằng các ngôn ngữ lập trình phổ biến
          </p>
        </div>

        {/* Code Editor Mockup Card */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 gap-3">
            {/* Left: Language Tabs */}
            <div className="flex items-center space-x-1.5 overflow-x-auto">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  type="button"
                  onClick={() => setActiveLang(lang.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    activeLang === lang.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Right: File name & Copy Button */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <FileCode className="w-3.5 h-3.5 text-slate-500" />
                <span>{currentSnippet.fileName}</span>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-mono transition-colors border border-slate-700"
                aria-label="Sao chép mã nguồn"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Window with line numbers */}
          <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
            <pre className="flex">
              {/* Line numbers */}
              <div className="select-none text-slate-600 pr-4 text-right border-r border-slate-800/80 mr-4 font-mono">
                {currentSnippet.code.split('\n').map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Code content */}
              <code className="text-slate-100 whitespace-pre">
                {currentSnippet.code}
              </code>
            </pre>
          </div>
        </div>

        {/* Technical Callout */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
          <Terminal className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <p>
            <strong>Lưu ý ép kiểu:</strong> Khi thực hiện phép tính trong C++ hoặc Java, hãy ép kiểu tử số sang <code className="font-mono text-indigo-700 bg-white px-1 py-0.5 rounded border border-slate-200">double</code> hoặc <code className="font-mono text-indigo-700 bg-white px-1 py-0.5 rounded border border-slate-200">long</code> để tránh tràn số (integer overflow) khi <code className="font-mono">(target - arr[low]) * (high - low)</code> là tích số lớn.
          </p>
        </div>
      </div>
    </section>
  );
}
