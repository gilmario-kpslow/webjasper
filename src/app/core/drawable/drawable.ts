export interface Drawable {

    draw(context: any): void;

    getChildren(): Drawable[];

    getHeigth(): number;

    getWidth(): number;

    getY(): number;

    getX(): number;

    getPos(): number;
}