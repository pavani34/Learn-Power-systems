
import React, { useState } from 'react';
import { COURSE_CURRICULUM } from './constants';
import Sidebar from './components/Sidebar';
import AITutor from './components/AITutor';
import Visualizer from './components/Visualizer';
import { Progress } from './types';

const App: React.FC = () => {
  const [currentDayNum, setCurrentDayNum] = useState(1);
  const [progress, setProgress] = useState<Progress>({
    completedDays: [],
    currentDay: 1,
    quizScores: {}
  });

  const currentDay = COURSE_CURRICULUM.find(d => d.day === currentDayNum) || COURSE_CURRICULUM[0];

  const markDayComplete = () => {
    if (!progress.completedDays.includes(currentDayNum)) {
      setProgress(prev => ({
        ...prev,
        completedDays: [...prev.completedDays, currentDayNum]
      }));
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        currentDay={currentDayNum} 
        onSelectDay={setCurrentDayNum} 
        completedDays={progress.completedDays}
      />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-5 flex justify-between items-center z-10 sticky top-0">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-white bg-blue-600 px-2 py-0.5 rounded shadow-sm">DAY {currentDay.day}</span>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">{currentDay.title}</h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">{currentDay.category} Mastery Module</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <div className="w-40 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div 
                  className="h-full bg-blue-600 transition-all duration-700 ease-out" 
                  style={{ width: `${(progress.completedDays.length / COURSE_CURRICULUM.length) * 100}%` }}
                />
              </div>
              <span className="text-[9px] text-slate-400 font-bold uppercase mt-1.5">Module Completion: {progress.completedDays.length}/14</span>
            </div>
            <button 
              onClick={markDayComplete}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all transform active:scale-95 ${
                progress.completedDays.includes(currentDayNum) 
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100 cursor-default' 
                : 'bg-slate-900 text-white hover:bg-black shadow-xl shadow-slate-200'
              }`}
            >
              {progress.completedDays.includes(currentDayNum) ? '✓ MASTERED' : 'MARK AS COMPLETE'}
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-4xl mx-auto space-y-12 pb-32">
            {currentDay.lessons.map((lesson) => (
              <section key={lesson.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-6">
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{lesson.title}</h3>
                  <p className="text-lg text-slate-500 mt-1">{lesson.description}</p>
                </div>
                
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 leading-relaxed text-slate-700 relative overflow-hidden">
                  <div className="prose prose-slate max-w-none whitespace-pre-wrap text-lg">
                    {lesson.content}
                  </div>
                  
                  {lesson.mathHighlight && (
                    <div className="mt-8 bg-slate-50 border-y border-slate-100 -mx-8 px-8 py-6 flex flex-col items-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Mathematical Foundation</span>
                      <div className="font-mono text-xl text-blue-700 bg-white px-6 py-3 rounded-lg border border-blue-100 shadow-sm">
                        {lesson.mathHighlight}
                      </div>
                    </div>
                  )}

                  {lesson.resources && (
                    <div className="mt-6 flex flex-wrap gap-4 items-center">
                      <span className="text-xs font-bold text-slate-400 uppercase">Recommended Reading:</span>
                      {lesson.resources.map(res => (
                        <span key={res} className="text-xs text-blue-600 underline cursor-help">{res}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {lesson.keywords.map(kw => (
                    <span key={kw} className="bg-white text-slate-600 px-3 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 shadow-sm transition-transform hover:-translate-y-0.5 cursor-default">
                      {kw.toUpperCase()}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  {lesson.id === "1.2" && <Visualizer type="phasor" />}
                  {lesson.id === "3.1" && <Visualizer type="transformer-efficiency" />}
                  {lesson.id === "6.2" && <Visualizer type="sparsity" />}
                  {lesson.id === "9.1" && <Visualizer type="sequence-network" />}
                  {lesson.id === "14.2" && <Visualizer type="residuals" />}
                </div>
              </section>
            ))}

            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-black rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              </div>
              <div className="relative z-10">
                <h4 className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Strategic Roadmap</h4>
                {currentDayNum < 14 ? (
                  <>
                    <p className="text-3xl font-black mb-6 tracking-tight">Up Next: {COURSE_CURRICULUM[currentDayNum].title}</p>
                    <button 
                      onClick={() => {
                        markDayComplete();
                        setCurrentDayNum(prev => prev + 1);
                        window.scrollTo(0, 0);
                      }}
                      className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-xs hover:bg-blue-50 transition-all hover:shadow-lg hover:shadow-white/10 flex items-center gap-3 uppercase tracking-wider"
                    >
                      Initialize Next Module
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </>
                ) : (
                  <p className="text-2xl font-black italic">Curriculum Mastered. You are ready for grid operations.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <aside className="w-[420px] flex-shrink-0 shadow-2xl z-20">
        <AITutor currentTopic={currentDay.title} />
      </aside>
    </div>
  );
};

export default App;
