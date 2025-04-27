import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

interface IncidentData {
  time: string;
  incidents: number;
  resolved: number;
  type: 'Network' | 'Hardware' | 'Software';
}

const allData: IncidentData[] = [
  { time: '10AM', incidents: 3, resolved: 1, type: 'Network' },
  { time: '11AM', incidents: 5, resolved: 3, type: 'Software' },
  { time: '12PM', incidents: 2, resolved: 2, type: 'Hardware' },
  { time: '1PM', incidents: 7, resolved: 5, type: 'Network' },
  { time: '2PM', incidents: 4, resolved: 4, type: 'Software' },
];

const IncidentChart: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Network' | 'Hardware' | 'Software'>('All');

  const filteredData = filter === 'All' ? allData : allData.filter(item => item.type === filter);

  return (
    <div style={{ width: '100%', padding: '20px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Incident Trends 📈</h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px',
            outline: 'none'
          }}
        >
          <option value="All">All</option>
          <option value="Network">Network</option>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="incidents" stroke="#5b7cfa" strokeWidth={3} activeDot={{ r: 10 }} />
          <Line type="monotone" dataKey="resolved" stroke="#34c38f" strokeWidth={3} activeDot={{ r: 10 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncidentChart;
