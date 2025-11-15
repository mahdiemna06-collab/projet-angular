import { Injectable } from '@angular/core';
///code importé de w3Schools pour bloquer l'acces au internautes et débloquer l'acces aux admins

@Injectable({
  providedIn: 'root',
})
export class AuthentifierService {
  private AdminConnecte = false;
  isAdminConnected(): boolean{
    return this.AdminConnecte;
  }
  connected() {
    this.AdminConnecte = true;
  }
  deconnected() {
    this.AdminConnecte = false;
  }
}
