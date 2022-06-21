export interface Cooperado {
  idCooperado?: number;
  cpf: number;
  situacaoCpf: {
    nome: string;
    situacao:
      | 'REGULAR'
      | 'PENDENDENTE REGULARIZAÇÃO'
      | 'SUSPENSA'
      | 'CANCELADA'
      | 'NULA';
  };
}
