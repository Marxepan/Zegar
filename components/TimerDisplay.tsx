
import React from 'react';
import { formatTime } from '../utils/time';

interface TimerDisplayProps {
  time: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  return (
    <div className="text-8xl md:text-9xl font-mono tracking-tight text-cyan-300 my-4">
      {formatTime(time)}
    </div>
  );
};

export default TimerDisplay;
