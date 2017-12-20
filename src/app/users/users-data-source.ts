import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { User } from './models/user';
import * as fromUsers from './reducers';

export class UsersDataSource extends DataSource<any> {
  constructor(private store: Store<fromUsers.State>) {
    super();
  }

  connect(): Observable<User[]> {
    return this.store.select(fromUsers.getUserCollection);
  }

  disconnect() {}
}
