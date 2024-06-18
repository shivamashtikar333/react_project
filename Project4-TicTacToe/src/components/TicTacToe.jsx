import React, { useState } from 'react';
import '../App.css';
import useTicTacToe from '../hooks/use-tic-tac-toe';

const TicTacToe = () => {

    const {board,handleclick,claculateWinner,getStatusMessage,resetGame} = useTicTacToe()
   
    return (
        <div className='game'>
            <div className="status">
                {getStatusMessage()}
                <button className='reset-button' onClick={resetGame}>
                    Reset game
                </button>
            </div>
            <div className="board">
                {board.map((b, index) => (
                    <button className='cell' key={index} onClick={()=> handleclick(index)} disabled = {b!==null}>
                        {b}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TicTacToe;
