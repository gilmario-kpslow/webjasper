import { Selectable } from "../selectable/selectable";
import { Drawable } from "./drawable";

export class Square implements Drawable, Selectable{
    
    constructor(public largura: number,public  altura: number,public  x: number,public  y: number, public posicao: number, public selecionado: boolean){ 
    }

    draw(context: any): void {
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

    isSeleted(): boolean {
        return this.selecionado;
    }

    onSelect(): void {
        console.log('Selecionado')
    }
}