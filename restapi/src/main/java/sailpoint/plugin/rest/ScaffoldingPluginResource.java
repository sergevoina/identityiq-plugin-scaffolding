package sailpoint.plugin.rest;  
  
import java.util.HashMap;  
import java.util.Map;  
  
import javax.ws.rs.Consumes;  
import javax.ws.rs.GET;  
import javax.ws.rs.Path;  
import javax.ws.rs.PathParam;  
import javax.ws.rs.Produces;  
  
import org.apache.log4j.Logger;  
  
import sailpoint.api.SailPointContext;  
import sailpoint.api.SailPointFactory;  
import sailpoint.object.Identity;  
import sailpoint.rest.plugin.AllowAll;  
import sailpoint.rest.plugin.BasePluginResource;  
import sailpoint.tools.GeneralException;  
  
@Path("scaffolding")  
@Produces({ "application/json" })  
@Consumes({ "application/json", "*/*" })  
public class ScaffoldingPluginResource extends BasePluginResource {  
  
        private static final Logger logger = Logger.getLogger(ScaffoldingPluginResource.class);  
  
        @Override  
        public String getPluginName() {  
                return "ScaffoldingPlugin";  
        }  
  
        @GET  
        @Path("info/{name}")  
        @AllowAll  
        public Object getInfo(@PathParam("name") String identityName) throws GeneralException {  
                if (logger.isDebugEnabled()) {  
                        logger.debug(">>> getInfo");  
                        logger.debug("identityName = " + identityName);  
                }  
                Map<String, Object> identityModel = new HashMap<String, Object>();  
  
                SailPointContext context = SailPointFactory.getCurrentContext();  
  
                Identity identity = context.getObject(Identity.class, identityName);  
                if (identity != null) {  
                        identityModel.put("name", identity.getName());  
                        identityModel.put("id", identity.getId());  
                        identityModel.put("email", identity.getEmail());  
                }  
  
                if (logger.isDebugEnabled()) {  
                        logger.debug("returns " + identityModel);  
                        logger.debug("<<< getInfo");  
                }  
                return identityModel;  
        }  
}

