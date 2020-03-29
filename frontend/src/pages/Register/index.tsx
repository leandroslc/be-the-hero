import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import NGO from '@be-the-hero/core/models/ngo';

import Logo from '../../components/Logo';
import api from '../../services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const ngo = {
      name,
      email,
      whatsapp,
      city,
      uf,
    } as NGO;

    try {
      const response = await api.post('ngos', ngo);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch {
      alert('Erro no cadastro. Tente novamente');
    }
  }

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
        <form className="page-form" onSubmit={handleSubmit}>
          <input
            className="page-form-item input"
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="page-form-item input"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="page-form-item input"
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="page-form-item input-group">
            <input
              className="input"
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="UF"
              maxLength={2}
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className="page-form-item button -big" type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  );
}

export default Register;
