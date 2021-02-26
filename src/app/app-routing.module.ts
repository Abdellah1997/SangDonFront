import { InfosPageModule } from './components/infos/infos.module';
import { HelpPageModule } from './components/help/help.module';
import { ProfilePageModule } from './components/profile/profile.module';
import { DemanderPageModule } from './components/demander/demander.module';
import { GuardGuard } from './services/guard/guard.guard';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'centres',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./components/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'login' , loadChildren: () => import( './components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup', loadChildren: () => import('./components/signup/signup.module').then( m => m.SignupPageModule)
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
    path: 'demander',  loadChildren: () => import('./components/demander/demander.module').then( m => m.DemanderPageModule), canActivate: [GuardGuard]
  },
  {
    path: 'profile',  loadChildren: () => import('./components/profile/profile.module').then( m => m.ProfilePageModule), canActivate: [GuardGuard]
    
  },
  {
    path: 'modifier',  loadChildren: () => import('./components/modifier/modifier.module').then( m => m.ModifierPageModule), canActivate: [GuardGuard]
 },
  {
    path: 'help',  loadChildren: () => import('./components/help/help.module').then( m => m.HelpPageModule), canActivate: [GuardGuard]
  },
  {
    path: 'infos',  loadChildren: () => import('./components/infos/infos.module').then( m => m.InfosPageModule), canActivate: [GuardGuard]
  },
  {
    path: 'supprimer', loadChildren: () => import('./components/supprimer/supprimer.module').then( m => m.SupprimerPageModule), canActivate: [GuardGuard]
  },
  {
    path: 'centres',
    loadChildren: () => import('./components/centres/centres.module').then( m => m.CentresPageModule)
  },
  {
    path: 'centres/:id',
    loadChildren: () => import('./components/details-centre/details-centre.module').then( m => m.DetailsCentrePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [GuardGuard]
})
export class AppRoutingModule {}
