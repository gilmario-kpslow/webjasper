export interface Drawable {

    draw(context: CanvasRenderingContext2D, x: number, y: number): void;

    getChildren(): Drawable[];

    getHeigth(): number;

    getWidth(): number;

    getY(): number;

    getX(): number;

    getPos(): number;
}