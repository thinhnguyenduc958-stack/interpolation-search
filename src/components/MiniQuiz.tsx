import { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award, ArrowRight } from 'lucide-react';
import { quizQuestions } from '../data/quizData';

export function MiniQuiz() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    // If already answered, allow reselecting before submitting or lock in immediate feedback
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  // Calculate score
  const score = quizQuestions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const total = quizQuestions.length;
  const allAnswered = Object.keys(selectedAnswers).length === total;

  return (
    <section id="quiz" className="py-16 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Kiểm Tra Nhanh Kiến Thức</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Trắc nghiệm củng cố (Mini Quiz)
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Thử thách {total} câu hỏi trắc nghiệm kiến thức giải thuật về Interpolation Search
          </p>
        </div>

        {/* Progress & Score Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Tiến độ:</span>
            <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
              {Object.keys(selectedAnswers).length} / {total} câu đã trả lời
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs font-semibold text-slate-700">
              Điểm số hiện tại:{' '}
              <span className="font-mono font-bold text-indigo-600 text-sm">
                {score} / {total}
              </span>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm lại</span>
            </button>
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-6">
          {quizQuestions.map((q, qIndex) => {
            const userAnswer = selectedAnswers[q.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = isAnswered && userAnswer === q.correctIndex;

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4"
              >
                {/* Question title */}
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {qIndex + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {q.question}
                  </h3>
                </div>

                {/* Multiple choice options */}
                <div className="space-y-2 pt-1 pl-9">
                  {q.options.map((option, optIdx) => {
                    const isOptionSelected = userAnswer === optIdx;
                    const isOptionCorrect = optIdx === q.correctIndex;

                    let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                    if (isAnswered) {
                      if (isOptionCorrect) {
                        btnStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                      } else if (isOptionSelected && !isCorrect) {
                        btnStyle = 'bg-rose-50 border-rose-300 text-rose-950 font-semibold ring-1 ring-rose-400';
                      } else {
                        btnStyle = 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelect(q.id, optIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full border border-current text-[11px] font-mono flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{option}</span>
                        </div>

                        {isAnswered && (
                          <div>
                            {isOptionCorrect && (
                              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {isOptionSelected && !isCorrect && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback & Explanation */}
                {isAnswered && (
                  <div
                    className={`ml-9 p-3.5 rounded-xl border text-xs leading-relaxed ${
                      isCorrect
                        ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                        : 'bg-rose-50/80 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5 mb-1">
                      {isCorrect ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span>✓ Chính xác!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600" />
                          <span>✗ Chưa chính xác!</span>
                        </>
                      )}
                    </div>
                    <p className="text-slate-700 mt-1">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion Card */}
        {allAnswered && (
          <div className="mt-8 p-6 bg-indigo-600 text-white rounded-2xl shadow-md text-center space-y-3">
            <Award className="w-10 h-10 mx-auto text-amber-300" />
            <h4 className="text-xl font-extrabold">
              Hoàn thành bài trắc nghiệm!
            </h4>
            <p className="text-indigo-100 text-sm max-w-md mx-auto">
              Bạn đạt <strong>{score}/{total}</strong> câu trả lời đúng ({Math.round((score / total) * 100)}%).
              {score === total
                ? ' Xuất sắc! Bạn đã nắm rất vững thuật toán Interpolation Search.'
                : ' Bạn có thể xem lại lý thuyết và làm lại để đạt điểm tuyệt đối.'}
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-indigo-900 font-semibold text-xs hover:bg-indigo-50 shadow-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm lại bài trắc nghiệm</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
