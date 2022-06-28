import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navBar'>
      <div className='navBar__header'>
        <div className='navBar__name'>
          <img className='about__logo' src={require('./logoL2.png')} alt='' />
        </div>

        <ul className='navBar__ul' >
          <li className='navBar__li'>
            <Link to="/" style={{ textDecoration: 'inherit', color: 'inherit' }}>About</Link>
          </li>
          {/* <li className='navBar__li'>
            <Link to="/services" style={{ textDecoration: 'inherit', color: 'inherit' }}>Services</Link>
          </li> */}
          <li className='navBar__li'>
            <Link to="/contact" style={{ textDecoration: 'inherit', color: 'inherit' }}>Contact</Link>
          </li>
          <li className='navBar__li'>
            <Link to="/resources" style={{ textDecoration: 'inherit', color: 'inherit' }}>Resources</Link>
          </li>

        </ul>
      </div>

      
      <div className='navBar__footer'>
        <p>Bikkur Cholim of Providence | 
          401-996-4292</p>
      </div>
    </div>
  )
}

export default NavBar