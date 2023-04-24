import { Drawable } from "../drawable/drawable";
import { Selectable } from "../selectable/selectable";

export class Band implements Drawable, Selectable {

    constructor(public largura: number, public altura: number, public x: number, public y: number, public posicao: number, public selecionado: boolean) {
    }

    draw(context: any): void {
        if (this.selecionado) {

        } else {

        }
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