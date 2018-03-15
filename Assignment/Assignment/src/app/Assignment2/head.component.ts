import { Component } from '@angular/core';
@Component({
  selector: 'my-head',
  styles:['.jumbotron{background:#21abd6;color:white;}'],
  templateUrl: './html/header.html',
})
export class HeadComponent  { header = 'Welcome To Angular'; 
message='Hope You Have Enjoyed Coading'}
