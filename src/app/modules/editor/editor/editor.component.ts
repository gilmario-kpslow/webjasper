import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { ReportCanvasComponent } from '../../components/report-canvas/report-canvas.component';
import { ReportInstanceBuilder } from '../builder/report-instance-builder';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {
  relatorio = new ReportInstanceBuilder().getA4('relatorio');
  nome = "\o/";
  x = 50;
  y = 50;
  mousePos = false;

  @ViewChild(ReportCanvasComponent) canvas: ReportCanvasComponent | undefined

  @ViewChild(ReportCanvasComponent) private reportCanvas: ReportCanvasComponent | undefined;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.reportCanvas?.setDimensoes();
    this.centraliza();
    this.draw();
  }

  centraliza() {
    if (!this.reportCanvas || !this.reportCanvas.context) {
      return;
    }
    this.x = (this.reportCanvas.largura - this.relatorio.pageWidth) / 2;

  }

  initA4(): void {
    this.draw();
  }

  draw() {
    if (!this.reportCanvas || !this.reportCanvas.context) {
      return;
    }
    this.reportCanvas.limpar();

    this.relatorio.x = this.x;
    this.relatorio.y = this.y;
    this.relatorio.processa(this.reportCanvas.context);

    requestAnimationFrame(this.draw.bind(this));
  }

  // @HostListener("mousemove", ['$event'])
  // teste(event: any) {
  //   if (this.mousePos) {
  //     this.x = event.clientX - this.canvas?.elementRef.nativeElement.offsetLeft;
  //     this.y = event.clientY - this.canvas?.elementRef.nativeElement.offsetTop;
  //   }
  // }

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
