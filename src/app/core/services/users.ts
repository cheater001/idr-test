import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../users/models/user';

@Injectable()
export class UsersService {
  private API_PATH = environment.api_path;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_PATH}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_PATH}/users/${id}`);
  }
}
