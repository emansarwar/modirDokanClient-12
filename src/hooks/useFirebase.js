import { useEffect, useState } from "react";
import initializieFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup,updateProfile, getIdToken,  onAuthStateChanged} from "firebase/auth";


initializieFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};

            setUser(newUser);
            saveUser(email, name, 'POST');

            //send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              }).catch((error) => {
            });
            history.replace('/');
          })
          .catch((error) => {
           
            setAuthError(error.message);




            // console.log(error);
            // ..
          });
    }

    const loginUser = (email, password, location, history) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination);
          setAuthError('');
        })
        .catch((error) => {
          setAuthError(error.message);
  });
    }

    const signInWithGoogle = (location, history) => {
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
        const destination = location?.state?.from || '/';
          history.replace(destination);
      }).catch((error) => {
        setAuthError(error.message);
      });
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user);
               getIdToken(user)
               .then(idToken =>{
                 setToken(idToken)
               })
              } else {
                setUser({})
            }
          });
          return () => unsubscribe;
    }, [auth])

    useEffect(() => {
      fetch(`https://damp-basin-75114.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const saveUser = (email, displayName, method) =>{
      const user = {email, displayName};
      fetch('https://damp-basin-75114.herokuapp.com/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return {
        user,
        admin,
        token,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
        

    }
}
 export default useFirebase;