import { LINE_MARGIN } from "src/app/core/constantes/styles";
import { Band } from "src/app/core/editor-components/band";
import { DrawImplement } from "src/app/core/editor-components/draw-implement";
import { QueryString } from "./query-string";


export class JasperReport extends DrawImplement {

    constructor(
        public name: string,
        public pageWidth: number,
        public pageHeight: number,
        public columnWidth: number,
        public leftMargin: number,
        public rightMargin: number,
        public topMargin: number,
        public bottomMargin: number,
        public uuid: string,
        public queryString: QueryString,
        public background: Band,
        public title: Band,
        public pageHeader: Band,
        public columnHeader: Band,
        public detail: Band,
        public columnFooter: Band,
        public pageFooter: Band,
        public summary: Band,
    ) {
        super(pageWidth, pageHeight, 0, false);
    }

    draw(context: CanvasRenderingContext2D, x: number, y: number): void {
        context.fillStyle = "#FFFFFF"
        context.fillRect(x, y, this.pageWidth, this.pageHeight);
        context.lineWidth = 0.8;
        // context.lineJoinTo(x, y + this.topMargin);
        context.strokeStyle = LINE_MARGIN;
        context.beginPath();
        // context.moveTo(x, y);
        context.moveTo(x, y + this.topMargin);
        context.lineTo(this.x + this.pageWidth, y + this.topMargin);
        context.moveTo(x + this.leftMargin, y);
        context.lineTo(this.x + this.leftMargin, y + this.pageHeight);
        context.moveTo(x, y + this.pageHeight - this.topMargin);
        context.lineTo(x + this.pageWidth, this.y + this.pageHeight - this.topMargin)
        context.moveTo(x + this.pageWidth - this.leftMargin, y + this.pageHeight);
        context.lineTo(x + this.pageWidth - this.leftMargin, y);
        context.stroke();
        context.closePath();


        // Desenhar as bands
        // this.title.draw(context, x, y);

    }
}