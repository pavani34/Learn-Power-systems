
import React from 'react';
import { COURSE_CURRICULUM } from '../constants';
import { DayPlan } from '../types';

interface SidebarProps {
  currentDay: number;
  onSelectDay: (day: number) => void;
  completedDays: number[];
}

const Sidebar: React.FC<SidebarProps> = ({ currentDay, onSelectDay, completedDays }) => {
  return (
    <div className="w-80 h-full flex flex-col border-r border-slate-200 bg-white overflow-y-auto hide-scrollbar">
      <div className="p-6 border-b border-slate-200">
        <h1 className="text-xl font-bold text-blue-700 flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.95a1 1 0 01-1.414 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414zM16.586 18.707a1 1 0 101.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707z" /></svg>
          VoltQuest
        </h1>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-semibold">14 Day Power Systems Mastery</p>
      </div>
      
      <div className="flex-1 py-4">
        {COURSE_CURRICULUM.map((day) => {
          const isActive = day.day === currentDay;
          const isCompleted = completedDays.includes(day.day);
          
          return (
            <button
              key={day.day}
              onClick={() => onSelectDay(day.day)}
              className={`w-full text-left px-6 py-4 transition-all flex items-start gap-4 hover:bg-slate-50 relative ${
                isActive ? 'bg-blue-50 border-r-4 border-blue-600' : ''
              }`}
            >
              <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                isCompleted ? 'bg-green-100 text-green-700' : isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {isCompleted ? '✓' : day.day}
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-semibold ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>
                  {day.title}
                </span>
                <span className="text-xs text-slate-400 mt-1">{day.category}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
