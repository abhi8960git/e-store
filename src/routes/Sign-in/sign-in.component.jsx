import { signInWithGooglePopup } from "../utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase";
const SignIn=()=>{
  const logGoogleUser=async()=>{
    const {user}=await signInWithGooglePopup();
    // console.log(response);
    createUserDocumentFromAuth(user);
    console.log("hello");
  }


  return(
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>SignIn</button>
    </div>
  )
}
export  default SignIn;