import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor/editor.component';
import { ComponentsModule } from '../components/components.module';
import { RelatorioInpectorComponent } from './relatorio-inpector/relatorio-inpector.component';
import {MatTreeModule} from '@angular/material/tree'; 
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    EditorComponent,
    RelatorioInpectorComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule, 
    ComponentsModule,
    MatTreeModule,
    MatIconModule
    
  ]
})
export class EditorModule { }
