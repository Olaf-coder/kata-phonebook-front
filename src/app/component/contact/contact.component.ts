import {Component} from '@angular/core';
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

  contacts: Contact[] = [];

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

}
