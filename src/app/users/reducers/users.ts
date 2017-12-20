import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../models/user';
import * as user from '../actions/user';
import * as collection from '../actions/collection';

export interface State extends EntityState<User> {
  selectedUserId: number | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
});

export function reducer(state = initialState, action: user.Actions | collection.Actions): State {
  switch (action.type) {
    case collection.LOAD_SUCCESS: {
      return {
        ...adapter.addMany(action.payload, state),
        selectedUserId: state.selectedUserId,
      };
    }

    case user.LOAD: {
      return {
        ...adapter.addOne(action.payload, state),
        selectedUserId: state.selectedUserId,
      };
    }

    case user.SELECT: {
      return {
        ...state,
        selectedUserId: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedUserId;
