import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/nav.css';

function Nav() {
  
    return (
      <>
        <header>
            <img src={logo}/>
            <div>
                <ul>
                    <li><Link to='/' className={'link'}>Home</Link></li>
                    <li><Link to='/AppOrig' className={'link'}>Original App</Link></li>
                </ul>
            </div>    
        </header>
      </>
    )
  }
  
  export default Nav