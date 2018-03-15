import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeadComponent } from './CRM/head/head.component';
import { NavComponent } from './CRM/nav/nav.component';
import { FootComponent } from './CRM/foot/foot.component';
import { AboutusComponent } from './CRM/aboutus/aboutus.component';
import { ServiceTabComponent } from './CRM/service-tab/service-tab.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './CRM/login/login.component';
import { SignupComponent } from './CRM/signup/signup.component';
import { ContactustabComponent } from './CRM/contactustab/contactustab.component';
import { IdeaComponent } from './CRM/idea/idea.component';
import {SalesserviceService} from './Services/salesservice.service';
import {EqualValidator} from './Services/equalValidation.directive'
const appRoutes: Routes = [
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Services', component: ServiceTabComponent },
  { path: 'Contactus', component: ContactustabComponent },
  { path: 'Idea', component: IdeaComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'Login', component: LoginComponent }
];
@NgModule({
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,EqualValidator,HeadComponent,NavComponent,FootComponent, AboutusComponent, ServiceTabComponent, LoginComponent, SignupComponent, ContactustabComponent, IdeaComponent],
  bootstrap: [AppComponent,NavComponent],
  providers: [SalesserviceService],
})
export class AppModule { }
