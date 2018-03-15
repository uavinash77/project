import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { DashboardComponent } from './UserPage/dashboard/dashboard.component';
const appRoutes: Routes = [
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Services', component: ServiceTabComponent },
  { path: 'Contactus', component: ContactustabComponent },
  { path: 'Idea', component: IdeaComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'Login', component: LoginComponent }
];
@NgModule({
  imports: [BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,HeadComponent,NavComponent,FootComponent, AboutusComponent, ServiceTabComponent, LoginComponent, SignupComponent, ContactustabComponent, IdeaComponent, DashboardComponent],
  bootstrap: [AppComponent,NavComponent],
  providers: [],
})
export class AppModule { }
