import { ITipoConta } from './tipo-conta';

export interface IConta {
  idConta?: number;
  conta: number;
  digitoVerificador: number;
  tipoConta: ITipoConta;
  status: boolean;
  banco: string;
}
