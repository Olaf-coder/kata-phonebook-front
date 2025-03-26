import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContactComponent } from './delete-contact.component';
import {provideHttpClient} from "@angular/common/http";

describe('DeleteContactComponent', () => {
  let component: DeleteContactComponent;
  let fixture: ComponentFixture<DeleteContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteContactComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
