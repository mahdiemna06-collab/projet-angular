import { Routes } from '@angular/router';
import { Accueil } from './components M/accueil/accueil';
import { PlanDuSite } from './components M/plan-du-site/plan-du-site';
import { Propositions } from './components M/propositions/propositions';
import { Apropos } from './components M/apropos/apropos';
import { Error } from './components M/error/error';
import { AjouterCafer } from './components M/ajouter-cafer/ajouter-cafer';

export const routes: Routes = [
  {
    path: 'accueil',
    title: 'Accueil',
    component: Accueil
  },
      { path: 'planDuSite', title: 'Plan du site', component: PlanDuSite },
      { path: 'propositions', title: 'Propositions', component: Propositions },
      { path: 'Apropos', title: 'A propos', component: Apropos },
      {path:'ajouter-cafer', title:"ajouter un cafe", component:AjouterCafer }

  ,
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', title: 'Erreur', component: Error }
];
