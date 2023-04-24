import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import * as uuid from 'uuid';
import { ReportCanvasComponent } from '../../components/report-canvas/report-canvas.component';
import { ReportInstanceBuilder } from '../builder/report-instance-builder';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit{
  relatorio = new ReportInstanceBuilder().getA4('relatorio');
  nome = "Gilmario";
  x = 50;
  y = 50;
  mousePos = false;

  @ViewChild(ReportCanvasComponent) canvas: ReportCanvasComponent | undefined

  @ViewChild(ReportCanvasComponent) private reportCanvas: ReportCanvasComponent| undefined; 

  constructor() {
  }

  ngAfterViewInit(): void {
    this.reportCanvas?.setDimensoes(this.relatorio.pageWidth, this.relatorio.pageHeight);
    this.draw();
  }

  initA4(): void {
    // Iniciar o canvas
    this.draw();
  }

  draw() {
    this.reportCanvas?.context?.clearRect(0,0, this.relatorio.pageWidth, this.relatorio.pageHeight);

    this.reportCanvas?.context?.strokeRect(0,0, this.relatorio.pageWidth, this.relatorio.pageHeight);
  
    this.reportCanvas?.context?.strokeText(this.nome, this.x, this.y);

    requestAnimationFrame(this.draw.bind(this));
  }

  @HostListener("mousemove", ['$event'])
  teste(event: any) {
    if(this.mousePos) {
      this.x = event.clientX - this.canvas?.elementRef.nativeElement.offsetLeft;
      this.y = event.clientY - this.canvas?.elementRef.nativeElement.offsetTop;
    }
  }

  @HostListener("mousedown")
  teste2() {
    this.mousePos = true;
    // Procurar o 
  }

  @HostListener("mouseup")
  teste3() {
    this.mousePos = false;
  }
}
