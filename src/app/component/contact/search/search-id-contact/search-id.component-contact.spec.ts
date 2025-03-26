import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIdComponentContact } from './search-id.component-contact';
import {provideHttpClient} from "@angular/common/http";

describe('SearchIdComponent', () => {
  let component: SearchIdComponentContact;
  let fixture: ComponentFixture<SearchIdComponentContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchIdComponentContact],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchIdComponentContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
