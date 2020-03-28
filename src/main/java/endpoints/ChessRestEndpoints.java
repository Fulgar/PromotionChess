package endpoints;

import AIAgent.BotAI;
import board.Board;
import models.RESTCallPackage;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;


@Path("/chess")
public class ChessRestEndpoints
{
    private final int MIN_DEPTH = 1;
    private final int MAX_DEPTH = 1;

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
        System.out.println("POST");
        System.out.println(movePackage);
        BotAI ai = new BotAI(movePackage);

        // Sanitizes depth
        if (MIN_DEPTH > movePackage.getDepth() || movePackage.getDepth() > MAX_DEPTH)
        {
            return "ERROR: Depth must be between: " + MIN_DEPTH + " and " + MAX_DEPTH;
        }

        System.out.println("RESPONSE: " + ai.getBestMoveBoard().createFenString());
        return ai.getBestMoveBoard().createFenString();
    }
}
