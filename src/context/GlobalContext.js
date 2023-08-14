import React, { createContext, useReducer } from 'react';
import globalReducer from './GlobalReducer';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const initialState = {
        modalIsOpen: false,
        modalContent: null,
    };

    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
