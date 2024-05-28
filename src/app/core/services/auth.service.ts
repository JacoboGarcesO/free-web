import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICredentials } from '../models/auth.model';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _http = inject(HttpClient);

  login(credentials: ICredentials): Observable<IUser> {
    return this._http.post<IUser>('', JSON.stringify(credentials), 
    {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }
  );
  }
}
