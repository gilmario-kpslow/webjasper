import { Selectable } from "../selectable/selectable";
import { Drawable } from "../drawable/drawable";

export abstract class DrawImplement implements Drawable {

    constructor(public largura: number, public altura: number, public layer: number, public selecionado: boolean, public x = 0, public y = 0) {
    }

    abstract draw(context: CanvasRenderingContext2D, x: number, y: number): void;

    processa(context: CanvasRenderingContext2D, scale: number, translateX: number, translateY: number) {
        context.save();
        context.translate(translateX, translateY);
        context.scale(scale, scale);
        this.draw(context, this.getX(), this.getY());
        this.getChildren().forEach(a => a.draw(context, this.getX(), this.getY()));
        context.restore();
    }

    getChildren(): Drawable[] {
        return [];
    }

    getY(): number {
        return this.y;
    }

    getX(): number {
        return this.x;
    }

    getHeigth(): number {
        return this.altura;
    }

    getWidth(): number {
        return this.largura;
    }

    getLayer(): number {
        return this.layer;
    }

    isSelecionado(): boolean {
        return this.selecionado;
    }

    onSelect(): void {
        console.log('Selecionado')
    }

    seleciona(x: number, y: number) {
        if(x >= this.x && x <= this.x + this.largura && 
            this.y >= this.y && this.y <= this.y + this.altura) {
              this.selecionado = true;
              this.getChildren().forEach(c => c.seleciona(this.x, this.y));
          }
        this.onSelect();
    }
}