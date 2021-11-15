import { useContext } from "react";
import { AuthContnext } from "../contexts/AuthProvider/AuthProvider";


const useAuth = () =>{
    const auth = useContext(AuthContnext);
    return auth;
}

export default useAuth;