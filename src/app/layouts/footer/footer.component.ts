import { ICooperado } from './../../core/interfaces/cooperado';
import { CooperadoService } from './../../core/services/cooperado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  cooperado!: ICooperado;

  constructor(private cooperadoService: CooperadoService) {}

  ngOnInit(): void {
    this.cooperadoService.cooperado.subscribe((r) => {
      this.cooperado = r;
    });
  }

  redirectTo(route: string): void {
    if ('app/admissao') {
      this.cooperadoService.cooperado.unsubscribe();
    }
  }
}
