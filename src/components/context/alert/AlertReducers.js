

function alertReducer( state, action ) {
    // state here is the state managed by react to know about current state of the variable

    // note : here we are not passing object where we used to have ...state
    switch (action.type) {
        case 'SET_ALERT':
            return action.payload;

        case 'REMOVE_ALERT':
            return null;

        default:
            return state;
    }
}

export default alertReducer
