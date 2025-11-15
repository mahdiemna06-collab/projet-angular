import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminModel } from '../models/admin-model';

const API_URL = "http://localhost:3001/admins"

@Injectable({
  providedIn: 'root',
})
export class Admin {
  private readonly http: HttpClient = inject(HttpClient);
  public getAdmins(): Observable<AdminModel[]>{
    return this.http.get<AdminModel[]>(API_URL);
  }

}
