import { SplitType } from "src/app/modules/editor/classes/split-type";
import { DrawImplement } from "./draw-implement";

export class Band extends DrawImplement {

    constructor(largura: number, altura: number, posicao: number, selecionado: boolean, public splitType: SplitType = SplitType.STRETCH) {
        super(largura, altura, posicao, selecionado);
    }

    draw(context: CanvasRenderingContext2D, x: number, y: number): void {
        context.strokeStyle = '';
        context.strokeRect(x, y, this.largura, this.altura);
    }


}