import React from 'react'
import { ReactDOM } from 'react'
import {Fragment} from 'react'
import { Outlet ,Link} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

import './styles.css';

const Navigation=()=>{
    return(
       
        <Fragment>
            <div className='navigation'>
                <Link classname='logo-container' to='/'>
            <CrwnLogo className='logo'/>
                </Link>

                <div classname='nav-links-container'>

                    <Link classname='nav-link' to='/shop'>
                    SHOP

                    </Link>

                    <Link classname='nav-link' to='/sign-in'>
                    SIGN-IN

                    </Link>

                </div>
                
                <Outlet/>
            </div>
            
        </Fragment>
        
    )
}
export default Navigation;