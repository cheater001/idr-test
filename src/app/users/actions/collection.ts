import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const LOAD = '[Users Collection] Load';
export const LOAD_SUCCESS = '[Users Collection] Load Success';
export const LOAD_FAIL = '[Users Collection] Load Fail';

/**
 * Load Collection Actions
 */
export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: User[]) {}
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail;
