import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensComponent } from './mensagens/mensagens.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NaoencontradoComponent } from './naoencontrado/naoencontrado.component';

@NgModule({
  declarations: [
    MensagensComponent,
    NaoencontradoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NaoencontradoComponent
  ]
})
export class ComponentsModule { }
