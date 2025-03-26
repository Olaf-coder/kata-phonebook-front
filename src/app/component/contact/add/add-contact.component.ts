import {Component, output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ContactApi} from "../../../service/contact.api";
import {Contact} from "../../../model/contact.model";

@Component({
  selector: 'app-add-contact',
    imports: [
        FormsModule
    ],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {

  readonly notify = output<void>();

  errorMessageCreate?: string;
  firstNameToAdd?: string ;
  familyNameToAdd?: string ;
  phoneNumberToAdd?: string ;
  emailToAdd?: string ;

  constructor(private contactApiService: ContactApi) {
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
  createContact(contact:Contact) {
    this.contactApiService.addContact(contact).subscribe({
      next:(response) => {
        console.log(`nouveau contact ajouté: ${response}`)
        this.notify.emit()

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

  cleanAjoutFomulaire() {
    this.firstNameToAdd = undefined;
    this.familyNameToAdd = undefined;
    this.phoneNumberToAdd = undefined;
    this.emailToAdd = undefined;
  }
}
