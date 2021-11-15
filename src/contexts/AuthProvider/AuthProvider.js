import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContnext = createContext(null);
const AuthProvider = ({children}) => {
    const allContexts = useFirebase();
    return (
        <AuthContnext.Provider value={allContexts}>
            {children}
        </AuthContnext.Provider>
    );
};

export default AuthProvider;