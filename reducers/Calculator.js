const initialState = {
    displayValue: '0',
    operator: null,
    firstValue: '',
    secondValue: '',
    nextValue: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_INPUT':
            return { 
                ...state,
                [action.payload.key]: action.payload.value
            }
            break;   
        case 'CLEAR_INPUT':
            return { 
                ...initialState
            }
            break;               
        default:
            return state;    
    }
}