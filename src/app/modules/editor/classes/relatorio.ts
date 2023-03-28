import { Dimensao } from "./dimensao";
import { TipoRelatorio } from "./tipo-relatorio.enum";

export class Relatorio {
    nome: string = "Relatorio";
    size: Dimensao = new Dimensao();
    tipo: TipoRelatorio = TipoRelatorio.A4;
}