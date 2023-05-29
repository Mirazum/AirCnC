import React from 'react';
import { Link } from 'react-router-dom';
import logoimg  from '../../../assets/images/logo.png'

const Logo = () => {
    return (
      <Link to='/'><img  className=" hidden md:block" src={logoimg} alt="logo"  width='100' height='100'/></Link>
    );
};

export default Logo;