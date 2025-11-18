import { Routes } from '@angular/router';
import { Accueil } from './components M/accueil/accueil';
import { PlanDuSite } from './components M/plan-du-site/plan-du-site';
import { Propositions } from './components M/propositions/propositions';
import { Apropos } from './components M/apropos/apropos';
import { Error } from './components M/error/error';
import { AjouterCafer } from './components M/ajouter-cafer/ajouter-cafer';
import { Authentifier } from './components M/authentifier/authentifier';
import { authGuard } from './service/guards/authentification.guard';
import { CafesList } from './components M/cafes-list/cafes-list';
import { Reservation } from './components M/reservation/reservation';

export const routes: Routes = [
  {
    path: 'accueil',
    title: 'Accueil',
    component: Accueil
  }, {
    path: 'cafes-list',
    title: 'Liste des Cafes',
    component: CafesList
  }, { path: 'propositions', title: 'Propositions', component: Propositions },
  { path: 'reservation', title: 'Reserver', component: Reservation },
  { path: 'Apropos', title: 'A propos', component: Apropos },
  {
    path: 'authentifier', title: "s'authentifier", component: Authentifier
  },{ path: 'planDuSite', title: 'Plan du site', component: PlanDuSite,canActivate :[authGuard] },{ path: 'ajouter-cafer', title: "ajouter un cafe", component: AjouterCafer , canActivate :[authGuard] }




  ,
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', title: 'Erreur', component: Error }
];
