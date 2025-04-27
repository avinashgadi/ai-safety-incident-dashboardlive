import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav style={{
      padding: '20px',
      backgroundColor: darkMode ? '#1f1f1f' : '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      transition: 'background 0.3s ease'
    }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>🚨 Incident Dashboard</h1>
      <button onClick={toggleDarkMode}
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          background: darkMode ? '#5b7cfa' : '#34c38f',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
