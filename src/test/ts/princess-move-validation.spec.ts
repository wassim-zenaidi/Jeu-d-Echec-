import { Expect, Test, Setup} from "alsatian";
import * as isPossible from '../../main/ts/move-validation'
import * as pieces from '../../main/ts/piece'
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { Position, position } from '../../main/ts/position';
import { Move, move } from '../../main/ts/movements';

let chessboard : Chessboard;

const positionA4 : Position = position(0, 3) // A4
const positionA5 : Position = position(0, 4) // A5
const positionA6 : Position = position(0, 5) // A6
const positionA7 : Position = position(0, 6) // A7
const positionA8 : Position = position(0, 7) // A8

const positionB1 : Position = position(1, 0) // B1
const positionB2 : Position = position(1, 1) // B2
const positionB3 : Position = position(1, 2) // B3
const positionB5 : Position = position(1, 4) // B5
const positionB6 : Position = position(1, 5) // B6

const positionC3 : Position = position(2, 2) // C3
const positionC4 : Position = position(2, 3) // C4
const positionC5 : Position = position(2, 4) // C5
const positionC6 : Position = position(2, 5) // C6
const positionC7 : Position = position(2, 6) // C7

const positionD1 : Position = position(3, 0) // D1
const positionD2 : Position = position(3, 1) // D2
const positionD3 : Position = position(3, 2) // D3
const positionD4 : Position = position(3, 3) // D4
const positionD5 : Position = position(3, 4) // D5
const positionD6 : Position = position(3, 5) // D6
const positionD7 : Position = position(3, 6) // D7


const positionE1 : Position = position(4, 0) // E1
const positionE4 : Position = position(4, 3) // E4
const positionE8 : Position = position(4, 7) // E8

const positionF1 : Position = position(5, 0) // F1
const positionF2 : Position = position(5, 1) // F2
const positionF6 : Position = position(5, 5) // F6
const positionF7 : Position = position(5, 6) // F7
const positionG3 : Position = position(6, 2) // G3
const positionG5 : Position = position(6, 4) // G5

const positionH1 : Position = position(7, 0) // H1
const positionH3 : Position = position(7, 2) // H3
const positionH4 : Position = position(7, 3) // H4
const positionH5 : Position = position(7, 4) // H5
const positionH7 : Position = position(7, 6) // H7

// Horizontal moves
const moveE4_H4 : Move = move(positionE4, positionH4);
const moveE4_A4 : Move = move(positionE4, positionA4);

// Vertical moves
const moveE4_E1 : Move = move(positionE4, positionE1);
const moveE4_E8 : Move = move(positionE4, positionE8);

// Diagonal moves
const moveE4_A8 : Move = move(positionE4, positionA8);
const moveE4_B1 : Move = move(positionE4, positionB1);
const moveE4_H7 : Move = move(positionE4, positionH7);
const moveE4_H1 : Move = move(positionE4, positionH1);

// Camel moves
const moveE4_F7 : Move = move(positionE4, positionF7);
const moveE4_H5 : Move = move(positionE4, positionH5);
const moveE4_F1 : Move = move(positionE4, positionF1);
const moveE4_H3 : Move = move(positionE4, positionH3);
const moveE4_D1 : Move = move(positionE4, positionD1);
const moveE4_B3 : Move = move(positionE4, positionB3);
const moveE4_B5 : Move = move(positionE4, positionB5);
const moveE4_D7 : Move = move(positionE4, positionD7);

// Impossible moves
const moveE4_C7 : Move = move(positionE4, positionC7);
const moveE4_B2 : Move = move(positionE4, positionB2);

export class TestPrincessMoves {
    @Setup
    beforeEach() {
        // TODO:
         // Initialize an empty chessboard
         chessboard = createEmptyChessboard();
         // Place a black Princess on E4
         putPiece(chessboard, positionE4, pieces.blackPrincess);
    }

    @Test("A Princess can move diagonally")
    testCanMoveDiagonally() {
        // TODO:
        // Check the following moves are possible: 
        // moveE4_A8, moveE4_B1, moveE4_H7, moveE4_H1  
        let diagonalForwardLeftMove = {from: positionE4, to: positionA8, isValid: true};
        Expect(isPossible.princessMove(chessboard,diagonalForwardLeftMove )).toBeTruthy();

        let diagonalForwardRightMove = {from: positionE4, to: positionH7, isValid: true};
        Expect(isPossible.princessMove(chessboard,diagonalForwardRightMove )).toBeTruthy(); 

        let diagonalBackwardLeftMove = {from: positionE4, to: positionB1, isValid: true};
        Expect(isPossible.princessMove(chessboard,diagonalBackwardLeftMove )).toBeTruthy();

        let diagonalBackwardRightMove = {from: positionE4, to: positionH1, isValid: true};
        Expect(isPossible.princessMove(chessboard,diagonalBackwardRightMove )).toBeTruthy();      
    }

    @Test("A Princess can move two squares horizontally and one square vertically")
    testCanMoveTwoHorizontalAndOneVertical() {
        // TODO
    }

    @Test("A Princess can move two squares vertically  and one square horizontally")
    testCanMoveTwoVerticalAndOneHorizontal() {
        // TODO
    }

    @Test("A Princess cannot move horizontally")
    testCannotMoveHorizontally() {
        // TODO:
        // Check the following moves are impossible: moveE4_H4, moveE4_A4  
        let horizontalRightMove = {from: positionE4, to: positionH4, isValid: true};
        Expect(isPossible.princessMove(chessboard,horizontalRightMove )).not.toBeTruthy();

        let horizontalLeftMove = {from: positionE4, to: positionA4, isValid: true};
        Expect(isPossible.princessMove(chessboard,horizontalLeftMove )).not.toBeTruthy();      
    }

    @Test("A Princess cannot move vertically")
    testCannotMoveVertically() {
        // TODO:
        // Check the following moves are impossible: moveE4_E1, moveE4_E8  
        let verticalBackwardMove = {from: positionE4, to: positionE1, isValid: true};
        Expect(isPossible.princessMove(chessboard,verticalBackwardMove )).not.toBeTruthy();

        let verticalForwardMove = {from: positionE4, to: positionE8, isValid: true};
        Expect(isPossible.princessMove(chessboard,verticalForwardMove )).not.toBeTruthy();      
    }

    @Test("A Princess can capture a piece from another color")
    testCanCaptureDifferentColor() {
        // TODO:
         // Place a white Pawn on A8
         putPiece(chessboard, positionA8, pieces.whitePawn);

         // Check the move moveE4_A8 is possible
         let canCapture = {from: positionE4, to: positionA8, isValid: true};
         Expect(isPossible.princessMove(chessboard,canCapture)).toBeTruthy();      
    }

    @Test("A Princess cannot capture a piece from the same color")
    testCannotCaptureSameColor() {
        // TODO:
        // Place a black Pawn on A8
        putPiece(chessboard, positionA8, pieces.blackPawn);

        // Check the move moveE4_A8 is impossible
        let cannotCapture = {from: positionE4, to: positionA8, isValid: true};
        Expect(isPossible.princessMove(chessboard,cannotCapture)).not.toBeTruthy();      
    }

    @Test("A Princess cannot leap other pieces")
    testCannotLeapDiagonally() {
        // TODO:
         // Place a white Pawn on C6
         putPiece(chessboard, positionC6, pieces.whitePawn);

         // Check the move moveE4_A8 is impossible
         let cannotLeap = {from: positionE4, to: positionA8, isValid: true};
         Expect(isPossible.princessMove(chessboard,cannotLeap)).not.toBeTruthy();    
    }

    @Test("A Princess can leap other pieces when moving in L ")
    testCanLeapOtherPiecesWhenMovingInL() {
        // TODO:
    }
}
