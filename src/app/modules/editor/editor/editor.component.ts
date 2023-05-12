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
  x = 0;
  y = 0;
  mousePressed = false;
  translateX: number = 0;
  translateY: number = 0;
  scale = 1;
  scaleBase = 0.1;
  baseX = 0;
  baseY = 0;


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

    if (this.relatorio.pageWidth < this.reportCanvas.largura) {
      this.x = (this.reportCanvas.largura - this.relatorio.pageWidth) / 2;
    } else {
      this.x = (this.reportCanvas.largura) / 2;
    }

    if (this.relatorio.pageHeight < this.reportCanvas.altura) {
      this.y = (this.reportCanvas.altura - this.relatorio.pageHeight) / 2;
    } else {
      this.y = (this.reportCanvas.altura) / 2;
    }
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
    this.relatorio.processa(this.reportCanvas.context, this.scale, this.translateX, this.translateY);
    requestAnimationFrame(this.draw.bind(this));
  }

  @HostListener("mousedown", ['$event'])
  mouseDown(event: any) {
    if (event.button === 1) {
      this.mousePressed = true;
      this.baseX = event.clientX;
      this.baseY = event.clientY;
    }
  }

  @HostListener("mouseup", ['$event'])
  mouseUp() {
    this.mousePressed = false;
  }

  @HostListener("mousemove", ['$event'])
  mouseMove(event: any) {

    if (this.mousePressed) {
      // Mover
      const bx = (this.baseX - event.clientX) / this.scale;
      if (bx) {
        this.x -= bx;
      } else {
        this.x += bx;
      }

      this.baseX = event.clientX

      const by = (this.baseY - event.clientY) / this.scale;
      if (by) {
        this.y -= by;
      } else {
        this.y += by;
      }

      this.baseY = event.clientY


    }
  }



  @HostListener("wheel", ['$event'])
  scroll(e: any) {
    if (!this.reportCanvas) {
      return;
    }
    if (e.wheelDelta > 0) {
      this.maisZoom()
    } else {
      this.menosZoom()
    }
  }

  maisZoom() {
    if (this.scale > 10) {
      return;
    }
    this.scale = Number.parseFloat((this.scale + this.scaleBase).toFixed(1));
    this.calculaTransalate();

  }

  calculaTransalate() {
    if (!this.reportCanvas) {
      return;
    }
    this.translateX = Math.round((this.reportCanvas.largura - (this.reportCanvas.largura * this.scale)) / 2);
    this.translateY = Math.round((this.reportCanvas.altura - (this.reportCanvas.altura * this.scale)) / 2);
  }

  menosZoom() {
    if (this.scale == this.scaleBase) {
      return;
    }
    this.scale = Number.parseFloat((this.scale - this.scaleBase).toFixed(1));
    this.calculaTransalate();
  }

  zeroZoom() {
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
    this.reportCanvas?.resetZoom();
    this.centraliza();
  }
}
