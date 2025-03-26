import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCriteriaContactComponent } from './search-criteria-contact.component';
import {provideHttpClient} from "@angular/common/http";

describe('SearchContactComponent', () => {
  let component: SearchCriteriaContactComponent;
  let fixture: ComponentFixture<SearchCriteriaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCriteriaContactComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCriteriaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
