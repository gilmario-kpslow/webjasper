import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Mensagem } from './mensagem';
import { MensagensComponent } from './mensagens.component';

@Injectable({ providedIn: 'root' })
export class MensagemService {

  constructor(private dialog: MatDialog) { }

  informacao(mensagem: string, titulo: string, detalhe: string = '', fn?: Function) {
    this.open({ detalhe, titulo, icone: 'info', mensagem }, 'info', fn);
  }

  sucesso(mensagem: string, titulo: string = 'Sucesso!', detalhe: string = '', fn?: Function) {
    this.open({ detalhe, titulo, icone: 'check_circle', mensagem }, 'success', fn);
  }

  atencao(mensagem: string, titulo: string = 'Atenção!', detalhe: string = '', fn?: Function) {
    this.open({ detalhe, titulo, icone: 'report_problem', mensagem }, 'warn', fn);
  }

  error(mensagem: string, titulo: string = 'Erro', detalhe: string = '', fn?: Function) {
    this.open({ detalhe, titulo, icone: 'report_gmailerrorred', mensagem }, 'error', fn);
  }

  open(mensagem: Mensagem, tipo: string, fn?: Function) {
    const rf = this.dialog.open(MensagensComponent, {
      minWidth: '400px',
      data: { mensagem, tipo }
    });

    rf.afterClosed().subscribe(() => {
      if (fn) {
        fn();
      }
    })
  }
}
