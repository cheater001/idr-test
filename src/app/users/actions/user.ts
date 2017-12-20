import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const LOAD = '[User] Load';
export const SELECT = '[User] Select';

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload: User) {}
}

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) {}
}

export type Actions =
  | Load
  | Select;
