import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeadComponent }  from './head.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HeadComponent],
  bootstrap:    [ HeadComponent ]
})
export class HeadModule { }