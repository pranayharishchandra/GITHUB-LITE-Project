function githubReducer (state, action) {
    // state => current state
    // action => string, "increase" or "decrease"
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        default:
            return state;
    }

}






export default githubReducer;