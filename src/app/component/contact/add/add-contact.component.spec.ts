import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactComponent } from './add-contact.component';
import {provideHttpClient} from "@angular/common/http";

describe('AddContactComponent', () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddContactComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cleanAjoutFomulaire() clean all values', () => {
    //given
    component.firstNameToAdd = "firstName";
    component.familyNameToAdd = "familyName";
    component.phoneNumberToAdd = "0102030405";
    component.emailToAdd = "email";

    //when
    component.cleanAjoutFomulaire()

    //then
    expect(component.firstNameToAdd).toBeUndefined();
    expect(component.familyNameToAdd).toBeUndefined();
    expect(component.emailToAdd).toBeUndefined();
    expect(component.phoneNumberToAdd).toBeUndefined();

  });


});
