import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';

import { UsersDataSource, } from '../../users-data-source';

import { Store, } from '@ngrx/store';
import * as fromUsers from '../../reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  dataSource: UsersDataSource | null;

  constructor(private store: Store<fromUsers.State>) {
    this.dataSource = new UsersDataSource(store);
  }

  ngOnInit() {
  }
}
