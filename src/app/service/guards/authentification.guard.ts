import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthentifierService } from '../authentifier-service';

export const authGuard: CanActivateFn = (route, state) => {
 const authentifierService: AuthentifierService = inject(AuthentifierService);

  const router = inject(Router);

  if (authentifierService.isAdminConnected()) {
    return true;
  }


  //en cas d'echec de connexion ou isAdminConnected()==falseon redirige vers la page d'authentification
  router.navigate(['authentifier']);
  return false;
};
