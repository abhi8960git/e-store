
// import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
// import SignInForm from "../../components/sign-in-form/sign-in";
// import './sign.css'
// const Authentication=()=>{
//   return(
//     <div className="authentication-container">
      
//       <SignInForm ></SignInForm>
//       <SignUpForm></SignUpForm>
//     </div>
//   );
// }
// export  default Authentication;

// 

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in';


const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;