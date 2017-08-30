import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
   
import 'rxjs/add/operator/toPromise';  
   
declare var PluginHelper: any;  
   
@Injectable()  
export class ScaffoldingService {  
    private baseUrl = PluginHelper.getPluginRestUrl('scaffolding');  
   
    constructor(private http: HttpClient) { }  
   
    getIdentityInfo(identityName: string): Promise<any> {  
        const url = `${this.baseUrl}/info/${encodeURI(identityName)}`;  
   
        return this.http.get(url)  
            .toPromise()  
            .catch(this.handleError);  
    }  
   
    private handleError(error: any): Promise<any> {  
        console.error('An error occurred', error); // for demo purposes only  
        return Promise.reject(error.message || error);  
    }  
}

