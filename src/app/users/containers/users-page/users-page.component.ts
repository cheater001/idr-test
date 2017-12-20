import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromUsers from '../../reducers';
import * as fromRoot from '../../../reducers';
import * as collection from '../../actions/collection';

@Component({
  selector: 'app-collection-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  usersLoading$: Observable<boolean>;

  constructor(private store: Store<fromUsers.State>) {
    this.usersLoading$ = store.select(fromUsers.getCollectionLoading);
  }

  ngOnInit() {
    this.store.dispatch(new collection.Load());
  }
}
