import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Incident from '@be-the-hero/core/models/incident';

import Logo from '../../components/Logo';
import api from '../../services/api';
import session from '../../services/ngoSession';

function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();
  const ngoData = session.get();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const incident = {
      title,
      description,
      value: parseFloat(value),
    } as Incident;

    try {
      await api.post('incidents', incident, {
        headers: {
          Authorization: ngoData.id,
        },
      });
      
      history.push('/profile');
    } catch {
      alert('Erro ao cadastrar o caso. Tente novamente.');
    }
  }

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
        <form className="page-form" onSubmit={handleSubmit}>
          <input
            className="page-form-item input"
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            className="page-form-item input"
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            className="page-form-item input"
            type="number"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="page-form-item button -big" type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  );
}

export default NewIncident;
