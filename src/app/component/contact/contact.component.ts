import {Component, input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    MatSlideToggle,
    MatTable
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // readonly name= input.required<string>() ;
  text: string = "";
  result:number = 0;

  calculateNumber(){
    this.result = this.text.length;
  }


}
