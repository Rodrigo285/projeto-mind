export interface MaquinaProps {
  tag: string;
  marca: string;
  modelo: string;
  tipo: string;
  fornecedor?: string;
  dataFabricacao: Date;
}

export default class Maquina {
  readonly tag: string;
  readonly marca: string;
  readonly modelo: string;
  readonly tipo: string;
  readonly fornecedor?: string | undefined;
  readonly dataFabricacao: Date;

  constructor(props: MaquinaProps) {
    this.tag = props.tag;
    this.marca = props.marca;
    this.modelo = props.modelo;
    this.tipo = props.tipo;
    this.fornecedor = props.fornecedor;
    this.dataFabricacao = props.dataFabricacao;
  }
}
