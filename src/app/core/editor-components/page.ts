import { Selectable } from "../selectable/selectable";
import { Drawable } from "../drawable/drawable";
import { HttpContext } from "@angular/common/http";
import { DrawImplement } from "./draw-implement";

export class Page extends DrawImplement {

    draw(context: CanvasRenderingContext2D): void {
        context.strokeRect(this.x, this.y, this.largura, this.altura);
    }

}