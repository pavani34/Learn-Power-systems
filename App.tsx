
import React, { useState, useEffect } from 'react';
import { COURSE_CURRICULUM } from './constants';
import Sidebar from './components/Sidebar';
import AITutor from './components/AITutor';
import Visualizer from './components/Visualizer';
import { Progress, DayPlan } from './types';

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
    <div className="flex h-screen bg-slate-50">
      {/* Navigation */}
      <Sidebar 
        currentDay={currentDayNum} 
        onSelectDay={setCurrentDayNum} 
        completedDays={progress.completedDays}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">Day {currentDay.day}</span>
              <h2 className="text-lg font-bold text-slate-800">{currentDay.title}</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500" 
                  style={{ width: `${(progress.completedDays.length / COURSE_CURRICULUM.length) * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase mt-1">Course Progress: {progress.completedDays.length}/14</span>
            </div>
            <button 
              onClick={markDayComplete}
              disabled={progress.completedDays.includes(currentDayNum)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                progress.completedDays.includes(currentDayNum) 
                ? 'bg-green-100 text-green-700 cursor-default' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
              }`}
            >
              {progress.completedDays.includes(currentDayNum) ? '✓ Completed' : 'Mark as Done'}
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto space-y-10 pb-20">
            {currentDay.lessons.map((lesson) => (
              <section key={lesson.id} className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-2xl font-bold text-slate-800">{lesson.title}</h3>
                  <p className="text-slate-500">{lesson.description}</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm leading-relaxed text-slate-700 whitespace-pre-wrap">
                  {lesson.content}
                </div>

                {/* Key Concepts Bubbles */}
                <div className="flex flex-wrap gap-2">
                  {lesson.keywords.map(kw => (
                    <span key={kw} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium border border-slate-200">
                      #{kw}
                    </span>
                  ))}
                </div>

                {/* Inline Visuals based on Day */}
                {lesson.id === "1.2" && <Visualizer type="phasor" />}
                {lesson.id === "3.1" && <Visualizer type="transformer-efficiency" />}
                {lesson.id === "14.1" && <Visualizer type="load-curve" />}
              </section>
            ))}

            {/* Next Day Hint */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 transition-transform group-hover:scale-110">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              </div>
              <div className="relative z-10">
                <h4 className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-2">Coming Up Next</h4>
                {currentDayNum < 14 ? (
                  <>
                    <p className="text-xl font-bold mb-4">Day {currentDayNum + 1}: {COURSE_CURRICULUM[currentDayNum].title}</p>
                    <button 
                      onClick={() => {
                        markDayComplete();
                        setCurrentDayNum(prev => prev + 1);
                        window.scrollTo(0, 0);
                      }}
                      className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors"
                    >
                      Advance to Next Day
                    </button>
                  </>
                ) : (
                  <p className="text-xl font-bold">🎉 You've reached the end of the roadmap! Ready for the industry?</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Tutor Sidebar */}
      <aside className="w-96 flex-shrink-0">
        <AITutor currentTopic={currentDay.title} />
      </aside>
    </div>
  );
};

export default App;
