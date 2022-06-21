import { Component, Input, OnInit } from '@angular/core';

import { IConta } from './../../../../core/interfaces/conta';

@Component({
  selector: 'app-card-conta-usuario',
  templateUrl: './card-conta-usuario.component.html',
  styleUrls: ['./card-conta-usuario.component.scss'],
})
export class CardContaUsuarioComponent implements OnInit {
  @Input() conta!: IConta;

  constructor() {}

  ngOnInit(): void {}
}
