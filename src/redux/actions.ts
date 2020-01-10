import { Action, ActionTypes } from "./reducer";

export function increment(): Action {
  return {
    type: ActionTypes.INCREMENT
  };
}
export function incrementAsync(): Action {
  return {
    type: ActionTypes.INCREMENT_ASYNC
  };
}
export function decrement(): Action {
  return {
    type: ActionTypes.DECREMENT
  };
}
