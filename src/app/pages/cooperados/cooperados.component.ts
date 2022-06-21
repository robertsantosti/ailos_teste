import { ICpf } from './../../core/interfaces/cpf';
import { Component, OnInit } from '@angular/core';

import { ICooperado } from './../../core/interfaces/cooperado';

@Component({
  selector: 'app-cooperados',
  templateUrl: './cooperados.component.html',
  styleUrls: ['./cooperados.component.scss'],
})
export class CooperadosComponent implements OnInit {
  step: number = 0;
  cooperado!: ICooperado;

  constructor() {}

  ngOnInit(): void {}

  getCpfConsultado(cpf: ICpf): void {
    if (!cpf) {
      return;
    }

    this.cooperado = {
      cpf,
    };
  }
}
