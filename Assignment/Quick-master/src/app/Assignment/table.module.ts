import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table.component';

@NgModule({
  imports:      [BrowserModule],
  declarations: [TableComponent],
  bootstrap:    [TableComponent],
})
export class TableModule { }
