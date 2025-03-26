import {Component, OnInit, input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Contact} from "../../model/contact.model";
import {ContactApi} from "../../service/contact.api";
import {DeleteContactComponent} from "./delete/delete-contact.component";
import {AddContactComponent} from "./add/add-contact.component";
import {UpdateContactComponent} from "./update/update-contact.component";
import {SearchContactComponent} from "./search/search-contact.component";

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    DeleteContactComponent,
    AddContactComponent,
    UpdateContactComponent,
    SearchContactComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  errorMessageGet?:string
  errorMessageCreate?: string;
  errorMessageUpdate?: string;
  errorMessageSearch?: string;

  contacts: Contact[] = [];
  contactsSearched: Contact[] = [];

  // idToDelete:number = 0;


  firstNameToSearch: string ;
  familyNameToSearch: string ;

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

  // deleteContactById(id: number) {
  //   this.contactApiService.deleteContact(id).subscribe({
  //     next:()=> {
  //       console.log('DELETE OK')
  //       this.getAllContacts();
  //     }
  //   })
  // }

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

  cleanSearchFomulaire() {
    this.familyNameToSearch = "";
    this.firstNameToSearch = "";
  }


  rechercherContact() {
    if(this.familyNameToSearch || this.firstNameToSearch) {
      this.contactsSearched = this.contacts
      if (this.familyNameToSearch) {
        this.contactsSearched = this.contactsSearched.filter(contact => contact.familyName.toLowerCase().includes(this.familyNameToSearch.toLowerCase()))
      }
      if (this.firstNameToSearch) {
        this.contactsSearched = this.contacts.filter(contact => contact.firstName.toLowerCase().includes(this.firstNameToSearch.toLowerCase()))
      }
      if (this.contactsSearched.length == 0)
      {
        this.errorMessageSearch= "Aucun des contacts ne correspond a votre recherche"
      } else {
        this.errorMessageSearch=undefined
        this.cleanSearchFomulaire();
      }
    } else {
      this.errorMessageSearch="Au moins un des champs doit être renseigné"
    }
  }
}
