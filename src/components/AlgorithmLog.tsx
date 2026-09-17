import { SearchStep } from '../types';
import { History, CheckCircle2, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';

interface AlgorithmLogProps {
  steps: SearchStep[];
  currentStepIndex: number;
  onSelectStep: (index: number) => void;
}

export function AlgorithmLog({ steps, currentStepIndex, onSelectStep }: AlgorithmLogProps) {
  if (steps.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs text-center text-slate-400 text-sm">
        <History className="w-8 h-8 mx-auto text-slate-300 mb-2" />
        Chưa có lịch sử thực thi. Bấm <strong>"Chạy thuật toán"</strong> hoặc <strong>"Từng bước"</strong> để xem nhật ký.
      </div>
    );
  }

  // Show up to current active step or all steps
  const visibleSteps = steps.slice(0, currentStepIndex + 1);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-indigo-600" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
            Nhật ký thuật toán
          </h3>
        </div>
        <span className="text-xs font-mono text-slate-500">
          Đang hiển thị: {visibleSteps.length} / {steps.length} bước
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs font-mono">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 bg-slate-50/70">
              <th className="py-2.5 px-3 font-semibold">Bước</th>
              <th className="py-2.5 px-3 font-semibold">low</th>
              <th className="py-2.5 px-3 font-semibold">high</th>
              <th className="py-2.5 px-3 font-semibold">pos</th>
              <th className="py-2.5 px-3 font-semibold">arr[pos]</th>
              <th className="py-2.5 px-3 font-semibold">So sánh & Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visibleSteps.map((step, idx) => {
              const isCurrent = idx === currentStepIndex;

              return (
                <tr
                  key={step.stepNumber}
                  onClick={() => onSelectStep(idx)}
                  className={`cursor-pointer transition-colors ${
                    isCurrent
                      ? 'bg-indigo-50/80 font-bold text-indigo-950'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                  title="Bấm để nhảy tới bước này"
                >
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-flex items-center justify-center w-5 h-5 rounded text-[10px] ${
                        isCurrent
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-blue-700 font-semibold">{step.low}</td>
                  <td className="py-2.5 px-3 text-amber-700 font-semibold">{step.high}</td>
                  <td className="py-2.5 px-3 text-purple-700 font-semibold">
                    {step.pos !== -1 ? step.pos : '-'}
                  </td>
                  <td className="py-2.5 px-3 font-semibold">
                    {step.arrPos !== -1 ? step.arrPos : '-'}
                  </td>
                  <td className="py-2.5 px-3 font-sans">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {step.comparison === 'EQUAL' || step.comparison === 'SINGLE_ELEMENT_MATCH' ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          → Tìm thấy!
                        </span>
                      ) : step.comparison === 'LESS' ? (
                        <span className="inline-flex items-center gap-1 text-sky-700 bg-sky-50 px-2 py-0.5 rounded text-[11px]">
                          <ArrowRight className="w-3 h-3" />
                          target lớn hơn → low = {step.pos + 1}
                        </span>
                      ) : step.comparison === 'GREATER' ? (
                        <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px]">
                          <ArrowLeft className="w-3 h-3" />
                          target nhỏ hơn → high = {step.pos - 1}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-rose-700 bg-rose-50 px-2 py-0.5 rounded text-[11px]">
                          <AlertCircle className="w-3 h-3" />
                          {step.nextAction}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
