import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.scss';
import heroesImg from '../../assets/heroes.png';

import Logo from '../../components/Logo';
import api from '../../services/api';
import session from '../../services/ngoSession';

function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      session.add({ 
        id,
        name: response.data.name,
      });

      history.push('/profile');
    } catch {
      alert('Falha no login. Tente novamente.');
      setId('');
    }
  }

  return (
    <div className="page-container">
      <section className="logon-form-section">
        <Logo />
        <form className="logon-form" onSubmit={handleSubmit}>
          <h1 className="logon-form-title">
            Faça seu logon
          </h1>
          <input
            className="logon-form-item input"
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
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
