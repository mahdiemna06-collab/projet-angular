import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminModel } from '../models/admin-model';
import { of } from 'rxjs';

const API_URL = "http://localhost:3001/admins"

@Injectable({
  providedIn: 'root',
})
export class Admin {
  private readonly http: HttpClient = inject(HttpClient);
  public getAdmins(): Observable<AdminModel[]>{
    return this.http.get<AdminModel[]>(API_URL);
  }
public getPhoto(username: string): Observable<string> {
  const fileName = username.replace(/\s/g, '').toLowerCase() + '.jpg';
  const url = `assets/imgs/${fileName}`;
  return of(url);
}




}
