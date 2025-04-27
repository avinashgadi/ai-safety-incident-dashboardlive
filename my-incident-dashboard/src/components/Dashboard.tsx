import React, { useState, useEffect } from 'react';
import IncidentSummaryCard from './IncidentSummaryCard';
import IncidentChart from './IncidentChart';
import Navbar from './Navbar';

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState(21);
  const [resolved, setResolved] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIncidents = Math.floor(Math.random() * 5);
      const newResolved = Math.floor(Math.random() * 3);

      setIncidents(prev => prev + newIncidents);
      setResolved(prev => prev + newResolved);
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const resolutionRate = ((resolved / incidents) * 100).toFixed(1);

  return (
    <>
      <Navbar />
      <div style={{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <IncidentSummaryCard title="Total Incidents" value={incidents} />
          <IncidentSummaryCard title="Resolved Incidents" value={resolved} />
          <IncidentSummaryCard title="Resolution Rate" value={`${resolutionRate}%`} />
        </div>

        <IncidentChart />
      </div>
    </>
  );
};

export default Dashboard;
