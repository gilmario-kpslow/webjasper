import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-report-canvas',
  templateUrl: './report-canvas.component.html',
  styleUrls: ['./report-canvas.component.css']
})
export class ReportCanvasComponent {

  canvas: HTMLCanvasElement| undefined;
  context: CanvasRenderingContext2D| null | undefined;

  constructor(private renderer: Renderer2,private el: ElementRef) {
    this.canvas = renderer.createElement('canvas');
    this.context = this.canvas?.getContext('2d');
    renderer.appendChild(el.nativeElement, this.canvas);
  }

  setDimensoes(width: number, heigth: number) {
    this.renderer.setAttribute( this.canvas,'width', `${width}`);
    this.renderer.setAttribute(this.canvas, 'height', `${heigth}`);
  }
}
