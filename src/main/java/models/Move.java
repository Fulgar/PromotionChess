package models;

import java.io.Serializable;

public class Move implements Serializable {

    private String fenString;
    private Character aiColor;
    private Integer depth;
    private String orientation;

    public Move() {

    }

    public Move(String fenString, Character aiColor, Integer depth, String orientation) {
        this.fenString = fenString;
        this.aiColor = aiColor;
        this.depth = depth;
        this.orientation = orientation;
    }

    public String getFenString() {
        return fenString;
    }

    public void setFenString(String fenString) {
        this.fenString = fenString;
    }

    public Character getAiColor() {
        return aiColor;
    }

    public void setAiColor(Character aiColor) {
        this.aiColor = aiColor;
    }

    public Integer getDepth() {
        return depth;
    }

    public void setDepth(Integer depth) {
        this.depth = depth;
    }

    public String getOrientation() {
        return orientation;
    }

    public void setOrientation(String orientation) {
        this.orientation = orientation;
    }
}
