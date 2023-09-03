
function githubReducer(state, action) {
    // state  => current state
    // action => contains the object { type: ___, payload: ___ }
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user:  action.payload.user,
                repos: action.payload.repos,
                loading: false
            }
        /*
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'GET_REPOS':                  // basically fetching repos
            return {                       // returning an object because initial state is an object
                ...state,                  // keeping the values of of state object as it it, 
                                           // as they will be recived by state variable in Github context file
                repos: action.payload,     // overwirting the values or updating values for the new state
                loading: false,
            }
        */
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                // users: action.payload
                users: [],
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