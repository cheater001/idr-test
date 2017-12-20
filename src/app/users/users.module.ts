import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CdkTableModule } from '@angular/cdk/table';

import { MaterialModule } from '../material';

import { CollectionEffects } from './effects/collection';

import { UserExistsGuard } from './guards/user-exists';

import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserViewComponent } from './components/user-view/user-view.component';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MaterialModule,
    CdkTableModule,

    RouterModule.forChild([
      {
        path: '',
        component: UsersPageComponent,
      },
      {
        path: ':id',
        component: UserDetailsComponent,
        canActivate: [UserExistsGuard],
      },
    ]),

    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([CollectionEffects]),
  ],
  declarations: [
    UsersPageComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserViewComponent,
  ],
  providers: [UserExistsGuard],
})
export class UsersModule {
}
