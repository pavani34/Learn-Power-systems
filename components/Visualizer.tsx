
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface VisualizerProps {
  type: 'load-curve' | 'phasor' | 'transformer-efficiency' | 'sequence-network';
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
      <div className="h-64 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
        <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase">Daily Load Profile (MW)</h4>
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

  if (type === 'sequence-network') {
    return (
      <div className="h-64 bg-slate-900 rounded-xl p-4 border border-slate-700 flex flex-col items-center">
        <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase w-full">Line-to-Ground Fault Network (LG)</h4>
        <div className="flex-1 flex flex-col justify-around w-full px-10">
          <div className="border-2 border-green-500 rounded p-1 text-center text-green-500 text-[10px] font-bold">POS. SEQUENCE (Z1)</div>
          <div className="h-4 border-l-2 border-white mx-auto"></div>
          <div className="border-2 border-blue-500 rounded p-1 text-center text-blue-500 text-[10px] font-bold">NEG. SEQUENCE (Z2)</div>
          <div className="h-4 border-l-2 border-white mx-auto"></div>
          <div className="border-2 border-yellow-500 rounded p-1 text-center text-yellow-500 text-[10px] font-bold">ZERO SEQUENCE (Z0)</div>
        </div>
        <p className="text-[10px] text-slate-500 mt-2">LG Fault: All 3 Sequence Networks are in SERIES.</p>
      </div>
    );
  }

  if (type === 'transformer-efficiency') {
    return (
      <div className="h-64 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
        <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase">Transformer Efficiency vs Load (%)</h4>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={efficiencyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="load" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
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
      <div className="h-64 bg-white rounded-xl p-4 border border-slate-200 flex flex-col items-center shadow-sm">
        <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase w-full">Phasor Interaction</h4>
        <svg viewBox="0 0 200 200" className="w-full max-w-[160px] flex-1">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#e2e8f0" strokeDasharray="2" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#cbd5e1" />
          <line x1="100" y1="100" x2="170" y2="100" stroke="#3b82f6" strokeWidth="3" />
          <line x1="100" y1="100" x2="150" y2="150" stroke="#ef4444" strokeWidth="3" />
          <path d="M120,100 A20,20 0 0,1 114,114" fill="none" stroke="#94a3b8" />
          <text x="125" y="115" fontSize="8" fill="#94a3b8">φ</text>
        </svg>
      </div>
    );
  }

  return null;
};

export default Visualizer;
