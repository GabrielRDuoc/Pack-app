import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'my-pkgs',
    loadChildren: () => import('./my-pkgs/my-pkgs.module').then( m => m.MyPkgsPageModule)
  },
  {
    path: 'home-client',
    loadChildren: () => import('./home-client/home-client.module').then( m => m.HomeClientPageModule)
  },
  {
    path: 'historico-cliente',
    loadChildren: () => import('./historico-cliente/historico-cliente.module').then( m => m.HistoricoClientePageModule)
  },
  {
    path: 'paquetes-cliente',
    loadChildren: () => import('./paquetes-cliente/paquetes-cliente.module').then( m => m.PaquetesClientePageModule)
  },
  {
    path: 'recibir',
    loadChildren: () => import('./recibir/recibir.module').then( m => m.RecibirPageModule)
  },
  {
    path: 'entregar',
    loadChildren: () => import('./entregar/entregar.module').then( m => m.EntregarPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
