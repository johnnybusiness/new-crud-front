import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGaleriaComponent } from './ver-galeria.component';

describe('VerGaleriaComponent', () => {
  let component: VerGaleriaComponent;
  let fixture: ComponentFixture<VerGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerGaleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
