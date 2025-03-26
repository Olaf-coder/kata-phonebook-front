import {Component, output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ContactApi} from "../../../service/contact.api";

@Component({
  selector: 'app-delete-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './delete-contact.component.html',
  styleUrl: './delete-contact.component.scss'
})
export class DeleteContactComponent {

  idToDelete:number|undefined;
  readonly notify = output<void>();

  constructor(private contactApiService: ContactApi) {
  }

  deleteContactById(id: number|undefined) {
    this.contactApiService.deleteContact(id!).subscribe({
      next:()=> {
        console.log('DELETE OK')
        this.notify.emit();
        this.cleanDeleteForm();
      }
    })
  }

  cleanDeleteForm() {
    this.idToDelete = undefined;
  }

}
