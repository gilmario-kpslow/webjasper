import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor/editor.component';
import { ComponentsModule } from '../components/components.module';
import { RelatorioInpectorComponent } from './relatorio-inpector/relatorio-inpector.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { P5exemploComponent } from './p5exemplo/p5exemplo.component';
import { EditorhtmlComponent } from './editorhtml/editorhtml.component';
import { LateralDireitoComponent } from './lateral-direito/lateral-direito.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ZoomToobarComponent } from './zoom-toobar/zoom-toobar.component';


@NgModule({
  declarations: [
    EditorComponent,
    RelatorioInpectorComponent,
    P5exemploComponent,
    EditorhtmlComponent,
    LateralDireitoComponent,
    ZoomToobarComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    ComponentsModule,
    MatTreeModule,
    MatIconModule,
    FormsModule,
    MatButtonModule

  ]
})
export class EditorModule { }
