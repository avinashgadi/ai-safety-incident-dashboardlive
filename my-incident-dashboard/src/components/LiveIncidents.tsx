import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface Incident {
  id: number;
  title: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

const generateRandomIncident = (): Incident => {
  const severities = ['low', 'medium', 'high'];
  return {
    id: Math.floor(Math.random() * 10000),
    title: `Incident ${Math.floor(Math.random() * 1000)}`,
    severity: severities[Math.floor(Math.random() * severities.length)] as Incident['severity'],
    timestamp: new Date().toLocaleTimeString(),
  };
};

const LiveIncidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIncident = generateRandomIncident();
      setIncidents(prev => [newIncident, ...prev]);
      toast.success(`New ${newIncident.severity.toUpperCase()} incident detected! 🚨`);
      const audio = new Audio('/alert.mp3'); // we'll put alert.mp3 inside public/
      audio.play();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-incidents">
      <h3>Live Incidents</h3>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            [{incident.severity.toUpperCase()}] {incident.title} at {incident.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveIncidents;
