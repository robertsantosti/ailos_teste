import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { ICooperado } from '../interfaces/cooperado';
import { IResponseRequest } from './../interfaces/response-request';

@Injectable({
  providedIn: 'root',
})
export class CooperadoService {
  cooperado: Subject<ICooperado> = new Subject();

  get(cpf: number): Observable<IResponseRequest<ICooperado>> {
    const cooperado: ICooperado = {
      idCooperado: 1,
      cpf: {
        ni: 43932154606,
        nome: 'Bruno Henrique Lima',
        nascimento: new Date('1992-06-14'),
        situacao: {
          codigo: 1,
          descricao: 'REGULAR',
        },
      },
      contas: [
        {
          idConta: 1,
          conta: 557932,
          digitoVerificador: 4,
          status: true,
          tipoConta: {
            codigo: 1,
            descricao: 'Aplicação',
          },
          banco: 'Cooperativa Viacredi',
        },
        {
          idConta: 2,
          conta: 778461,
          digitoVerificador: 8,
          status: true,
          tipoConta: {
            codigo: 2,
            descricao: 'Corrente',
          },
          banco: 'Cooperativa Viacredi',
        },
      ],
    };

    const data: IResponseRequest<ICooperado> = {
      success: cpf === 43932154606,
      data: cpf === 43932154606 ? cooperado : null,
      message:
        cpf === 43932154606
          ? `Cooperado portador do CPF ${cpf} encontrado com sucesso`
          : `Não foram encontrados cooperados para o numero de CPF ${cpf}`,
    };

    if (cpf === 43932154606) {
      this.cooperado.next(cooperado);
    }

    return of(data);
  }
}
