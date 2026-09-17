import { CheckCircle, XCircle, Clock, Hash, CheckSquare } from 'lucide-react';
import { SearchResult } from '../types';

interface ResultCardProps {
  result: SearchResult | null;
  targetValue: number;
}

export function ResultCard({ result, targetValue }: ResultCardProps) {
  if (!result) return null;

  return (
    <div
      id="search-result-card"
      className={`rounded-2xl p-6 border transition-all ${
        result.found
          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950 shadow-xs'
          : 'bg-rose-50/70 border-rose-200 text-rose-950 shadow-xs'
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Main Status & Message */}
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
              result.found
                ? 'bg-emerald-600 text-white'
                : 'bg-rose-600 text-white'
            }`}
          >
            {result.found ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              <XCircle className="w-6 h-6" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  result.found
                    ? 'bg-emerald-200/80 text-emerald-900'
                    : 'bg-rose-200/80 text-rose-900'
                }`}
              >
                {result.found ? '✓ Đã tìm thấy' : '× Không tìm thấy'}
              </span>
            </div>
            <h4 className="text-xl font-extrabold mt-1.5 text-slate-900">
              {result.found
                ? `Giá trị ${targetValue} nằm tại index ${result.index}.`
                : `Giá trị ${targetValue} không tồn tại trong mảng.`}
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              {result.message}
            </p>
          </div>
        </div>

        {/* Metric stats badges */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Iterations */}
          <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs min-w-[100px]">
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span>Số lần lặp</span>
            </div>
            <div className="text-lg font-mono font-bold text-slate-900 mt-0.5">
              {result.iterations}
            </div>
          </div>

          {/* Comparisons */}
          <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs min-w-[100px]">
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <Hash className="w-3.5 h-3.5 text-amber-600" />
              <span>Số lần so sánh</span>
            </div>
            <div className="text-lg font-mono font-bold text-slate-900 mt-0.5">
              {result.comparisons}
            </div>
          </div>

          {/* Result Index */}
          <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs min-w-[100px]">
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Index kết quả</span>
            </div>
            <div
              className={`text-lg font-mono font-bold mt-0.5 ${
                result.found ? 'text-emerald-700' : 'text-slate-400'
              }`}
            >
              {result.found ? result.index : '-1'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
