import React, { useState } from 'react';
import Die from './Die';

const RollDice = ({ sides = [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 }
] }) => {
    const [state, setState] = useState({
        die1: "two",
        die2: "two",
        rolling: false,
        totalscore: 4,
    });

    const { die1, die2, rolling, totalscore } = state;

    const roll = () => {
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        const score1 = Object.values(newDie1);
        const score2 = Object.values(newDie2);
        setState({
            die1: Object.keys(newDie1)[0],
            die2: Object.keys(newDie2)[0],
            rolling: true,
            totalscore: score1[0] + score2[0],
        });

        setTimeout(() => {
            setState((prevState) => ({ ...prevState, rolling: false }));
        }, 1000);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen space-y-6'>
            <div className='flex space-x-6'>
                <Die face={String(die1)} rolling={rolling} />
                <Die face={String(die2)} rolling={rolling} />
            </div>
            <button
                onClick={roll}
                disabled={rolling}
                className={`px-6 py-3 bg-blue-500 text-white text-lg rounded-lg ${rolling ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            >
                {rolling ? "Rolling..." : "Roll Dice"}
            </button>
            <h2 className='text-3xl font-bold'>Total Score: {totalscore}</h2>
        </div>
    );
};

export default RollDice;
