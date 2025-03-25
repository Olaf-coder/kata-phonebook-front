import {inject, Injectable, signal} from '@angular/core';
import {Contact} from "../model/contact.model";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactApi {
  private http = inject(HttpClient);
  private contacts = signal<Contact[]>([])
  readonly baseEndpoint = "api/v1.0/contacts/"


  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseEndpoint);
  }

  getContact(id:number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseEndpoint}${id}`);
  }

  addContact(contactToAdd: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.baseEndpoint}`, contactToAdd);
  }

  updateContact(id: number, contactToUpdate: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.baseEndpoint}${id}`, contactToUpdate);
  }

  deleteContact(id:number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}${id}`);
  }



}
