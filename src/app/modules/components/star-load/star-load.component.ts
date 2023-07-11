import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BACKGROUND_COLOR_1, BACKGROUND_COLOR_2 } from 'src/app/core/constantes/styles';

@Component({
  selector: 'app-star-load',
  templateUrl: './star-load.component.html',
  styleUrls: ['./star-load.component.css']
})
export class StarLoadComponent  implements AfterViewInit{

  canvas: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | null | undefined;
  largura: number = 500;
  altura: number = 500;

  @ViewChild("load") div: ElementRef | undefined

  constructor(private renderer: Renderer2, public elementRef: ElementRef) {

  }

  ngAfterViewInit(): void {
    this.canvas = this.renderer.createElement('canvas');
    this.context = this.canvas?.getContext('2d');
    this.renderer.appendChild(this.div?.nativeElement, this.canvas);
    this.renderer.setAttribute(this.canvas, 'width', `${this.largura}`);
    this.renderer.setAttribute(this.canvas, 'height', `${this.altura}`);
    this.draw();
  }

  limpar() {
    if (!this.context) {
      return;
    }
    this.context.clearRect(0, 0, this.largura, this.altura);
    this.desenhaFundo();
    this.context.beginPath();
    this.context.moveTo(this.largura / 2, 0);
    this.context.lineTo(this.largura / 2, this.altura);
    this.context.moveTo(0, this.altura / 2);
    this.context.lineTo(this.largura, this.altura / 2);
    this.context.stroke();
    this.context.closePath();

  }

  private desenhaFundo() {
    if (!this.context) {
      return;
    }
    const partes = 100
    const q = this.largura / partes;
    let x = 0;
    let y = 0;
    for (let i = 0; i < partes; i++) {
      for (let j = 0; j < partes; j++) {
        if ((i + j) % 2 == 0) {
          this.context.fillStyle = BACKGROUND_COLOR_1;
        } else {
          this.context.fillStyle = BACKGROUND_COLOR_2;
        }
        this.context?.fillRect(x, y, q, q);
        x += q;
      }
      y += q;
      x = 0;
    }
  }

  centraliza() {
    if (!this.context) {
      return;
    }
  }

  draw() {
    if (!this.context) {
      return;
    }
    this.limpar();
    this.drawStar();
    requestAnimationFrame(this.draw.bind(this));
  }

  drawStar() {
    if (!this.context) {
      return;
    }
    this.context.save();
    this.context.strokeStyle = "green";
    this.context.beginPath();
    this.context.moveTo(250, 0);
    this.context.lineTo(450, 350);
    this.context.lineTo(50, 450);
    this.context.lineTo(0, 150);
    this.context.lineTo(500, 150);
    this.context.stroke();
    this.context.closePath();
    this.context.restore();
  }
}
