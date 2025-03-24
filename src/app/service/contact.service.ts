import {inject, Injectable, signal} from '@angular/core';
import {Contact} from "../model/contact.model";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http = inject(HttpClient);
  private contacts = signal<Contact[]>([])
  readonly baseEndpoint = "http://locahost:8080/contacts"

  // constructor() { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseEndpoint);
  }

  getContact(id:number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseEndpoint}/{$this.id}`);
  }

  postData(id: number, newContact: Contact): Observable<Contact> {
    return this.http.post(`${this.baseEndpoint}/{$this.id}`, newContact); // Remplacez par votre endpoint
  }



}
