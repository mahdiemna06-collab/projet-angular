import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDuSite } from './plan-du-site';

describe('PlanDuSite', () => {
  let component: PlanDuSite;
  let fixture: ComponentFixture<PlanDuSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanDuSite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDuSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
