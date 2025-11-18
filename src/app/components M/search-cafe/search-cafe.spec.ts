import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCafe } from './search-cafe';

describe('SearchCafe', () => {
  let component: SearchCafe;
  let fixture: ComponentFixture<SearchCafe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCafe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCafe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
