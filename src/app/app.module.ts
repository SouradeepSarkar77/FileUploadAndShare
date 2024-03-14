import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploaderComponentComponent } from './uploader-component/uploader-component.component';
import { ReciverComponentComponent } from './reciver-component/reciver-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponentComponent,
    ReciverComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
