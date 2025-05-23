import {Component, input} from '@angular/core';
import {ContactApi} from "../../../../service/contact.api";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Contact} from "../../../../model/contact.model";

@Component({
  selector: 'app-search-criteria-contact',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './search-criteria-contact.component.html',
  styleUrl: './search-criteria-contact.component.scss'
})
export class SearchCriteriaContactComponent {

  readonly contacts = input.required<Contact[]>()

  contactsSearched: Contact[] = [];

  errorMessageSearch?: string;
  firstNameToSearch: string ;
  familyNameToSearch: string ;

  constructor(private contactApiService : ContactApi) {
  }

  cleanSearchForm() {
    this.familyNameToSearch = "";
    this.firstNameToSearch = "";
  }

  searchContact() {
    this.contactsSearched = [];
    if(this.isStringValid(this.familyNameToSearch) || this.isStringValid(this.firstNameToSearch)) {
      this.contactsSearched = this.contacts()
      if (this.isStringValid(this.familyNameToSearch)) {
        this.contactsSearched = this.contactsSearched.filter(contact => contact.familyName.toLowerCase().includes(this.familyNameToSearch.toLowerCase()))
      }
      if (this.isStringValid(this.firstNameToSearch)) {
        this.contactsSearched = this.contactsSearched.filter(contact => contact.firstName.toLowerCase().includes(this.firstNameToSearch.toLowerCase()))
      }
      if (this.contactsSearched.length == 0)
      {
        this.errorMessageSearch= "Aucun des contacts ne correspond a votre recherche"
      } else {
        this.errorMessageSearch=undefined
        this.cleanSearchForm();
      }
    } else {
      this.errorMessageSearch="Au moins un des champs doit être renseigné"
    }
  }

  isStringValid(str: string): boolean {
   return !!(str?.trim());
  }

}
