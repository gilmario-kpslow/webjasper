import { Component } from '@angular/core';
import * as uuid from 'uuid';
import { ReportInstanceBuilder } from '../builder/report-instance-builder';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  lista: string[] = [];
  relatorio = new ReportInstanceBuilder().getA4('relatorio');

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;

  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");  
  }

  initA4(): void {
    // Iniciar o canvas
  }

  draw() {
    this.context?.strokeText("Gilmario", 50, 50);

    requestAnimationFrame(this.draw)
  }

  teste() {
    const a =  uuid.v4();
    this.lista.push(a);
  }
}
