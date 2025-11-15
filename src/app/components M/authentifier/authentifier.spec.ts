import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authentifier } from './authentifier';

describe('Authentifier', () => {
  let component: Authentifier;
  let fixture: ComponentFixture<Authentifier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Authentifier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Authentifier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
