import { createContext, useEffect, useReducer} from 'react';
import { getSessionStorage, setSessionStorage } from '../utils/storage';

const initialState = {
    questions: {}
}
const reducer = (state, action) => {
    switch (action.type) {
         case 'QUESTIONNAIRE':
            return {
                ...state,
                questions: {
                    ...state.questions,
                    ...action.payload
                }
            }
        default:
            return state
    }
}


const Context = createContext()

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (getSessionStorage('state')) { 
            console.log(getSessionStorage('state'))
        
           //checking if there already is a state in session storage
           //if yes, update the current state with the stored one
           dispatch({ 
              type: "QUESTIONNAIRE", 
              payload: {...JSON.parse(getSessionStorage("state"))}
           });
        }
     }, []);

     useEffect(() => {
        if (state.questions !== initialState.questions) {
            setSessionStorage("state", JSON.stringify(state.questions)); 
        }
     }, [state]);


    const value = { state, dispatch}
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export {
    Provider,
    Context
};