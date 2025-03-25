import {Component, OnInit, input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Contact} from "../../model/contact.model";
import {ContactApi} from "../../service/contact.api";

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  errorMessageGet?:string
  errorMessageCreate?: string;
  errorMessageUpdate?: string;

  contacts: Contact[] = [];
  contactSolo: Contact;

  idToDelete:number = 0;

  firstNameToAdd?: string ;
  familyNameToAdd?: string ;
  phoneNumberToAdd?: string ;
  emailToAdd?: string ;


  idToUpdate: number = 0;
  firstNameToUpdate?: string ;
  familyNameToUpdate?: string ;
  phoneNumberToUpdate?: string;
  emailToUpdate?: string;



  constructor(private contactApiService: ContactApi) {
  }

  ngOnInit(): void {
    this.getAllContacts();

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
        this.errorMessageGet = errorToPrint;
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
        console.error(errorToPrint);
        this.errorMessageGet = errorToPrint;
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

  createContact(contact:Contact) {
    this.contactApiService.addContact(contact).subscribe({
      next:(response) => {
        console.log(`nouveau contact ajouté: ${response}`)
        this.getAllContacts()
        this.errorMessageCreate = undefined;
        this.cleanAjoutFomulaire();
      },
      error:(error) => {
        const errorToPrint = `Désolé, une erreur a été remonté durant la creation du contact: ${error.status}, ${error.statusText} `
        console.error(errorToPrint);
        this.errorMessageCreate = errorToPrint;
      }
    })
  }

  updateContact(contact:Contact) {
    this.contactApiService.updateContact(contact.id!, contact).subscribe({
      next:(response) => {
        console.log(`nouveau contact ajouté: ${response}`)
        this.getAllContacts()
        this.errorMessageUpdate = undefined;
        this.cleanUpdateFomulaire();
      },
      error:(error) => {
        const errorToPrint = `Désolé, une erreur a été remonté durant la modification du contact: ${error.status}, ${error.statusText} `
        console.error(errorToPrint);
        this.errorMessageUpdate = errorToPrint;
      }
    })
  }

  sendContactToCreate() {
    console.log(`contact to send: ${this.firstNameToAdd}, ${this.familyNameToAdd}, ${this.phoneNumberToAdd}, ${this.emailToAdd}`)
    if(this.firstNameToAdd && this.familyNameToAdd) {
      var contact: Contact = {
        firstName: this.firstNameToAdd,
        familyName: this.familyNameToAdd,
        phoneNumber: this.phoneNumberToAdd,
        email: this.phoneNumberToAdd
      }
      this.createContact(contact);
    } else {
      this.errorMessageCreate = "Erreur, Nom ou Prenom absent"
    }
  }

  sendContactToUpdate() {
    console.log(`contact to send: ${this.idToUpdate}, ${this.firstNameToUpdate}, ${this.familyNameToUpdate}, ${this.phoneNumberToUpdate}, ${this.emailToUpdate}`)
    if(this.firstNameToUpdate && this.familyNameToUpdate) {
      var contact : Contact = {id: this.idToUpdate, firstName: this.firstNameToUpdate, familyName: this.familyNameToUpdate, phoneNumber: this.phoneNumberToUpdate, email: this.phoneNumberToUpdate}
      this.updateContact(contact);
    } else {
      this.errorMessageUpdate = "Erreur, Nom ou Prenom absent"
    }
  }

  cleanAjoutFomulaire() {
    this.firstNameToAdd = undefined;
    this.familyNameToAdd = undefined;
    this.phoneNumberToAdd = undefined;
    this.emailToAdd = undefined;
  }

  cleanUpdateFomulaire() {
    this.firstNameToUpdate = undefined;
    this.familyNameToUpdate = undefined;
    this.phoneNumberToUpdate = undefined;
    this.emailToUpdate = undefined;
  }


}
