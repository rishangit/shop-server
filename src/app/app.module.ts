import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes'
import { AppComponent } from './app.component';

//Service
import { SystemService } from './shared/services/system.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    
  ],
  providers: [SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
