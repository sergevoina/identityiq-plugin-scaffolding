import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { FormsModule } from '@angular/forms';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  
   
import { CsrfInterceptor } from './csrf.interceptor';  
import { ScaffoldingService } from './scaffolding.service';  
import { AppComponent } from './app.component';  
   
@NgModule({  
    imports: [  
        BrowserModule,  
        HttpClientModule,  
        FormsModule  
    ],  
    providers: [  
        {  
            provide: HTTP_INTERCEPTORS,  
            useClass: CsrfInterceptor,  
            multi: true,  
        },  
        ScaffoldingService  
    ],  
    declarations: [  
        AppComponent  
    ],  
    bootstrap: [  
        AppComponent  
    ]  
})  
export class AppModule { }

