import { Routes } from '@angular/router';
import { Accueil } from './components M/accueil/accueil';
import { PlanDuSite } from './components M/plan-du-site/plan-du-site';
import { Propositions } from './components M/propositions/propositions';
import { Apropos } from './components M/apropos/apropos';
import { Error } from './components M/error/error';
import { AjouterCafer } from './components M/ajouter-cafer/ajouter-cafer';
import { Authentifier } from './components M/authentifier/authentifier';
import { authGuard } from './service/guards/authentification.guard';

export const routes: Routes = [
  {
    path: 'accueil',
    title: 'Accueil',
    component: Accueil
  }, { path: 'propositions', title: 'Propositions', component: Propositions },
  { path: 'Apropos', title: 'A propos', component: Apropos },
  {
    path: 'authentifier', title: "s'authentifier", component: Authentifier
  },{ path: 'planDuSite', title: 'Plan du site', component: PlanDuSite,canActivate :[authGuard] },{ path: 'ajouter-cafer', title: "ajouter un cafe", component: AjouterCafer , canActivate :[authGuard] }




  ,
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', title: 'Erreur', component: Error }
];
