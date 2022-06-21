import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConsultaCpfComponent } from './formulario-consulta-cpf.component';

describe('FormularioConsultaCpfComponent', () => {
  let component: FormularioConsultaCpfComponent;
  let fixture: ComponentFixture<FormularioConsultaCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioConsultaCpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioConsultaCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
