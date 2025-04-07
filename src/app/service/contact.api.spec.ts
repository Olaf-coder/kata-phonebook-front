import { TestBed } from '@angular/core/testing';

import { ContactApi } from './contact.api';
import {provideHttpClient} from "@angular/common/http";
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {ContactsMockService} from "../shared/contacts.mocks";
import {Contact} from "../model/contact.model";

describe('ContactService', () => {
  let service: ContactApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          ContactApi, //on provide la classe/service qui appele directement le httpClient en question (https://angular.dev/guide/http/testing)
          provideHttpClient(),
          provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ContactApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getContacts() call GET method on contact API', () => {
    //given
    const contactsMock : Contact[] = ContactsMockService.contactGetAllMock;

    //when
    // then
    service.getContacts().subscribe(contacts => {
      expect(contacts).toEqual(contactsMock)
      expect(contacts.length).toEqual(5)
    });

    const req = httpMock.expectOne('api/v1.0/contacts/')
    expect(req.request.method).toEqual('GET');
    req.flush(contactsMock)
  });

  it('should getContact() call GET method on contact API', () => {
    //given
    const contactMock : Contact = ContactsMockService.contactGetAllMock[0];

    //when
    // then
    service.getContact(1).subscribe(contact => {
      expect(contact).toBeDefined();
      expect(contact).toEqual(contactMock);
      expect(contact.id).toEqual(1);
    });

    const req = httpMock.expectOne('api/v1.0/contacts/1');
    expect(req.request.method).toEqual('GET');
    req.flush(contactMock);
  });

  it('should addContact() call POST method on contact API with Contact in body', () => {
    //given
    const contactToAdd : Contact = ContactsMockService.contactToAdd;
    const expectedAddedContact = {...contactToAdd, id: 6};

    //when
    // then
    service.addContact(contactToAdd).subscribe(contact => {
      expect(contact).toEqual(expectedAddedContact)
      expect(contact.id).toBeDefined();
      expect(contact.familyName).toEqual(expectedAddedContact.familyName);
      expect(contact.firstName).toEqual(expectedAddedContact.firstName);
    });

    const req = httpMock.expectOne('api/v1.0/contacts/');

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(contactToAdd);
    req.flush(expectedAddedContact);
  });

  it('should updateContact() call PUT method on contact API with Contact in body', () => {
    //given
    const contactToUpdate : Contact = ContactsMockService.contactToUpdate;
    const expectedUpdatedContact = {...contactToUpdate, id: 5};

    //when
    // then
    service.updateContact(5, contactToUpdate).subscribe(contact => {
      expect(contact).toEqual(expectedUpdatedContact);
      expect(contact.familyName).toEqual(expectedUpdatedContact.familyName);
      expect(contact.firstName).toEqual(expectedUpdatedContact.firstName);
      expect(contact.phoneNumber).toEqual(expectedUpdatedContact.phoneNumber);
      expect(contact.email).toEqual(expectedUpdatedContact.email);
    });

    const req = httpMock.expectOne('api/v1.0/contacts/5');

    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(contactToUpdate);
    req.flush(expectedUpdatedContact);
  });

  it('should deleteContact() call DELETE method on contact API', () => {
    //given

    //when
    // then
    service.deleteContact(4).subscribe();

    const req = httpMock.expectOne('api/v1.0/contacts/4')
    expect(req.request.method).toEqual('DELETE');
    req.flush(null);
  });

});
