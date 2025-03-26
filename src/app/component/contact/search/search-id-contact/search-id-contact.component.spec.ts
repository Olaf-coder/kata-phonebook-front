import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIdContactComponent } from './search-id-contact.component';
import {provideHttpClient} from "@angular/common/http";

describe('SearchIdComponent', () => {
  let component: SearchIdContactComponent;
  let fixture: ComponentFixture<SearchIdContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchIdContactComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchIdContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
