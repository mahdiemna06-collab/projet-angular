import { Injectable, inject, OnInit } from '@angular/core';
import { Admin } from './admin';
import { AdminModel } from '../models/admin-model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthentifierService {

  private readonly adminService = inject(Admin);
  private adminList: AdminModel[] = [];
  private isConnected = false;

  OnInit() {
    this.adminService.getAdmins().subscribe(data => {
      this.adminList = data;
    });
  }

  /*verifierIdentifiants(username: string, password: string): boolean {
    return this.adminList.some(
      admin => admin.username === username && admin.password === password
    );
  }*/
verifierIdentifiants(username: string, password: string) {
  return this.adminService.getAdmins().pipe(
    map(admins => {
      const isValid = admins.some(a => a.username === username && a.password === password);
      if (isValid) {
        localStorage.setItem('usernameActuel', username);
        localStorage.setItem('mdpActuel', password);
      }
      return isValid;
    })
  );
}



  connected() {
    this.isConnected = true;
  }
   deconnected() {
    this.isConnected = false;
  }

  isAdminConnected(): boolean {
    return this.isConnected;
  }

}
