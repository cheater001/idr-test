import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './users';
import * as fromCollection from './collection';
import * as fromRoot from '../../reducers';

import { User } from '../models/user';

export interface UsersState {
  users: fromUsers.State;
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  'users': UsersState;
}

export const reducers = {
  users: fromUsers.reducer,
  collection: fromCollection.reducer,
};

export const getUsersState = createFeatureSelector<UsersState>('users');

export const getUserEntitiesState = createSelector(
  getUsersState,
  state => state.users
);

export const getSelectedUserId = createSelector(
  getUserEntitiesState,
  fromUsers.getSelectedId
);

export const {
  selectIds: getUserIds,
  selectEntities: getUserEntities,
  selectAll: getAllUsers,
  selectTotal: getTotalUsers,
} = fromUsers.adapter.getSelectors(getUserEntitiesState);

export const getSelectedUser = createSelector(
  getUserEntities,
  getSelectedUserId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const getCollectionState = createSelector(
  getUsersState,
  (state: UsersState) => state.collection
);

export const getCollectionLoaded = createSelector(
  getCollectionState,
  fromCollection.getLoaded
);
export const getCollectionLoading = createSelector(
  getCollectionState,
  fromCollection.getLoading
);
export const getCollectionUserIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);

export const getUserCollection = createSelector(
  getUserEntities,
  getCollectionUserIds,
  (entities, ids) => {
    return ids.map(id => entities[id]);
  }
);
