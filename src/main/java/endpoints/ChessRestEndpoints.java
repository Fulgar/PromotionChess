package endpoints;

import AIAgent.EmilyTheAI;
import board.Board;
import models.RESTCallPackage;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/chess")
public class ChessRestEndpoints {

    private EmilyTheAI emilyTheAI = new EmilyTheAI();

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String test()
    {
        return "Testing......";
    }

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    public String getAIMove(RESTCallPackage movePackage)
    {
        Board board = new Board();
        // return emilyTheAI.minimax(board,null,null,true,4,true).createFenString();
        // TODO: getAIsBestMove will be returned here instead
        System.out.println("POST");
        return "ppppkppp/p1pppppp/1p6/8/8/8/PPPPPPPP/PPPPKPPP";
        // return convertFenString(movePackage.getFenString());
    }
}
