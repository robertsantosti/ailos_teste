import { Component, Input, OnInit } from '@angular/core';

import { ICooperado } from './../../../../core/interfaces/cooperado';

@Component({
  selector: 'app-card-validacao-cpf',
  templateUrl: './card-validacao-cpf.component.html',
  styleUrls: ['./card-validacao-cpf.component.scss'],
})
export class CardValidacaoCpfComponent implements OnInit {
  @Input() cooperado!: ICooperado;

  constructor() {}

  ngOnInit(): void {}
}
