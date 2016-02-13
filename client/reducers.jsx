import React from 'react';
import { combineReducers } from 'redux';
import { MOVE, RESET } from './actions.jsx';
import { move, reset, INITIAL_STATE } from './game.jsx';


export function reducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case MOVE:
      return move(state, action.position);
    case RESET:
      return reset(state);
  }
  return state;
}


export default xoxoxoApp = combineReducers({
  reducer
});

