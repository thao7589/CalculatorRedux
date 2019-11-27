const initialState = {
    displayValue: '0',
    operator: null,
    firstDot: '',
    secondDot: '',
    firstValue: '',
    secondValue: '',
    nextValue: false
}

export default function(state = initialState, action) {
    const { displayValue, operator, firstValue, secondValue, nextValue } = state;

    switch(action.type) {
        case  'NUMBER_INPUT':
            if(!nextValue) {
                return {
                    ...state,
                    [action.payload.key]: (displayValue === '0') ? action.payload.value : displayValue + action.payload.value,
                    firstValue: firstValue + action.payload.value 
                }
            }
            return {
                ...state,
                [action.payload.key]: (displayValue === '0') ? action.payload.value : displayValue + action.payload.value,
                secondValue: secondValue + action.payload.value 
            }
            break;
        case 'OPERATOR_INPUT':
            return {
                ...state,
                nextValue: true,
                [action.payload.key]: action.payload.value,
                displayValue: (operator !== null ? displayValue.substr(0, displayValue.length -1) : displayValue) + action.payload.value
            }
        case 'DOT_INPUT':
            let lastValue = displayValue.toString().slice(-1);
            
            if(!nextValue) {
                return { 
                    ...state,
                    displayValue: (lastValue !== '.' && firstDot == '')  ? displayValue + action.payload.value : displayValue,
                    fisrtDot: action.payload.value,
                    firstValue: firstValue + action.payload.value
                }
            }
            return { 
                ...state,
                displayValue: (dot !== '.' && secondDot == '') ? displayValue + action.payload.value : displayValue,
                secondDot: action.payload.value,
                secondValue: secondValue + action.payload.value
            }
            break;   
        case 'DEL_INPUT':
            let string = displayValue.toString();
            let deletedString = string.substr(0, string.length - 1);
            let length = string.length;

            return {
                ...state,
                displayValue: length == 1 ? '0' : deletedString,
                firstValue: length == 1 ? '0' : deletedString
            }
            break;    
        case 'CLEAR_INPUT':
            return { 
                ...initialState
            }
            break;   
        case 'HANDLE_CALCULATOR':
            let formatOperator = operator == "x" ? "*" : operator;
            let result = eval(firstValue + formatOperator + secondValue);

            return {
                ...state,
                displayValue: result % 1 === 0 ? result : result.toFixed(2),
                firstValue: result % 1 === 0 ? result : result.toFixed(2),
                secondValue: '',
                nextValue: false,
                operator: null
            }
            break;                
        default:
            return state;    
    }
}