import {Component, input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Contact} from "../../../../model/contact.model";
import {ContactApi} from "../../../../service/contact.api";

@Component({
  selector: 'app-search-id-contact',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './search-id.component-contact.html',
  styleUrl: './search-id.component-contact.scss'
})
export class SearchIdComponentContact {

  contactResult: Contact;

  errorMessageSearch?: string;
  idToSearch: number|undefined;

  constructor(private contactApiService : ContactApi) {
  }

  searchContactById(id: number|undefined) {
    this.contactApiService.getContact(id!).subscribe({
      next:(response)=> {
        console.log('SEARCH OK');
        this.contactResult = response;
        this.cleanSearchFomulaire();
        this.errorMessageSearch = undefined;
      },
      error:(error) => {
        const errorToPrint = `Désolé, une erreur a été remonté durant la modification du contact: ${error.status}, ${error.statusText} `
        console.error(errorToPrint);
        this.errorMessageSearch = errorToPrint;
      }
    })
  }

  cleanSearchFomulaire() {
    this.idToSearch = undefined;
  }
}
