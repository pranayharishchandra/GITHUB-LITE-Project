import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducers";

const AlertContext = createContext();

export function AlertProvider( {children} ) {

    /**IN CONTEXT FILES YOU DON'T USE USESTATE, BECAUSE YOU CAN USE REDUCERS, i.e. best practice */
    
    const initialState = null;
    const [ state, dispatch ] = useReducer(alertReducer, initialState);


    // set alert and removing after 3 seconds
    function setAlert (msg, type) {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })
        setTimeout(() => {
            dispatch({
                type:'REMOVE_ALERT',
            })
        }, 3000);
    }


    return <AlertContext.Provider value={
                                          {  
                                            alert: state,
                                            setAlert,
                                          }
                                        }>
        { children }
    </AlertContext.Provider>

}

export default AlertContext;