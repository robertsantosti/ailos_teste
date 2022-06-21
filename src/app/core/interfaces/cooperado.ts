import { IConta } from './conta';
import { ICpf } from './cpf';

export interface ICooperado {
  idCooperado?: number;
  cpf: ICpf;
  contas?: Array<IConta>;
}
