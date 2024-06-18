import { useState } from "react";

const initialBoard = () => Array(9).fill(null);
const useTicTacToe = ()=>{
    
    const [board, setBoard] = useState(initialBoard());
    const [isXNext, setIsXNext] = useState(true);

    const WINNING_PATTERN = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const claculateWinner = (currentBoard) => {

        for(let i=0; i<WINNING_PATTERN.length; i++){
            const[a,b,c] = WINNING_PATTERN [i];
            if(currentBoard[a] && currentBoard[a]==currentBoard[b] && currentBoard[a]==currentBoard[c]){
                return currentBoard[a]
            } 
        }

        return null
        
    }

    const handleclick = (index) => {
        
        const winner = claculateWinner(board)
        console.log(winner)
        if(winner || board[index]) return true;
       

        const newBoard =[...board];
        newBoard[index] = isXNext ? "X":"O";
        setBoard(newBoard);
        setIsXNext(!isXNext)
    }

    const getStatusMessage = () => {
        const winner = claculateWinner(board);
        if(winner) return `Player ${winner} wins!`;
        if(!board.includes) return `It's a draw!`;

        return `Player ${isXNext ? "X": "O"}`
    }

    const resetGame = () => {
        setBoard(initialBoard())
    }

    return {board,handleclick,claculateWinner,getStatusMessage,resetGame}
}

export default useTicTacToe