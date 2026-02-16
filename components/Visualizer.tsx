
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface VisualizerProps {
  type: 'load-curve' | 'phasor' | 'transformer-efficiency';
}

const loadData = [
  { hour: '00', load: 120 }, { hour: '04', load: 80 }, { hour: '08', load: 150 },
  { hour: '12', load: 240 }, { hour: '16', load: 260 }, { hour: '20', load: 220 },
  { hour: '23', load: 140 },
];

const efficiencyData = [
  { load: 0, eff: 0 }, { load: 20, eff: 85 }, { load: 40, eff: 92 },
  { load: 60, eff: 96 }, { load: 80, eff: 98 }, { load: 100, eff: 97 },
];

const Visualizer: React.FC<VisualizerProps> = ({ type }) => {
  if (type === 'load-curve') {
    return (
      <div className="h-64 bg-white rounded-xl p-4 border border-slate-200">
        <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase">Typical Daily Load Profile (MW)</h4>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={loadData}>
            <defs>
              <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
            <Tooltip />
            <Area type="monotone" dataKey="load" stroke="#2563eb" fillOpacity={1} fill="url(#colorLoad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === 'transformer-efficiency') {
    return (
      <div className="h-64 bg-white rounded-xl p-4 border border-slate-200">
        <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase">Transformer Efficiency vs Load (%)</h4>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={efficiencyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="load" axisLine={false} tickLine={false} tick={{fontSize: 10}} label={{ value: 'Load %', position: 'insideBottom', offset: -5 }} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="eff" stroke="#f59e0b" strokeWidth={3} dot={{r: 4, fill: '#f59e0b'}} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === 'phasor') {
    return (
      <div className="h-64 bg-white rounded-xl p-4 border border-slate-200 flex flex-col items-center">
        <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase w-full">Phasor Diagram (Reactive Power)</h4>
        <svg viewBox="0 0 200 200" className="w-full max-w-[160px] flex-1">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#e2e8f0" strokeDasharray="2" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#cbd5e1" />
          
          {/* Voltage V */}
          <line x1="100" y1="100" x2="170" y2="100" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow)" />
          <text x="175" y="105" fontSize="10" fill="#3b82f6" fontWeight="bold">V</text>
          
          {/* Current I (Lagging) */}
          <line x1="100" y1="100" x2="150" y2="150" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow)" />
          <text x="155" y="155" fontSize="10" fill="#ef4444" fontWeight="bold">I</text>
          
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <path d="M0,0 L0,10 L10,5 Z" fill="currentColor" />
            </marker>
          </defs>
        </svg>
        <p className="text-[10px] text-slate-400 mt-2">Example: Inductive Load (Lagging PF)</p>
      </div>
    );
  }

  return null;
};

export default Visualizer;
