
import React, { useState, useEffect, useRef, useCallback } from 'react';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import Laps from './components/Laps';

const App: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - time;
      intervalRef.current = window.setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, time]);

  const handleStartStop = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  }, []);

  const handleLap = useCallback(() => {
    if (isRunning) {
      setLaps(prevLaps => [time, ...prevLaps]);
    }
  }, [isRunning, time]);

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg flex flex-col items-center p-8 bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl shadow-black/50 border border-gray-700">
        <h1 className="text-4xl font-bold text-gray-200 mb-8 tracking-wider">Stopwatch</h1>
        <TimerDisplay time={time} />
        <Controls
          isRunning={isRunning}
          hasStarted={time > 0 || isRunning}
          onStartStop={handleStartStop}
          onReset={handleReset}
          onLap={handleLap}
        />
        <Laps laps={laps} />
      </div>
    </main>
  );
};

export default App;
