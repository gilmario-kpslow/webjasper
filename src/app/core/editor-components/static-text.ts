import { Drawable } from "../drawable/drawable";
import { Selectable } from "../selectable/selectable";
import { DrawImplement } from "./draw-implement";

export class StaticText extends DrawImplement {

    constructor(largura: number, altura: number, x: number, y: number, posicao: number, selecionado: boolean, public text: string) {
        super(largura, altura, x, y, posicao, selecionado);
    }

    draw(context: CanvasRenderingContext2D): void {
        context.strokeText(this.text, this.x, this.y, this.largura);
    }
}