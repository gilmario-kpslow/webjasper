import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { BACKGROUND_COLOR_2, BACKGROUND_COLOR_1 } from 'src/app/core/constantes/styles';

@Component({
  selector: 'app-report-canvas',
  templateUrl: './report-canvas.component.html',
  styleUrls: ['./report-canvas.component.css']
})
export class ReportCanvasComponent implements AfterViewInit {

  canvas: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | null | undefined;
  largura: number = 0;
  altura: number = 0;

  @ViewChild("main") div: ElementRef | undefined

  constructor(private renderer: Renderer2, public elementRef: ElementRef) {

  }

  @HostListener("resize", ['$event'])
  onRezise(event: any) {
    console.log(event);
    alert('resize');
  }

  ngAfterViewInit(): void {
    console.log(this.div)
    this.canvas = this.renderer.createElement('canvas');
    this.context = this.canvas?.getContext('2d');
    this.renderer.appendChild(this.div?.nativeElement, this.canvas);
  }

  setDimensoes() {
    this.largura = document.body.clientWidth;
    this.altura = document.body.clientHeight
    this.renderer.setAttribute(this.canvas, 'width', `${this.largura}`);
    this.renderer.setAttribute(this.canvas, 'height', `${this.altura}`);
  }

  limpar() {
    if (!this.context) {
      return;
    }
    this.context.clearRect(0, 0, this.largura, this.altura);
    this.context.beginPath();
    this.context.moveTo(this.largura / 2, 0);
    this.context.lineTo(this.largura / 2, this.altura);
    this.context.moveTo(0, this.altura / 2);
    this.context.lineTo(this.largura, this.altura / 2);
    this.context.stroke();
    this.context.closePath();
    // this.desenhaFundo();

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

  zoomIn() {
    this.context?.scale(1.1, 1.1);
  }

  zoomOut() {

    this.context?.scale(0.9, 0.9);
  }

  resetZoom() {
    this.context?.resetTransform();
  }

}
