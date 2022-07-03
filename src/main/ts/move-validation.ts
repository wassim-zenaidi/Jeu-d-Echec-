import { Chessboard, isEmpty, Square, squareAtPosition } from "./chessboard";
import { Move } from "./movements";
import { equals, left, right, top, bottom } from "./position";

/**
 * Checks whether a Black Pawn can perform a given move.
 * A pawn can move forward to the unoccupied square immediately in front of 
 * it on the same file, or on its first move it can advance two squares along 
 * the same file, provided both squares are unoccupied (black dots in the 
 * diagram); or the pawn can capture an opponent's piece on a square diagonally 
 * in front of it on an adjacent file, by moving to that square (black "x"s). 
 * 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */

export function blackPawnMove(board: Chessboard, move: Move): boolean {

    if (equals(move.to!, bottom(move.from!))) {
        //console.log("Single forward");
        return isEmpty(board, move.to!);
    }

    if (move.from!.rank === 6 && equals(move.to!, bottom(bottom(move.from!)))) {
        //console.log("Double forward");
        return isEmpty(board, bottom(move.from!)) && isEmpty(board, move.to!);
    }

    if (equals(move.to!, left(bottom(move.from!))) || equals(move.to!, right(bottom(move.from!)))) {
        let destination: Square = squareAtPosition(board, move.to!);
        return !(destination.isEmpty || !destination.piece!.isWhite)
    }

    return false;
}

/**
 * A pawn can move forward to the unoccupied square immediately in front of 
 * it on the same file, or on its first move it can advance two squares along 
 * the same file, provided both squares are unoccupied (black dots in 
 * the diagram); or the pawn can capture an opponent's piece on a square diagonally 
 * in front of it on an adjacent file, by moving to that square (black "x"s). 
 * 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function whitePawnMove(board: Chessboard, move: Move): boolean {

    if (equals(move.to!, top(move.from!))) {
        return isEmpty(board, move.to!);
    }

    if (move.from!.rank === 1 && equals(move.to!, top(top(move.from!)))) {
        return isEmpty(board, top(move.from!)) && isEmpty(board, move.to!);
    }

    if (equals(move.to!, left(top(move.from!))) || equals(move.to!, right(top(move.from!)))) {
        let destination: Square = squareAtPosition(board, move.to!);
        return !(destination.isEmpty || destination.piece!.isWhite)
    }

    return false;
}

/**
 * Checks whether a King can perform a given move.
 * The king moves one square in any direction. 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function kingMove(board: Chessboard, move: Move): boolean {
    let depart: Square = squareAtPosition(board, move.from!);
    let destination: Square = squareAtPosition(board, move.to!);

    if (equals(move.to!, bottom(move.from!))) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
        
    }

    if (equals(move.to!, top(move.from!))) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if (equals(move.to!, right(move.from!))) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if (equals(move.to!, left(move.from!))) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if(equals(move.to!, bottom(left(move.from!)))){
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if(equals(move.to!, bottom(right(move.from!)))){
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if(equals(move.to!, top(right(move.from!)))){
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if(equals(move.to!, top(left(move.from!)))){
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }
    return true;
}

/**
 * Checks whether a Queen can perform a given move.
 * The queen combines the power of a rook and bishop and can move any 
 * number of squares along a rank, file, or diagonal, but cannot leap over other pieces.
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function queenMove(board: Chessboard, move: Move): boolean {
    // #TODO: Implement this function
    let depart: Square = squareAtPosition(board, move.from!);
    let destination: Square = squareAtPosition(board, move.to!);

    if (move.from!.rank === move.to!.rank && isEmpty(board, move) || isEmpty(board, move)){
        return isEmpty(board, move.to!) || depart.piece!.isWhite === !destination.piece!.isWhite ;
    }

    if (move.from!.file === move.to!.file && isEmpty(board, move) || isEmpty(board, move)){
        return isEmpty(board, move.to!) || depart.piece!.isWhite === !destination.piece!.isWhite ;
    }
    return true;
}

/**
 * Checks whether a Empress can perform a given move.
 * An Empress can move any number of squares along a rank or file, 
 * but cannot leap over other pieces.
 * An Empress can also move to any of the closest squares that are not on the 
 * same rank, file, or diagonal. (Thus the move forms an "L"-shape: 
 * two squares vertically and one square horizontally, or two 
 * squares horizontally and one square vertically.) 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function empressMove(board: Chessboard, move: Move): boolean {
    // #TODO: Implement this function
    let depart: Square = squareAtPosition(board, move.from!);
    let destination: Square = squareAtPosition(board, move.to!);

    if (move.from!.rank === move.to!.rank && isEmpty(board, move)){
        return isEmpty(board, move.to!) || depart.piece!.isWhite === !destination.piece!.isWhite ;
    }

    if (move.from!.file === move.to!.file && isEmpty(board, move)){
        return isEmpty(board, move.to!) || depart.piece!.isWhite === !destination.piece!.isWhite ;
    }
    return true;
}

/**
 * Checks whether a Princess can perform a given move.
 * A princess can move any number of squares diagonally, 
 * but cannot leap over other pieces.
 * A princess can also move to any of the closest squares that are not on the 
 * same rank, file, or diagonal. (Thus the move forms an "L"-shape: 
 * two squares vertically and one square horizontally, or two 
 * squares horizontally and one square vertically.) 
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function princessMove(board: Chessboard, move: Move): boolean {
    let depart: Square = squareAtPosition(board, move.from!);
    let destination: Square = squareAtPosition(board, move.to!);

    if(isEmpty(board, move)){
        return isEmpty(board, move.to!) || depart.piece!.isWhite === !destination.piece!.isWhite ;
    }

    return true;
}

/**
 * Checks whether a Camel can perform a given move.
 * The Camel move forms an "L"-shape: 
 * three squares vertically and one square horizontally, or three 
 * squares horizontally and one square vertically.) 
 * 
 * The camel can leap over other pieces.
 * 
 * @param board The chessboard of the current game
 * @param move 
 */
export function camelMove(board: Chessboard, move: Move): boolean {
    let depart: Square = squareAtPosition(board, move.from!);
    let destination: Square = squareAtPosition(board, move.to!);

    //Conditional with the 8 moves of the camel, 
    //if the hit entered for the knight is included in one of these 8 moves 
    //then there is a check if the destination is empty or occupied by an opposing piece.

    if (equals( move.to!, top(top(right(move.from!)))) ) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if (equals( move.to!, top(top(left(move.from!)))) ) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if (equals( move.to!, bottom(bottom(right(move.from!)))) ) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if (equals( move.to!, bottom(bottom(left(move.from!)))) ) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if (equals( move.to!, left(left(top(move.from!)))) ) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if (equals( move.to!, left(left(bottom(move.from!)))) ) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if (equals( move.to!, right(right(top(move.from!)))) ) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }

    if (equals( move.to!, right(right(bottom(move.from!)))) ) {
        return isEmpty(board, move.to!) || (depart.piece!.isWhite === !destination.piece!.isWhite);
    }
    return true;
} 