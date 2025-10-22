
import React from 'react';

interface ControlButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const ControlButton: React.FC<ControlButtonProps> = ({ onClick, disabled = false, className, children }) => {
  const baseClasses = "w-24 h-24 rounded-full text-xl font-semibold uppercase transition-all duration-200 focus:outline-none focus:ring-4 shadow-lg";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  const combinedClasses = `${baseClasses} ${className} ${disabled ? disabledClasses : ''}`;
  return (
    <button onClick={onClick} disabled={disabled} className={combinedClasses}>
      {children}
    </button>
  );
};


interface ControlsProps {
  isRunning: boolean;
  hasStarted: boolean;
  onStartStop: () => void;
  onReset: () => void;
  onLap: () => void;
}

const Controls: React.FC<ControlsProps> = ({ isRunning, hasStarted, onStartStop, onReset, onLap }) => {
  return (
    <div className="flex justify-center items-center space-x-6 my-8">
      <ControlButton 
        onClick={onReset} 
        disabled={!hasStarted} 
        className="bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500 disabled:hover:bg-gray-700"
      >
        Reset
      </ControlButton>
      <ControlButton 
        onClick={onStartStop} 
        className={isRunning ? "bg-red-600 text-white hover:bg-red-500 focus:ring-red-400" : "bg-green-600 text-white hover:bg-green-500 focus:ring-green-400"}
      >
        {isRunning ? 'Stop' : 'Start'}
      </ControlButton>
      <ControlButton 
        onClick={onLap} 
        disabled={!isRunning} 
        className="bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500 disabled:hover:bg-gray-700"
      >
        Lap
      </ControlButton>
    </div>
  );
};

export default Controls;
