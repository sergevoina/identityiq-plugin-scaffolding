import { Component } from '@angular/core';  
   
import { ScaffoldingService } from './scaffolding.service';  
   
@Component({  
    selector: 'app-root',  
    templateUrl: './app.component.html',  
    styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
    title = 'app';  
   
    public identityName = null;  
    public identityInfo = null;  
   
    constructor(private scaffoldingService: ScaffoldingService) {  
    }  
   
    getInfo(): void {  
        this.identityInfo = null;  
        this.scaffoldingService.getIdentityInfo(this.identityName).then(info => {  
            this.identityInfo = info;  
        });  
    }  
}

