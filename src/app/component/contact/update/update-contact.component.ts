import {Component, output} from '@angular/core';
import {ContactApi} from "../../../service/contact.api";
import {FormsModule} from "@angular/forms";
import {Contact} from "../../../model/contact.model";

@Component({
  selector: 'app-update-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './update-contact.component.html',
  styleUrl: './update-contact.component.scss'
})
export class UpdateContactComponent {

  readonly notify = output<void>()

  errorMessageUpdate?: string;
  idToUpdate: number|undefined;
  firstNameToUpdate?: string ;
  familyNameToUpdate?: string ;
  phoneNumberToUpdate?: string;
  emailToUpdate?: string;

  constructor(private contactApiService: ContactApi) {
  }

  sendContactToUpdate() {
    console.log(`contact to send: ${this.idToUpdate}, ${this.firstNameToUpdate}, ${this.familyNameToUpdate}, ${this.phoneNumberToUpdate}, ${this.emailToUpdate}`)
    if(this.firstNameToUpdate && this.familyNameToUpdate && this.idToUpdate) {
      const contact : Contact = {
        id: this.idToUpdate,
        firstName: this.firstNameToUpdate,
        familyName: this.familyNameToUpdate,
        phoneNumber: this.phoneNumberToUpdate,
        email: this.emailToUpdate}
      this.updateContact(contact);
    } else {
      this.errorMessageUpdate = "Erreur: Id, Prenom ou Nom absent"
    }
  }

  updateContact(contact:Contact) {
    this.contactApiService.updateContact(contact.id!, contact).subscribe({
      next:(response) => {
        console.log(`nouveau contact ajouté: ${response}`);
        this.cleanUpdateForm();
        this.errorMessageUpdate = undefined;

        this.notify.emit();
      },
      error:(error) => {
        const errorToPrint = `Désolé, une erreur a été remonté durant la modification du contact: ${error.status}, ${error.statusText} `
        console.error(errorToPrint);
        this.errorMessageUpdate = errorToPrint;
      }
    })
  }

  cleanUpdateForm() {
    this.idToUpdate = undefined;
    this.firstNameToUpdate = undefined;
    this.familyNameToUpdate = undefined;
    this.phoneNumberToUpdate = undefined;
    this.emailToUpdate = undefined;
  }
}
