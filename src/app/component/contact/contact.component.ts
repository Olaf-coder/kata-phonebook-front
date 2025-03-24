import {Component, OnInit, input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatTable} from "@angular/material/table";
import {Contact} from "../../model/contact.model";
import {ContactService} from "../../service/contact.service";

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    MatTable
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contacts: Contact[] = [];
  contactSolo?: Contact;
  contactMauvais?: Contact;

  constructor(private contactApiService: ContactService) {
  }

  ngOnInit(): void {
    this.contactApiService.getContacts().subscribe({
      next:(response)=>{
        this.contacts = response;
        console.log('GET OK: ', response);
      },
      error: (error) => {
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
      }
    })

    this.contactApiService.getContact(1).subscribe({
      next:(response) => {
        this.contactSolo = response;
        console.log('GET OK: ', response);
      },
      error:(error) => {
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
      }
    })

    this.contactApiService.getContact(100).subscribe({
      next:(response) => {
        this.contactMauvais = response;
        console.log('GET OK: ', response);
      },
      error:(error) => {
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
      }
    })
  }

  // readonly name= input.required<string>() ;
  // text: string = "";
  // result:number = 0;
  //
  // calculateNumber(){
  //   this.result = this.text.length;



}
