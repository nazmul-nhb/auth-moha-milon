import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config'; 
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('observing current user', currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, loginUser, signInWithGoogle, signInWithFacebook, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}