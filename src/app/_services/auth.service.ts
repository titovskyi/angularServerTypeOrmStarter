import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  login(userData): Observable<User> {
    return this.http.post<User>(`${environment.API.login}`, userData);
  }

  getUser() {
    return this.http.get<User>(`${environment.API.user}`);
  }

}
