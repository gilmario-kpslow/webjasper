import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-report-canvas',
  templateUrl: './report-canvas.component.html',
  styleUrls: ['./report-canvas.component.css']
})
export class ReportCanvasComponent implements AfterViewInit {

  canvas: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | null | undefined;

  @ViewChild("main") div: ElementRef | undefined

  constructor(private renderer: Renderer2, public elementRef: ElementRef) {

  }

  @HostListener("resize", ['$event'])
  onRezise(event: any) {
    console.log(event);
  }

  ngAfterViewInit(): void {
    console.log(this.div)
    this.canvas = this.renderer.createElement('canvas');
    this.context = this.canvas?.getContext('2d');
    this.renderer.appendChild(this.div?.nativeElement, this.canvas);
  }

  setDimensoes() {
    this.renderer.setAttribute(this.canvas, 'width', `${window.screen.width}`);
    this.renderer.setAttribute(this.canvas, 'height', `${window.screen.height}`);
  }

  limpar() {
    this.context?.clearRect(0, 0, window.screen.width, window.screen.height);
    if (this.context) {
      this.context.fillStyle = "rgba(0,0,0,0.5)";
    }
    this.context?.fillRect(0, 0, window.screen.width, window.screen.height);
  }
}
