import React from 'react';
import './ThreeSpinLoader.css';

const ThreeSpinLoader: React.FC = () => {
  return (
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  );
};

export default ThreeSpinLoader;
