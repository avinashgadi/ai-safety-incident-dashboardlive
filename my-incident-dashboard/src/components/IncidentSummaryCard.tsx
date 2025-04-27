import React from 'react';

interface SummaryCardProps {
  title: string;
  value: number | string;
  color?: string;
}

const IncidentSummaryCard: React.FC<SummaryCardProps> = ({ title, value, color = "#5b7cfa" }) => {
  return (
    <div style={{
      background: '#fff',
      padding: '20px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      flex: 1,
      minWidth: '150px'
    }}>
      <h4 style={{ fontSize: '14px', color: '#888', marginBottom: '8px' }}>{title}</h4>
      <h2 style={{ color: color, fontSize: '24px', fontWeight: 700 }}>{value}</h2>
    </div>
  );
};

export default IncidentSummaryCard;
