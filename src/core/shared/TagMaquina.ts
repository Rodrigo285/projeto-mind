import Erros from "../constants/Erro.js";
export default class TagMaquina {
  readonly valor: string;

  constructor(valor: string) {
    if (valor.trim() === "") {
      throw new Error(Erros.TAG_INVALIDA);
    }
    this.valor = valor;
  }
}
