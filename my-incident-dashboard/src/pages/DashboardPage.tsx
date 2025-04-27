import React from 'react';
import LiveIncidents from '../components/LiveIncidents';
import IncidentChart from '../components/IncidentChart';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <IncidentChart />
      <LiveIncidents />
    </div>
  );
};

export default DashboardPage;
