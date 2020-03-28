import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Logo from '../../components/Logo';

function Register() {
  return (
    <div className="page-container">
      <section className="page-container-card">
        <aside className="page-aside">
          <Logo />
          <h1 className="page-title">Cadastro</h1>
          <p className="page-text">Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="link" to="/">
            <FiArrowLeft className="link-icon" aria-hidden="true" />
            Já tenho cadastro
          </Link>
        </aside>
        <form className="page-form">
          <input className="page-form-item input" type="text" placeholder="Nome da ONG" />
          <input className="page-form-item input" type="email" placeholder="E-mail" />
          <input className="page-form-item input" type="text" placeholder="Whatsapp" />
          <div className="page-form-item input-group">
            <input className="input" type="text" placeholder="Cidade" />
            <input className="input" type="text" placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="page-form-item button -big" type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  );
}

export default Register;
