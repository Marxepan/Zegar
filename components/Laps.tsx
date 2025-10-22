
import React from 'react';
import { formatTime } from '../utils/time';

interface LapsProps {
  laps: number[];
}

const Laps: React.FC<LapsProps> = ({ laps }) => {
  if (laps.length === 0) {
    return <div className="h-60 self-stretch"></div>;
  }

  return (
    <div className="w-full max-w-md mt-8 self-stretch h-60">
      <ul className="bg-gray-800/50 rounded-lg shadow-inner overflow-y-auto h-full px-2">
        {laps.map((lap, index) => {
          const previousLapTime = laps[index + 1] || 0;
          const splitTime = lap - previousLapTime;
          const lapNumber = laps.length - index;

          return (
            <li key={lapNumber} className="flex justify-between items-center p-4 border-b border-gray-700 last:border-b-0 text-lg">
              <span className="text-gray-400 font-medium w-1/3">Lap {lapNumber}</span>
              <span className="font-mono text-gray-300 w-1/3 text-center">+{formatTime(splitTime)}</span>
              <span className="font-mono text-white font-semibold w-1/3 text-right">{formatTime(lap)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Laps;
