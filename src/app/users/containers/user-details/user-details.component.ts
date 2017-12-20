import { Subscription } from 'rxjs/Subscription';

import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromUsers from '../../reducers';
import * as user from '../../actions/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnDestroy {
  subscription: Subscription;

  constructor(private store: Store<fromUsers.State>,
              route: ActivatedRoute) {

    this.subscription = route.params
      .map(params => new user.Select(parseInt(params.id, 10)))
      .subscribe(store);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
