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
const positionB6 : Position = position(1, 5) // B6

const positionC2 : Position = position(2, 1) // C2
const positionC3 : Position = position(2, 2) // C3
const positionC4 : Position = position(2, 3) // C4
const positionC5 : Position = position(2, 4) // C5
const positionC6 : Position = position(2, 5) // C6
const positionC7 : Position = position(2, 6) // C7

const positionD2 : Position = position(3, 1) // D2
const positionD3 : Position = position(3, 2) // D3
const positionD4 : Position = position(3, 3) // D4
const positionD5 : Position = position(3, 4) // D5
const positionD6 : Position = position(3, 5) // D6

const positionE1 : Position = position(4, 0) // E1
const positionE3 : Position = position(4, 2) // E3
const positionE4 : Position = position(4, 3) // E4
const positionE5 : Position = position(4, 4) // E5
const positionE8 : Position = position(4, 7) // E8

const positionF2 : Position = position(5, 1) // F2
const positionF3 : Position = position(5, 2) // F3
const positionF4 : Position = position(5, 3) // F4
const positionF5 : Position = position(5, 4) // F5
const positionF6 : Position = position(5, 5) // F6

const positionG3 : Position = position(6, 2) // G3
const positionG4 : Position = position(6, 3) // G4
const positionG5 : Position = position(6, 4) // G5
const positionG6 : Position = position(6, 5) // G6

const positionH1 : Position = position(7, 0) // H1
const positionH4 : Position = position(7, 3) // H4
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

// Knight moves
const moveE4_F6 : Move = move(positionE4, positionF6);
const moveE4_G5 : Move = move(positionE4, positionG5);
const moveE4_F2 : Move = move(positionE4, positionF2);
const moveE4_G3 : Move = move(positionE4, positionG3);
const moveE4_D2 : Move = move(positionE4, positionD2);
const moveE4_C3 : Move = move(positionE4, positionC3);
const moveE4_C5 : Move = move(positionE4, positionC5);
const moveE4_D6 : Move = move(positionE4, positionD6);

// Impossible moves
const moveE4_C7 : Move = move(positionE4, positionC7);
const moveE4_B2 : Move = move(positionE4, positionB2);


export class TestQueenMoves {
    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
        // Place a white Queen on E4
        chessboard = createEmptyChessboard();
        putPiece(chessboard, positionE4, pieces.whiteQueen);
    }

    @Test("A Queen can move diagonally")
    testCanMoveDiagonally() {
        // TODO:
        // Check the following moves are possible: 
        // moveE4_A8, moveE4_B1, moveE4_H7, moveE4_H1 
        let diagonalForwardLeftMove = {from: positionE4, to: positionA8, isValid: true};
        Expect(isPossible.queenMove(chessboard,diagonalForwardLeftMove )).toBeTruthy();
        
        let diagonalForwardRightMove = {from: positionE4, to: positionH7, isValid: true};
        Expect(isPossible.queenMove(chessboard,diagonalForwardRightMove )).toBeTruthy();

        let diagonalBackwardLeftMove = {from: positionE4, to: positionB1, isValid: true};
        Expect(isPossible.queenMove(chessboard,diagonalBackwardLeftMove )).toBeTruthy();

        let diagonalBackwardRightMove = {from: positionE4, to: positionH1, isValid: true};
        Expect(isPossible.queenMove(chessboard,diagonalBackwardRightMove )).toBeTruthy();       
    }

    @Test("A Queen can move horizontally")
    testCanMoveHorizontally() {
        // TODO:
        // Check the following moves are possible: moveE4_H4, moveE4_A4
        let horizontalRightMove = {from: positionE4, to: positionH4, isValid: true};
        Expect(isPossible.queenMove(chessboard, horizontalRightMove)).toBeTruthy();

        let horizontalLeftMove = {from: positionE4, to: positionA4, isValid: true};
        Expect(isPossible.queenMove(chessboard, horizontalLeftMove)).toBeTruthy();

    }

    @Test("A Queen can move vertically")
    testCanMoveVertically() {
        // TODO:
        // Check the following moves are possible: moveE4_E1, moveE4_E8
        let verticalForwardMove = {from: positionE4, to: positionE1, isValid: true};
        Expect(isPossible.queenMove(chessboard, verticalForwardMove)).toBeTruthy();

        let verticalBackwardMove = {from: positionE4, to: positionE8, isValid: true};
        Expect(isPossible.queenMove(chessboard, verticalBackwardMove)).toBeTruthy();

    }

    @Test("A Queen can only move horizontally, vertically, and diagonally")
    testForbiddenMoves() {
        // TODO:
        // Check the following moves are impossible: moveE4_C7, moveE4_B2
        let randomImpossibleMove = {from: positionE4, to: positionC7, isValid: true};
        Expect(isPossible.queenMove(chessboard, randomImpossibleMove)).not.toBeTruthy();

        let randomImpossiblebisMove = {from: positionE4, to: positionB2, isValid: true};
        Expect(isPossible.queenMove(chessboard, randomImpossiblebisMove)).not.toBeTruthy();
    }

    @Test("A Queen cannot leap other pieces")
    testCannotLeap() {
        // TODO:
        // Place a white Pawn on C6 and  a black Pawn on F4
        putPiece(chessboard, positionC6, pieces.whitePawn);
        putPiece(chessboard, positionF4, pieces.blackPawn);
        
        // Check the moves moveE4_A8 and moveE4_H4 are impossible
        let cannotLeapHisColorMove = {from: positionE4, to: positionA8, isValid: true};
        Expect(isPossible.queenMove(chessboard, cannotLeapHisColorMove)).not.toBeTruthy();

        let cannotLeapOtherColorMove = {from: positionE4, to: positionH4, isValid: true};
        Expect(isPossible.queenMove(chessboard, cannotLeapOtherColorMove)).not.toBeTruthy();
    }

    @Test("A Queen cannot capure pieces from the same color")
    testCannotCaptureSameColor() {
        // TODO:
        // Place a white Pawn on H4
        putPiece(chessboard, positionH4, pieces.whitePawn);

        // Check the move moveE4_H4 is impossible
        let cannotCapture = {from: positionE4, to: positionH4, isValid: true};
        Expect(isPossible.queenMove(chessboard, cannotCapture)).not.toBeTruthy();      
    }

    @Test("A Queen can capure pieces from a different color")
    testCanCaptureDifferentColor() {
        // TODO:
        // Place a black Pawn on H4
        putPiece(chessboard, positionH4, pieces.blackPawn);

        // Check the move moveE4_H4 is possible
        let canCapture = {from: positionE4, to: positionH4, isValid: true};
        Expect(isPossible.queenMove(chessboard, canCapture)).toBeTruthy();     
    }
}