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
  readonly baseEndpoint = "api/v1.0/contacts/"

  // constructor() { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseEndpoint);
  }

  getContact(id:number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseEndpoint}/{$this.id}/`);
  }

  postData(id: number, newContact: Contact): Observable<Contact> {
    // this.http.post()
    return this.http.post<Contact>(`${this.baseEndpoint}/{$this.id}/`, newContact); // Remplacez par votre endpoint
  }

  deleteContact(id:number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/{$this.id}/`);
  }



}
