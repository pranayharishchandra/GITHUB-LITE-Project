

function githubReducer (state, action) {
    // state => current state
    // action => string, "increase" or "decrease"
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,                 // common redux syntax
                users: action.payload,
                loading: false,           // loading is not passed but it's accessible throughout the funcition
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,  // basically doing setLoading(true) if we we using useState
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }

}

export default githubReducer;


// ...state is using the spread operator to create a shallow copy of the current state object. 
// This is a common pattern in Redux reducers (and in state management in general) 
// to ensure immutability when updating state. 
// By creating a new object using the spread operator, you avoid directly modifying the original state object, 
// which helps prevent unintended side effects.