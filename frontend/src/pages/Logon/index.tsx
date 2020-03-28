import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.scss';
import heroesImg from '../../assets/heroes.png';

import Logo from '../../components/Logo';

function Logon() {
  return (
    <div className="page-container">
      <section className="logon-form-section">
        <Logo />
        <form className="logon-form">
          <h1 className="logon-form-title">
            Faça seu logon
          </h1>
          <input className="logon-form-item input" type="text" placeholder="Sua ID" name="" id=""/>
          <button className="logon-form-item button -big" type="submit">Entrar</button>
          <Link className="logon-form-item link" to="/register">
            <FiLogIn className="link-icon" size={16} aria-hidden="true" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <aside>
        <img className="img-fluid" src={heroesImg} alt="Pessoas comuns podem ser heróis"/>
      </aside>
    </div>
  );
}

export default Logon;
