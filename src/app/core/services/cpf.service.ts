import { IResponseRequest } from './../interfaces/response-request';
import { ICpf } from './../interfaces/cpf';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CpfService {
  constructor() {}

  get(ni: number): Observable<IResponseRequest<ICpf>> {
    const cpf: ICpf = {
      ni: 43932154606,
      nome: 'Bruno Henrique Lima',
      nascimento: new Date('1992-06-14'),
      situacao: {
        codigo: 1,
        descricao: 'REGULAR',
      },
    };

    const data: IResponseRequest<ICpf> = {
      message:
        ni === 43932154606
          ? `CPF ${ni} encontrado com sucesso`
          : `Não foram encontrados registros para o numero de CPF ${ni}`,
      success: ni === 43932154606,
      data: ni === 43932154606 ? cpf : null,
    };

    return of(data);
  }
}
