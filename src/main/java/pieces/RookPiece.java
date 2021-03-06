package pieces;

import board.BoardPosition;

public class RookPiece extends Pieces
{
    public RookPiece(Boolean isWhite, int r, int col) {
        super("Rook", isWhite, 7, r, col);
        updateMovesAndAttack();
    }

    public void updateMovesAndAttack() {
        moves = new BoardPosition[]{new BoardPosition(-1, 0), new BoardPosition(0, 1), new BoardPosition(1, 0), new BoardPosition(0, -1)};
        attackablePositions = moves;
    }

}
