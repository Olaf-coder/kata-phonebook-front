import {Component, OnInit, input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatTable} from "@angular/material/table";
import {Contact} from "../../model/contact.model";
import {ContactApi} from "../../service/contact.api";

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
  contactSolo: Contact;
  contactMauvais: Contact;

  idToDelete:number = 0;

  // text: string = "";
  // result:number = 0;
  //
  calculateNumber(){
    // this.
  }


  constructor(private contactApiService: ContactApi) {
  }

  ngOnInit(): void {
    this.getAllContacts();
    this.getContactById(1);

  }

  getAllContacts(){
    this.contactApiService.getContacts().subscribe({
      next:(response)=>{
        this.contacts = response;
        console.log('GET OK: ', response);
      },
      error: (error) => {
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
      }
    })
  }

  getContactById(id:number) {
    this.contactApiService.getContact(id).subscribe({
      next:(response) => {
        this.contactSolo = response;
        console.log('GET OK: ', response);
      },
      error:(error) => {
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
      },
      complete() {

      }
    })
  }

  getContactByIdTarget(id: number, contactTarget:Contact) {
    this.contactApiService.getContact(id).subscribe({
      next:(response) => {
        contactTarget = response;
        console.log('GET OK: ', response);
      },
      error:(error) => {
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
      },
      complete() {
      }
    })
  }

  deleteContactById(id: number) {
    this.contactApiService.deleteContact(id).subscribe({
      next:()=> {
        console.log('DELETE OK')
        this.getAllContacts();
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
