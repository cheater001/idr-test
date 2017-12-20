import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
