import { Component } from '@angular/core';
import { Relatorio } from '../classes/relatorio';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  relatorio = new Relatorio();

  constructor() {
    
  }
}
