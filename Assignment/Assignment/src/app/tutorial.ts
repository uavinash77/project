import {Component} from '@angular/core';

@Component({
        selector: 'mera-application',
        template: `
                    <h1> Welcome Mr. {{title}} </h1>
                    <button (click)="onclick(demoinput.value)">click me </button>
                    <input type="text" #demoInput>
        `,
    })
export class tutorialComponent{
    public title ="Avinash";
}    