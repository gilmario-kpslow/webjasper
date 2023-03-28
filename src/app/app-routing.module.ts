import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuarde } from './core/login.guard.fn';
import { NaoencontradoComponent } from './modules/components/naoencontrado/naoencontrado.component';
import { EditorModule } from './modules/editor/editor.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => HomeModule), canActivate: [loginGuarde] },
  { path: 'editor', loadChildren: () => import('./modules/editor/editor.module').then(m => EditorModule), canActivate: [loginGuarde] },
  { path: 'auth', loadChildren: () => import('./modules/login/login.module').then(m => LoginModule) },
  { path: '**', component: NaoencontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
