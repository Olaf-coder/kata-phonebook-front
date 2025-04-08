import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {ContactApi} from "../../service/contact.api";
import {ContactsMockService} from "../../shared/contacts.mocks";
import {of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let contactApiSpy : jasmine.SpyObj<ContactApi>;
  
  beforeEach(async () => {
     contactApiSpy = jasmine.createSpyObj<ContactApi>('ContactApi', ['getContacts']);

    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        {provide: ContactApi, useValue: contactApiSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger getAllContacts from ContactApi and return listContact when successful', () => {
    //given
    contactApiSpy.getContacts.and.returnValues(of(ContactsMockService.contactGetAllMock));

    //when
    fixture.detectChanges();

    //then
    expect(contactApiSpy.getContacts).toHaveBeenCalledTimes(1);
    expect(contactApiSpy.getContacts).toHaveBeenCalledWith();
    expect(component.contacts).toBeDefined();
    expect(component.contacts).toEqual(ContactsMockService.contactGetAllMock);
    expect(component.errorMessageGet).toBeUndefined();

  });

  it('should trigger getAllContacts from ContactApi and return errormessage when fail', () => {
    //given
    contactApiSpy.getContacts.and.returnValue(throwError(() => new HttpErrorResponse({status: 404, statusText: "Erreur dans la récuperation"}))
    );

    //when
    fixture.detectChanges();

    //then
    expect(contactApiSpy.getContacts).toHaveBeenCalledTimes(1);
    expect(contactApiSpy.getContacts).toHaveBeenCalledWith();
    expect(component.contacts).toEqual([]);
    expect(component.errorMessageGet).toEqual("Désolé, une erreur a été remonté durant la récuperation: 404, Erreur dans la récuperation");
  });

});
