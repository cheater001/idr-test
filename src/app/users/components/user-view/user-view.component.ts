import { Observable } from 'rxjs/Observable';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import * as fromUsers from '../../reducers';
import * as user from '../../actions/user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserViewComponent implements OnInit {
  user$: Observable<User>;
  user: User;

  constructor(private store: Store<fromUsers.State>) {
    this.user$ = store.select(fromUsers.getSelectedUser);
  }

  ngOnInit() {
  }

}
