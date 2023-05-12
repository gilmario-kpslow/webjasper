import { COR_SOMBRA, LINE_MARGIN } from "src/app/core/constantes/styles";
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
        context.shadowBlur = 10;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 5;
        context.shadowColor = COR_SOMBRA;
        context.fillRect(x, y, this.pageWidth, this.pageHeight);
        this.drawMargin(context, x, y);
        this.drawCenterLines(context, x, y);
        // Desenhar as bands
        this.desenhaBands(context, x, y);
    }

    private desenhaBands(context: CanvasRenderingContext2D, x: number, y: number) {
        // this.background.draw(context, x, y);
        this.title.draw(context, x, (y + this.topMargin));
        this.pageHeader.draw(context, x, (y + this.topMargin + this.title.altura));
        this.columnHeader.draw(context, x, (y + this.topMargin + this.title.altura + this.pageHeader.altura));
        this.detail.draw(context, x, (y + this.topMargin + this.title.altura + this.pageHeader.altura + this.columnHeader.altura));
        this.columnFooter.draw(context, x, (y + this.topMargin + this.title.altura + this.pageHeader.altura + this.columnHeader.altura + this.detail.altura));
        this.pageFooter.draw(context, x, ((this.altura - this.pageFooter.altura - this.topMargin) + y));
        // this.summary.draw(context, x, (y + this.topMargin + this.title.altura));
    }

    private drawMargin(context: CanvasRenderingContext2D, x: number, y: number) {
        context.save();
        context.beginPath();
        context.lineWidth = 0.8;
        context.strokeStyle = LINE_MARGIN;
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
        context.restore();
    }


    private drawCenterLines(context: CanvasRenderingContext2D, x: number, y: number) {
        context.save();
        context.beginPath();
        context.moveTo(this.x + (this.pageWidth) / 2, this.y);
        context.lineTo(this.x + (this.pageWidth) / 2, this.pageHeight + this.y);
        context.moveTo(this.x, this.y + (this.pageHeight) / 2);
        context.lineTo(this.pageWidth + this.x, this.y + (this.pageHeight) / 2);
        context.stroke();
        context.closePath();
        context.restore();
    }
}