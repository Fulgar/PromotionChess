package score;

public enum ChessType {

    KING(69420),
    QUEEN(150),
    KNIGHT(90),
    BISHOP(30),
    ROOK(10),
    PAWN(1);

    private int value;

    ChessType(int value) { // chess piece static values
        this.value = value;
    }


    public int getValue() {
        return value;
    }
}
