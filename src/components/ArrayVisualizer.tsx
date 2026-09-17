import { SearchStep } from '../types';
import { Target, CheckCircle2, XCircle, ArrowDown } from 'lucide-react';

interface ArrayVisualizerProps {
  array: number[];
  currentStep: SearchStep | null;
  targetValue: number;
  isFinished: boolean;
  onSelectIndex?: (index: number) => void;
}

export function ArrayVisualizer({
  array,
  currentStep,
  targetValue,
  isFinished,
  onSelectIndex,
}: ArrayVisualizerProps) {
  if (array.length === 0) {
    return (
      <div className="p-8 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
        Mảng đang rỗng. Vui lòng nhập dữ liệu mảng hoặc nhấn nút "Random".
      </div>
    );
  }

  const low = currentStep ? currentStep.low : 0;
  const high = currentStep ? currentStep.high : array.length - 1;
  const pos = currentStep ? currentStep.pos : -1;
  const isFound = currentStep ? currentStep.found : false;

  return (
    <div className="w-full bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
      {/* Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Trực quan hóa mảng số ({array.length} phần tử)
          </span>
        </div>

        {/* Legend Indicators */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>LOW (Chỉ số đầu)</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            <span>HIGH (Chỉ số cuối)</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200 font-semibold">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span>POS (Ước lượng)</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            <span>TARGET ({targetValue})</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Array Display */}
      <div className="mt-8 overflow-x-auto pb-6 pt-10 px-2 scroll-smooth">
        <div className="flex items-center justify-start gap-2.5 min-w-max mx-auto px-4">
          {array.map((value, index) => {
            const isLow = currentStep !== null && index === low;
            const isHigh = currentStep !== null && index === high;
            const isPos = currentStep !== null && index === pos;
            const isTargetValue = value === targetValue;
            const isMatchedPos = isPos && isFound;
            const isInCurrentRange =
              currentStep !== null
                ? index >= low && index <= high
                : true;

            // Indicator tags to stack above the box
            const indicators: { label: string; bg: string; text: string; border: string }[] = [];
            if (isPos) {
              indicators.push({
                label: 'POS',
                bg: isMatchedPos ? 'bg-emerald-600' : 'bg-purple-600',
                text: 'text-white',
                border: isMatchedPos ? 'border-emerald-700' : 'border-purple-700',
              });
            }
            if (isLow) {
              indicators.push({
                label: 'LOW',
                bg: 'bg-blue-600',
                text: 'text-white',
                border: 'border-blue-700',
              });
            }
            if (isHigh) {
              indicators.push({
                label: 'HIGH',
                bg: 'bg-amber-600',
                text: 'text-white',
                border: 'border-amber-700',
              });
            }

            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Pointer Badges Above */}
                <div className="absolute -top-10 flex flex-col items-center gap-0.5 pointer-events-none z-10">
                  {indicators.map((ind, i) => (
                    <span
                      key={i}
                      className={`text-[9px] font-mono font-extrabold px-1.5 py-0.5 rounded shadow-xs border ${ind.bg} ${ind.text} ${ind.border}`}
                    >
                      {ind.label}
                    </span>
                  ))}
                  {indicators.length > 0 && (
                    <ArrowDown className="w-3.5 h-3.5 text-slate-400 -mt-1" />
                  )}
                </div>

                {/* Array Cell Button */}
                <button
                  type="button"
                  onClick={() => onSelectIndex?.(index)}
                  className={`w-14 h-18 sm:w-16 sm:h-20 rounded-xl flex flex-col items-center justify-between p-2 font-mono transition-all duration-200 ${
                    !isInCurrentRange && currentStep !== null
                      ? 'bg-slate-100/70 text-slate-400 border border-slate-200/60 opacity-40 grayscale'
                      : isMatchedPos
                      ? 'bg-emerald-600 text-white border-2 border-emerald-400 shadow-md ring-4 ring-emerald-100 scale-105 z-10'
                      : isPos
                      ? 'bg-purple-50 text-purple-900 border-2 border-purple-500 shadow-sm ring-2 ring-purple-200 z-10 scale-105'
                      : isLow || isHigh
                      ? 'bg-indigo-50/70 text-indigo-950 border-2 border-indigo-400 shadow-xs'
                      : 'bg-white text-slate-800 border border-slate-200 hover:border-indigo-300 hover:bg-slate-50/80 shadow-xs'
                  }`}
                  title={`Index: ${index} | Giá trị: ${value}`}
                >
                  {/* Top status indicator icon */}
                  <div className="text-[10px] font-semibold w-full flex items-center justify-center">
                    {isMatchedPos ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    ) : isTargetValue && isInCurrentRange ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" title="Khớp target" />
                    ) : (
                      <span className="text-[10px] text-slate-400 font-mono">
                        #{index}
                      </span>
                    )}
                  </div>

                  {/* Main Value */}
                  <span className="text-base sm:text-lg font-bold tracking-tight">
                    {value}
                  </span>

                  {/* Bottom index label */}
                  <span
                    className={`text-[10px] font-mono ${
                      isMatchedPos
                        ? 'text-emerald-100'
                        : isPos
                        ? 'text-purple-600 font-bold'
                        : 'text-slate-400'
                    }`}
                  >
                    i = {index}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Step Math Breakdown Bar */}
      {currentStep && (
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-mono flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-slate-500 font-sans text-xs">
              <span className="font-bold text-slate-700">Bước {currentStep.stepNumber}:</span>{' '}
              {currentStep.explanation}
            </div>
            {currentStep.pos !== -1 && (
              <div className="text-purple-800 bg-purple-50 px-2.5 py-1 rounded border border-purple-200 inline-block">
                {currentStep.formulaCalculation}
              </div>
            )}
          </div>
          <div className="text-right shrink-0">
            <span className="text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200 font-semibold">
              Hành động: {currentStep.nextAction}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
