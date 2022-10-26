import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditarGaleriaComponent } from './add-editar-galeria.component';

describe('AddEditarGaleriaComponent', () => {
  let component: AddEditarGaleriaComponent;
  let fixture: ComponentFixture<AddEditarGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditarGaleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditarGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
