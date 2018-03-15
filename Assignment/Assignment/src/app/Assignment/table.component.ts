import { Component } from '@angular/core';
@Component({
    selector: 'my-table',
    styles:[`.tab{background:"white";color:"black"}`],
    templateUrl:'./tablefile.html',
})
export class TableComponent  { name = 'Welcome To Tables'; }
