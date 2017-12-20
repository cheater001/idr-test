import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { UsersService } from '../../core/services/users';
import * as fromUsers from '../reducers';
import * as user from '../actions/user';

@Injectable()
export class UserExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromUsers.State>,
    private users: UsersService,
    private router: Router
  ) {}

  // tillCollectionToLoad(): Observable<boolean> {
  //   return this.store
  //     .select(fromUsers.getCollectionLoaded)
  //     .filter(loaded => loaded)
  //     .take(1);
  // }

  isUserStored(id: number): Observable<boolean> {
    return this.store
      .select(fromUsers.getUserEntities)
      .map(entities => !!entities[id])
      .take(1);
  }

  isUserInApi(id: number): Observable<boolean> {
    return this.users
      .getUser(id)
      .map(userEntity => new user.Load(userEntity))
      .do((action: user.Load) => this.store.dispatch(action))
      .map(user => !!user)
      .catch(() => {
        this.router.navigate(['/404']);
        return of(false);
      });
  }

  hasUser(id: number): Observable<boolean> {
    return this.isUserStored(id)
      .switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }

        return this.isUserInApi(id);
      });
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasUser(route.params['id']);
  }
}
