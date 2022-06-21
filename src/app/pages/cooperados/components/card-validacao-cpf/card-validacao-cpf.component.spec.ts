import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardValidacaoCpfComponent } from './card-validacao-cpf.component';

describe('CardValidacaoCpfComponent', () => {
  let component: CardValidacaoCpfComponent;
  let fixture: ComponentFixture<CardValidacaoCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardValidacaoCpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardValidacaoCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
