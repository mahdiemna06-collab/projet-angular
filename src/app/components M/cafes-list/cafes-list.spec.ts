import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesList } from './cafes-list';

describe('CafesList', () => {
  let component: CafesList;
  let fixture: ComponentFixture<CafesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
