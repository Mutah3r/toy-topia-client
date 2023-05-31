import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            if (loggedUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(loggedUser);
                // console.log(loggedUser);
                // const uid = loggedUser.uid;
                // ...
                // console.log('logged in user inside auth state observer: ', loggedUser);
            } else {
                // User is signed out
                // ...
                setUser(null);
                // console.log('currently no user is logged in');
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        loading,
        user,
        createUser,
        signIn,
        logOut,
        googleLogin,
        githubLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;