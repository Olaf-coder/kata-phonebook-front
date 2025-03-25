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

  errorMessage: string;

  contacts: Contact[] = [];
  contactSolo: Contact;
  contactMauvais: Contact;

  idToDelete:number = 0;

  idToAdd: number = 0;
  firstNameToAdd: string = "";
  lastNameToAdd: string = "";
  phoneNumberToAdd: string = "";
  emailToAdd: string = "";



  constructor(private contactApiService: ContactApi) {
  }

  ngOnInit(): void {
    this.getAllContacts();
    this.getContactById(50);

  }

  getAllContacts(){
    this.contactApiService.getContacts().subscribe({
      next:(response)=>{
        this.contacts = response;
        console.log('GET OK: ', response);
      },
      error: (error) => {
        const errorToPrint = `Désolé, une erreur a été remonté durant la récuperation: ${error.status}, ${error.statusText} `
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
        this.errorMessage = errorToPrint;
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
        const errorToPrint = `Désolé, une erreur a été remonté durant la récuperation: ${error.status}, ${error.statusText} `
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
        this.errorMessage = errorToPrint;
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

  sendContactToCreate() {
    // this.errorMessage = "J'ai une erreur !"
    console.log(`contact to send: ${this.idToAdd}, ${this.firstNameToAdd}, ${this.lastNameToAdd}, ${this.phoneNumberToAdd}, ${this.emailToAdd}`)
    // contactToCreate: Contact = {}
    this.getContactById(50);
  }
  // readonly name= input.required<string>() ;
  // text: string = "";
  // result:number = 0;
  //
  // calculateNumber(){
  //   this.result = this.text.length;

}
