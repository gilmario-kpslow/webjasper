import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { P5exemploComponent } from './p5exemplo/p5exemplo.component';

const routes: Routes = [
  {path: '', component: EditorComponent},
  {path: 'p5', component: P5exemploComponent},
  {path: 'html', component: P5exemploComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
