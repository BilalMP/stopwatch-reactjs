import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import ControlButtons from './ControlButtons';

const Stopwatch: React.FC = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning]);

    const handleStartStop = (): void => {
        setIsRunning(!isRunning);
    };

    const handleReset = (): void => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-4">Stopwatch</h1>
                <Timer time={time} />
                <ControlButtons
                    isRunning={isRunning}
                    handleStartStop={handleStartStop}
                    handleReset={handleReset}
                />
            </div>
        </div>
    );
};

export default Stopwatch;