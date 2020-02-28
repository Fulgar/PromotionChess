package endpoints;

import models.RESTCallPackage;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/chess")
public class ChessRestEndpoints {

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
        //TODO: getAIsBestMove will be returned here instead
        return convertFenString(movePackage.getFenString());
    }

    private String convertFenString(String originalFenStr)
    {
        String newFenStr;
        newFenStr = originalFenStr.replace("|", "/");
        return newFenStr;
    }
}
