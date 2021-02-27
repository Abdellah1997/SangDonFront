import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './components/login/login.module';
import { LoginPage } from './components/login/login.page';
import { SignupPage } from './components/signup/signup.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then( m => m.SignupPageModule)
  },

  {
    path: 'forgot-password',
    loadChildren: () => import('./components/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./components/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'demander',
    loadChildren: () => import('./components/demander/demander.module').then( m => m.DemanderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'modifier',
    loadChildren: () => import('./components/modifier/modifier.module').then( m => m.ModifierPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./components/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'infos',
    loadChildren: () => import('./components/infos/infos.module').then( m => m.InfosPageModule)
  },
  {
    path: 'supprimer',
    loadChildren: () => import('./components/supprimer/supprimer.module').then( m => m.SupprimerPageModule)
  },
  {
    path: 'centres',
    loadChildren: () => import('./components/centres/centres.module').then( m => m.CentresPageModule)
  },
  {
    path: 'details-centre',
    loadChildren: () => import('./components/details-centre/details-centre.module').then( m => m.DetailsCentrePageModule)
  },
  {
    path: 'demandes',
    loadChildren: () => import('./components/demandes/demandes.module').then( m => m.DemandesPageModule)
  },
  {
    path: 'rendezvous',
    loadChildren: () => import('./components/rendezvous/rendezvous.module').then( m => m.RendezvousPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
