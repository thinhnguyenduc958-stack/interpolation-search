import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Shuffle, FastForward } from 'lucide-react';

interface StepControlsProps {
  onRunAlgorithm: () => void;
  onStepForward: () => void;
  onStepBackward: () => void;
  onReset: () => void;
  onRandom: () => void;
  onToggleAutoPlay: () => void;
  isAutoPlaying: boolean;
  canStepForward: boolean;
  canStepBackward: boolean;
  currentStepIndex: number;
  totalSteps: number;
  playbackSpeed: number;
  onChangeSpeed: (speed: number) => void;
}

export function StepControls({
  onRunAlgorithm,
  onStepForward,
  onStepBackward,
  onReset,
  onRandom,
  onToggleAutoPlay,
  isAutoPlaying,
  canStepForward,
  canStepBackward,
  currentStepIndex,
  totalSteps,
  playbackSpeed,
  onChangeSpeed,
}: StepControlsProps) {
  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col gap-4">
      {/* Top Main Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Execution triggers */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            id="btn-run-all"
            type="button"
            onClick={onRunAlgorithm}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs sm:text-sm hover:bg-indigo-700 shadow-xs transition-colors"
          >
            <FastForward className="w-4 h-4" />
            <span>Chạy thuật toán</span>
          </button>

          <button
            id="btn-step-next-primary"
            type="button"
            onClick={onStepForward}
            disabled={!canStepForward}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-200 transition-colors"
          >
            <span>Từng bước</span>
          </button>

          <button
            id="btn-autoplay"
            type="button"
            onClick={onToggleAutoPlay}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold text-xs sm:text-sm border transition-colors ${
              isAutoPlaying
                ? 'bg-amber-500 text-white border-amber-600 hover:bg-amber-600'
                : 'bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700'
            }`}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>⏸ Tạm dừng</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>▶ Tự động chạy</span>
              </>
            )}
          </button>
        </div>

        {/* Reset & Random */}
        <div className="flex items-center gap-2">
          <button
            id="btn-reset"
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-slate-700 font-medium text-xs sm:text-sm border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Đặt lại</span>
          </button>

          <button
            id="btn-random"
            type="button"
            onClick={onRandom}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-slate-700 font-medium text-xs sm:text-sm border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5 text-slate-500" />
            <span>Random</span>
          </button>
        </div>
      </div>

      {/* Stepping bar & playback speed */}
      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Step Navigation */}
        <div className="flex items-center gap-2">
          <button
            id="btn-step-prev"
            type="button"
            onClick={onStepBackward}
            disabled={!canStepBackward}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>← Bước trước</span>
          </button>

          <div className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-medium text-slate-700">
            Bước {totalSteps > 0 ? currentStepIndex + 1 : 0} / {totalSteps}
          </div>

          <button
            id="btn-step-next"
            type="button"
            onClick={onStepForward}
            disabled={!canStepForward}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <span>Bước tiếp theo →</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Speed Selector */}
        <div className="flex items-center gap-1 text-xs text-slate-500">
          <span className="font-medium mr-1">Tốc độ:</span>
          {[0.5, 1, 1.5, 2].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onChangeSpeed(s)}
              className={`px-2 py-0.5 rounded text-xs font-mono font-semibold transition-colors ${
                playbackSpeed === s
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
