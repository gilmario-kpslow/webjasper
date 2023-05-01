export interface Drawable {

    draw(context: CanvasRenderingContext2D): void;

    getChildren(): Drawable[];

    getHeigth(): number;

    getWidth(): number;

    getY(): number;

    getX(): number;

    getPos(): number;
}