import endpoints.ChessRestEndpoints;

import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;


public class ApplicationController extends Application {

    private Set<Object> singletons = new HashSet<>();

    // Adds endpoints
    // Should only be one endpoint in this project
    public ApplicationController() {
        singletons.add(new ChessRestEndpoints());
    }

    @Override
    public Set<Object> getSingletons() {
        return singletons;
    }
}
