import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <div className='Head'>
          <Link to='/' className='home'>ГЛАВНАЯ</Link>
          <Link to='/Analyze' className='analyze'>ПРОАНАЛИЗИРОВАТЬ</Link>
    </div>
  )
}
export default Header;
