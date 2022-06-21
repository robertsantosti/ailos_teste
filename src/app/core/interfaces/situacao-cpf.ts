export interface ISituacaoCpf {
  codigo: 1 | 2 | 3 | 4 | 5;
  descricao:
    | 'REGULAR'
    | 'PENDENDENTE REGULARIZAÇÃO'
    | 'SUSPENSA'
    | 'CANCELADA'
    | 'NULA';
}
