import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as collection from '../actions/collection';
import { User } from '../models/user';

import { UsersService } from '../../core/services/users';

@Injectable()
export class CollectionEffects {
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.LOAD)
    .switchMap(() =>
      this.users
        .getUsers()
        .map((users: User[]) => new collection.LoadSuccess(users))
        .catch(error => of(new collection.LoadFail(error)))
    );

  constructor(private actions$: Actions, private users: UsersService) {}
}
