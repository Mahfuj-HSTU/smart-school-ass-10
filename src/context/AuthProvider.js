import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth( app )

const AuthProvider = () => {
    const [ user, setUser ] = useState( null )
    const [ loading, setLoading ] = useState( true )


    const createUser = ( email, password ) => {
        setLoading( true )
        return createUserWithEmailAndPassword( auth, email, password )
    }
    return (
        <div>

        </div>
    );
};

export default AuthProvider;
