import { Selectable } from "../selectable/selectable";
import { Drawable } from "../drawable/drawable";
import { HttpContext } from "@angular/common/http";

export abstract class DrawImplement implements Drawable, Selectable {

    constructor(public largura: number, public altura: number, public x: number, public y: number, public posicao: number, public selecionado: boolean) {
    }

    abstract draw(context: CanvasRenderingContext2D): void;

    processa(context: CanvasRenderingContext2D) {
        context.save();
        this.draw(context);
        context.restore();
        this.getChildren().forEach(a => a.draw(context));
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