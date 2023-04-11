import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-report-canvas',
  templateUrl: './report-canvas.component.html',
  styleUrls: ['./report-canvas.component.css']
})
export class ReportCanvasComponent implements AfterViewInit{

  canvas: HTMLCanvasElement| undefined;
  context: CanvasRenderingContext2D| null | undefined;

  @ViewChild("main") div: ElementRef| undefined

  constructor(private renderer: Renderer2,public elementRef: ElementRef) {
    
  }

ngAfterViewInit(): void {
  console.log(this.div)
    this.canvas = this.renderer.createElement('canvas');
    this.context = this.canvas?.getContext('2d');
    this.renderer.appendChild(this.div?.nativeElement, this.canvas);
}

  setDimensoes(width: number, heigth: number) {
    this.renderer.setAttribute( this.canvas,'width', `${width}`);
    this.renderer.setAttribute(this.canvas, 'height', `${heigth}`);
  }
}
