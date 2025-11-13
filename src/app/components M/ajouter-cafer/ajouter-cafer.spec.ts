import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCafer } from './ajouter-cafer';

describe('AjouterCafer', () => {
  let component: AjouterCafer;
  let fixture: ComponentFixture<AjouterCafer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterCafer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCafer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
