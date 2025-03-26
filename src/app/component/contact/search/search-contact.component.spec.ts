import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContactComponent } from './search-contact.component';
import {provideHttpClient} from "@angular/common/http";

describe('SearchContactComponent', () => {
  let component: SearchContactComponent;
  let fixture: ComponentFixture<SearchContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchContactComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
