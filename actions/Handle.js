import { UPDATE_INPUT, CLEAR_INPUT, HANDLE_CALCULATOR } from './Type';

export const updateInput = (key , input) => dispatch => {
  const action = {    
      type: UPDATE_INPUT,
      payload: { key: key, value: input }
  };
  dispatch(action);
};

export const clearInput = () => dispatch => {
  const action = {    
      type: CLEAR_INPUT
  };
  dispatch(action);
};