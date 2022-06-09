import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';

const routes: Routes = [

  {
    path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '', component: LayoutComponent, children: [
      {path:'', loadChildren: () => import('./components/public/public.module').then(m => m.PublicModule)}
    ] 
  },
  {
    path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
