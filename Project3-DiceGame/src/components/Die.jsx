import React from 'react';

const Die = ({ face, rolling }) => {
    return (
        <div className={`w-32 h-32 flex items-center justify-center border-2 border-gray-300 rounded-lg text-6xl ${rolling ? 'animate-spin' : ''}`}>
            <i className={`fas fa-dice-${face}`} />
        </div>
    );
};

export default Die;
