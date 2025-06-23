import React from 'react';

interface TimerProps {
    time: number;
}
const Timer: React.FC<TimerProps> = ({ time }) => {
    const hours: number = Math.floor(time / 3600000);
    const minutes: number = Math.floor((time % 3600000) / 60000);
    const seconds: number = Math.floor((time % 60000) / 1000);
    const milliseconds: number = Math.floor((time % 1000) / 10);

    return (
        <div className="text-center mb-6">
            <span className="text-4xl font-mono">
                {String(hours).padStart(2, '0')}:
                {String(minutes).padStart(2, '0')}:
                {String(seconds).padStart(2, '0')}.
                {String(milliseconds).padStart(2, '0')}
            </span>
        </div>
    );
};

export default Timer;