import { Chessboard } from 'react-chessboard';
import {useState, useRef} from "react";

export default function ChessBoard() {

    const chessboardRef = useRef();

    const Chess = require('chess.js');

    const [game, setGame] = useState(new Chess());

    let onDrop = function (sourceSquare: any, targetSquare: any): boolean {
        const gameCopy = { ...game };
        const move = gameCopy.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q' // always promote to a queen for example simplicity
        });
        setGame(gameCopy);

        if (move === null) {
            console.log("Invalid Move");
            return false;
        }

        return true;
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Chessboard
                id={69}
                animationDuration={200}
                position={game.fen()}
                onPieceDrop={onDrop}
                customBoardStyle={{
                    borderRadius: '4px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
                }}
                ref={chessboardRef}
            />
        </div>
    );
}
