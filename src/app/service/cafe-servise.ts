import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListeCafes } from '../models/liste-cafes';

const API_URL = "http://localhost:3000/cafes";
@Injectable({
  providedIn: 'root',
})
export class CafeServise {

  private readonly http: HttpClient = inject(HttpClient);
  public getCafes(): Observable<ListeCafes[]> {
    return this.http.get<ListeCafes[]>(API_URL);
  }
  public postCafe(c:ListeCafes): Observable<ListeCafes>{
    return this.http.post<ListeCafes>(API_URL, c);
  }
   deleteCafe(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  updateCafe(c: ListeCafes): Observable<ListeCafes> {
    return this.http.put<ListeCafes>(`${API_URL}/${c.id}`, c);
  }
}

