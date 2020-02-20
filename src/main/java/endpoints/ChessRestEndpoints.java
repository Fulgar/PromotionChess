package endpoints;

import models.Move;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/chess")
public class ChessRestEndpoints {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String test() {
        return "Testing......";
    }

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    public String getMove(Move move) {
        return move.getFenString();
    }
}
