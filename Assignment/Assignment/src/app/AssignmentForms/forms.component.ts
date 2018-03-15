import { Component } from '@angular/core';
import { profile } from './profile.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'my-form',
  styles:[`.dropdown{background:white;color:black}`],
  templateUrl:'./form.html',
})
export class FormComponent  { 
    name = 'Welcome To Form'; 
    modal = new profile();
    registerUser(form : NgForm){
        console.log(form.value);
    }  
    languages = [
        { 'name':"Guajarti",'state':false},
        { 'name':"English",'state':false},
        { 'name':"Hindi",'state':false}
    ];
    checkAll(ev:any) {
        this.languages.forEach(x => x.state = ev.target.checked)
    }
    isAllChecked() {
        console.log('fired');
        return this.languages.every(y => y.state);
    }
}
