import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth( app )

const AuthProvider = ( { children } ) => {
    const [ user, setUser ] = useState( null )
    const [ loading, setLoading ] = useState( true )

    const providerLogin = ( provider ) => {
        setLoading( true )
        return signInWithPopup( auth, provider )
    }

    const createUser = ( email, password ) => {
        setLoading( true )
        return createUserWithEmailAndPassword( auth, email, password )
    }

    const signIn = ( email, password ) => {
        setLoading( true )
        return signInWithEmailAndPassword( auth, email, password )
    }

    const logOut = () => {
        setLoading( true )
        return signOut( auth );
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, ( currentUser ) => {
            // console.log( 'user change', currentUser );
            if ( currentUser === null || currentUser.emailVerified ) {
                setUser( currentUser );
            }
            setLoading( false )
        } );
        return () => {
            unsubscribe();
        }
    }, [] )

    const userInfo = { user, providerLogin, logOut, createUser, signIn }

    return (
        <AuthContext.Provider value={ userInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
