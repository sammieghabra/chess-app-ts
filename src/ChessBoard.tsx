import { Chessboard } from 'react-chessboard';
import React, {useState, useRef} from "react";
import BottomContent from "./BottomContent";

type ChessBoardProps = {
    boardWidth: number
}

export default function ChessBoard({ boardWidth }: ChessBoardProps) {

    const chessboardRef = useRef();

    const Chess = require('chess.js');

    const [game, setGame] = useState(new Chess());

    let onFlipSides = function(): void {

    }

    let onReset = function(): void {
        console.log("Reset2..");

        setGame((g:any) => {

            console.log(typeof  g);

            console.log(g);

            const update = { ...g };

            console.log(update);

            g.reset();
            return update;
        });

    }

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
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: '35px'
            }}>
                <Chessboard
                    id={69}
                    animationDuration={200}
                    position={game.fen()}
                    onPieceDrop={onDrop}
                    boardWidth={boardWidth}
                    customBoardStyle={{
                        borderRadius: '4px',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
                    }}
                    ref={chessboardRef}
                />
            </div>
            <BottomContent
                width={600}
                onReset={onReset}
                onSwitchSides={onFlipSides}
            />
        </div>

);
}
