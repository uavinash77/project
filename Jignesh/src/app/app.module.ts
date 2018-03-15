import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainpageComponent } from './user/mainpage/mainpage.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MainpageComponent],
  bootstrap: [AppComponent],
  providers: [],
})

export class AppModule { }
