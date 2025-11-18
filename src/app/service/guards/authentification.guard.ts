import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthentifierService } from '../authentifier-service';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthentifierService);
  const router = inject(Router);

  if (auth.isAdminConnected()) {
    return true;
  }

  router.navigate(['/authentifier']);
  return false;
};
