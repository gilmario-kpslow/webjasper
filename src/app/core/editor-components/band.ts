import { last } from "rxjs";
import { SplitType } from "src/app/modules/editor/classes/split-type";
import { Drawable } from "../drawable/drawable";
import { Selectable } from "../selectable/selectable";
import { DrawImplement } from "./draw-implement";

export class Band extends DrawImplement {

    constructor(largura: number, altura: number, y: number, posicao: number, selecionado: boolean, public splitType: SplitType = SplitType.STRETCH) {
        super(largura, altura, 0, y, posicao, selecionado);
    }

    draw(context: CanvasRenderingContext2D): void {
        context.strokeRect(this.x, this.y, this.largura, this.altura);
    }


}