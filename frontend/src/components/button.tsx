import React from 'react';

interface CounterButtonProps {
    count: number;
    onClick: () => void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ count, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
            Count: {count}
        </button>
    );
};

export default CounterButton;