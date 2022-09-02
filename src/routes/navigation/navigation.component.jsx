// import React ,{useContext}from 'react'
// import { ReactDOM } from 'react'
// import {Fragment} from 'react'
// import { Outlet ,Link} from 'react-router-dom'
// import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
// import './navigation.css'
// import { userContext } from '../../contexts/user.cotext'


// const Navigation=()=>{

//     const {currentUser}=userContext(userContext);
//     console.log(currentUser);
//     return(
       
//         <Fragment>
//             <div className='navigation'>
//                 <Link classname='logo-container' to='/'>
//             <CrwnLogo className='logo'/>
//                 </Link>

//                 <div classname='nav-links-container'>

//                     <Link classname='nav-link' to='/shop'>
//                     SHOP

//                     </Link>

//                     <Link classname='nav-link' to='/auth'>
//                     SIGN-IN

//                     </Link>

                                
//                 </div>
                
                
//             </div>
//             <Outlet/>
            
//         </Fragment>
        
//     )
// }
// export default Navigation;

// 

import { Fragment,useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { userContext } from '../../contexts/user.cotext';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../utils/firebase/firebase';


const Navigation = () => {
    const {currentUser,setCurrentUser}=useContext(userContext);
    console.log(currentUser);

    const signOutHandler =async ()=>{
        const res =await signOutUser();
        setCurrentUser(null);
        console.log(res);
    }
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {
            currentUser ? (<span className='nav-link' onClick={signOutHandler} >SIGN OUT</span>)
            :(
          
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
            )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;