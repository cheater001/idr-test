import { Component, ChangeDetectionStrategy, ViewEncapsulation, } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <mat-toolbar color="primary">Users App</mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>) {
  }
}
