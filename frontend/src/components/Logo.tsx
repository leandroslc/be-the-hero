import React from 'react';
import logoImg from '../assets/logo.svg';

function Logo(props : any) {
  return (
    <img src={logoImg} alt="Be the hero" {...props} />
  );
}

export default Logo;
