import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// import firebaseConfig from "./Firebase.config";



const initializieFirebase = () =>{
    initializeApp(firebaseConfig);
}
export default initializieFirebase;