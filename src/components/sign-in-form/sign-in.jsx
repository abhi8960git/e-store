// import { useState ,useContext} from "react";
// import FormInput from "../form-input/form-input.component";
// import Button from "../button/button.component";
// import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from "../../routes/utils/firebase/firebase";
// import { userContext } from "../../contexts/user.cotext";

// import './sign-in.css';
// const defaultFormFields = {
//     email: '',
//     password: '',
// }




// const SignInForm = () => {

//     const [formFields, setFormFields] = useState(defaultFormFields);
//     const { email, password } = formFields;
//     // console.log(formFields);
//     const {setCurrentUser}=useContext(userContext);

//     const resetFormFields = () => {
//         setFormFields(defaultFormFields);
//     }

//     const signInWithGoogle = async () => {
//         const { user } = await signInWithGooglePopup();
//         // console.log(response);
//         // console.log(user);
//         await createUserDocumentFromAuth(user);
//     }



//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {

//             const {user} = await signInAuthWithEmailAndPassword(email, password);
//             resetFormFields();
//             setCurrentUser(user);
//             // console.log("its me");
//             // console.log("hello");
//             // resetFormFields();

//         } catch (error) {
//             switch (error) {
//                 case 'auth/wrong-password':
//                     alert("incorrect password for email");
//                     break;
//                 case 'auth/user-not-found':
//                     alert('no use associated with this email');
//                     break;
//                 default:
//                     console(error);
//             }


//         }
//     };



//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         // target return the thing that is meeting the event all things matching the event

//         setFormFields({ ...formFields, [name]: value });
//     };

//     return (
//         <div className="sign-in">
//             <h1>Already  have an account?</h1>
//             <span>Sign up with your email and password</span>
//             <form onSubmit={handleSubmit}>



//                 <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}></FormInput>

//                 <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}></FormInput>




//                 <div>
//                     <Button type="submit">Sign In</Button>
//                     <Button type="button" onClick={signInWithGoogle}>Google sign In</Button>
//                 </div>
//             </form>

//         </div>
//     )
// };
// export default SignInForm; 

// 

import { useState ,useContext} from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { userContext } from '../../contexts/user.cotext';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../routes/utils/firebase/firebase';


const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const {setCurrentUser}=useContext(userContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;