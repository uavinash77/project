import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent }  from './nav.component';
import{FormsModule} from "@angular/forms";
import { SectiononeComponent } from './sectionone.component';
import { SectiontwoComponent } from './sectiontwo.component';
import { HttpModule } from '@angular/http';
import { loginService } from '../Services/login.service';

@NgModule({
  imports:      [ BrowserModule ,FormsModule,HttpModule],
  declarations: [ NavComponent,SectiononeComponent,SectiontwoComponent],
  bootstrap:    [ NavComponent,SectiononeComponent,SectiontwoComponent],
  providers:    [loginService],
})
export class NavModule { }