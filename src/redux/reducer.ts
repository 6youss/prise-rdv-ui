export enum ActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INCREMENT_ASYNC = "INCREMENT_ASYNC"
}

export interface Action {
  type: ActionTypes;
}

export type State = number;

const initState: State = 0;

function reducer(state: State = initState, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default reducer;
