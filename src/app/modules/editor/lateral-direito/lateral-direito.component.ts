import { Component, EventEmitter, Output } from '@angular/core';
import { Componente } from './componente';

@Component({
  selector: 'app-lateral-direito',
  templateUrl: './lateral-direito.component.html',
  styleUrls: ['./lateral-direito.component.css']
})
export class LateralDireitoComponent {

  @Output() selecionaEvent = new EventEmitter();
  components: Componente[] = [
    {icone: 'text', nome: 'Static Text'},
    {icone: 'input', nome: 'Input Text'},
    {icone: 'imagem', nome: 'Imagem'},
  ];

  seleciona(c: Componente) {
    this.selecionaEvent.emit(c);
  }
}
