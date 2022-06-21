import { ISituacaoCpf } from './situacao-cpf';

export interface ICpf {
  ni: number;
  nome: string;
  situacao: ISituacaoCpf;
  nascimento: string | Date;
  obito?: number;
}
