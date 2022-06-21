import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContaUsuarioComponent } from './card-conta-usuario.component';

describe('CardContaUsuarioComponent', () => {
  let component: CardContaUsuarioComponent;
  let fixture: ComponentFixture<CardContaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
