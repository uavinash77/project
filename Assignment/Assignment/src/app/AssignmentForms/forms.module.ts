import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [BrowserModule,FormsModule],
  declarations: [FormComponent],
  bootstrap:    [FormComponent],
})
export class FormModule {}
