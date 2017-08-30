import { Injectable } from '@angular/core';  
import {  
    HttpEvent,  
    HttpInterceptor,  
    HttpHandler,  
    HttpRequest,  
    HttpHeaders  
} from '@angular/common/http';  
   
import { Observable } from 'rxjs/Observable';  
   
declare var PluginHelper: any;  
   
@Injectable()  
export class CsrfInterceptor implements HttpInterceptor {  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
   
        // development hook  
        if (PluginHelper.getBasicAuth) {  
            const authReq = req.clone({  
                headers: req.headers.set('Authorization', PluginHelper.getBasicAuth())  
            });  
            return next.handle(authReq);  
        }  
   
        // Clone the request to add the new header.  
        const csrfReq = req.clone({  
            headers: req.headers.set('X-XSRF-TOKEN', PluginHelper.getCsrfToken())  
        });  
   
        // Pass on the cloned request instead of the original request.  
        return next.handle(csrfReq);  
    }  
}  

