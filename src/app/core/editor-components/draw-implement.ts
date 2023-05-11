import { Selectable } from "../selectable/selectable";
import { Drawable } from "../drawable/drawable";

export abstract class DrawImplement implements Drawable, Selectable {

    constructor(public largura: number, public altura: number, public posicao: number, public selecionado: boolean, public x = 0, public y = 0) {
    }

    abstract draw(context: CanvasRenderingContext2D, x: number, y: number): void;

    processa(context: CanvasRenderingContext2D, scale: number, translateX: number, translateY: number) {
        context.save();
        context.translate(translateX, translateY);
        context.scale(scale, scale);
        this.draw(context, this.getX(), this.getY());
        context.restore();
        this.getChildren().forEach(a => a.draw(context, this.getX(), this.getY()));
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

    getPos(): number {
        return this.posicao;
    }

    isSelecionado(): boolean {
        return this.selecionado;
    }

    onSelect(): void {
        console.log('Selecionado')
    }
}