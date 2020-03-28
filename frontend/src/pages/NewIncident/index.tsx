import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Logo from '../../components/Logo';

function NewIncident() {
  return (
    <div className="page-container">
      <section className="page-container-card">
        <aside className="page-aside">
          <Logo />
          <h1 className="page-title">Cadastrar novo caso</h1>
          <p className="page-text">Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="link" to="/profile">
            <FiArrowLeft className="link-icon" aria-hidden="true" />
            Voltar para home
          </Link>
        </aside>
        <form className="page-form">
          <input className="page-form-item input" type="text" placeholder="Título do caso" />
          <textarea className="page-form-item input" placeholder="Descrição" />
          <input className="page-form-item input" type="number" placeholder="Valor em reais" />
          <button className="page-form-item button -big" type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  );
}

export default NewIncident;
