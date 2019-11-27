import * as TYPE from './Type';

export const operatorInput = (key , input) => dispatch => {
  const action = {    
      type: TYPE.OPERATOR_INPUT,
      payload: { key: key, value: input }
  };
  dispatch(action);
};

export const numberInput = (key, input) => dispatch => {
  const action = {
      type : TYPE.NUMBER_INPUT,
      payload: { key: key, value: input }
  };
  dispatch(action);
};

export const dotInput = (key, input) => dispatch => {
  const action = {
      type : TYPE.NUMBER_INPUT,
      payload: { key: key, value: input }
  };
  dispatch(action);
};

export const delInput = () => dispatch => {
  const action = {
      type : TYPE.DEL_INPUT
  };
  dispatch(action);
};

export const clearInput = () => dispatch => {
  const action = {    
      type: TYPE.CLEAR_INPUT
  };
  dispatch(action);
};

export const handleCalculator = () => dispatch => {
  const action = {    
      type: TYPE.HANDLE_CALCULATOR
  };
  dispatch(action);
};