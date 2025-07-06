import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellApplicationComponent } from './shell-application/shell-application.component';

const routes: Routes = [
  {
    path: 'my',
    component: ShellApplicationComponent,
  },
  {
    path: 'mf',
    loadChildren: () => import('micro-front/HelloModule').then(m => m.HelloModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
