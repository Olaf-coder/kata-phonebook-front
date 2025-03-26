import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactComponent } from './update-contact.component';
import {provideHttpClient} from "@angular/common/http";

describe('UpdateContactComponent', () => {
  let component: UpdateContactComponent;
  let fixture: ComponentFixture<UpdateContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateContactComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
