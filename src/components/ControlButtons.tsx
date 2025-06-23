import React from 'react';

interface ControlButtonsProps {
    isRunning: boolean;
    handleStartStop: () => void;
    handleReset: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
    isRunning,
    handleStartStop,
    handleReset,
}) => {
    return (
        <div className="flex justify-center space-x-2">
            <button
                className={`px-4 py-2 rounded font-semibold text-white ${isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                onClick={handleStartStop}
            >
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button
                className="px-4 py-2 rounded font-semibold text-white bg-gray-500 hover:bg-gray-600"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    );
};

export default ControlButtons;