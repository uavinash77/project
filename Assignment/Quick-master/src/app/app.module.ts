import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavComponent } from './Assignment2/nav.component';
import { FormComponent } from './AssignmentForms/forms.component';
import { TableComponent } from './Assignment/table.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SectiononeComponent } from './Assignment2/sectionone.component';
import { SectiontwoComponent } from './Assignment2/sectiontwo.component';
import { loginService } from './Services/login.service';
const appRoutes: Routes = [
  { path: 'NavComponent', component: NavComponent },
  { path: 'FormComponent', component: FormComponent },
  { path: 'TableComponent', component: TableComponent },
];
@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpModule ],
  declarations: [ AppComponent,FormComponent,TableComponent,NavComponent,SectiononeComponent,SectiontwoComponent],
  bootstrap:    [ AppComponent,FormComponent,TableComponent,NavComponent,SectiononeComponent,SectiontwoComponent],
  providers:    [loginService],
})
export class AppModule { }
