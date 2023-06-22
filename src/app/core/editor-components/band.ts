import { SplitType } from "src/app/modules/editor/classes/split-type";
import { COR_SOMBRA, LINE_MARGIN, TEXTO_BACKGROUD } from "../constantes/styles";
import { DrawImplement } from "./draw-implement";

export class Band extends DrawImplement {

    filhos: DrawImplement[] = [];

    constructor(largura: number, altura: number, layer: number, selecionado: boolean, public splitType: SplitType = SplitType.STRETCH, public titulo: string) {
        super(largura, altura, layer, selecionado);
    }

    draw(context: CanvasRenderingContext2D, x: number, y: number): void {
        context.save();
        // context.strokeRect(x, y, this.largura, this.altura);
        context.beginPath();
        context.lineWidth = 0.5;
        context.strokeStyle = LINE_MARGIN;
        context.moveTo(x, y);
        context.lineTo(this.largura + x, y);
        context.moveTo(x, y + this.altura);
        context.lineTo(this.largura + x, this.altura + y);
        context.stroke();
        context.closePath();

        context.fillStyle = TEXTO_BACKGROUD;
        context.shadowBlur = 10;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 10;
        context.shadowColor = COR_SOMBRA;
        context.font = '18px sans serif';
        context.textAlign = 'center';
        context.textBaseline = 'middle'
        context.fillText(this.titulo + " - " + this.altura, x + (this.largura / 2), y + (this.altura / 2) + 2);
        context.restore();

        

        this.filhos.forEach(f => {

            f.draw(context, x, y);
        })
    }


}