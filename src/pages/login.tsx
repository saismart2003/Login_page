import { auth, provider} from "../config/firebase";
import { signInWithPopup} from "firebase/auth"; 

export const Login = () => {

    const SignInWithGoogle = async () =>{ 
        const result = await signInWithPopup(auth,provider);
               

    }

    return <div>
         <p >Sign In With Google To Continue</p>
         <button onClick={SignInWithGoogle}>Sign In With Google</button>
        </div>
 };