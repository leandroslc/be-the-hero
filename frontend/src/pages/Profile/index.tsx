import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import Incident from '@be-the-hero/core/models/incident';

import './styles.scss';

import Logo from '../../components/Logo';
import api from '../../services/api';
import session from '../../services/ngoSession';

function Profile() {
  const [incidents, setIncidents] = useState([] as Incident[]);
  const history = useHistory();
  const ngoData = session.get();

  useEffect(getIncidents, [ngoData.id]);

  function getIncidents() {
    api.get('profile', {
      headers: {
        Authorization: ngoData.id,
      },
    }).then((response) => {
      setIncidents(response.data);
    });
  }

  async function handleDeleteIncident(id: number) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ngoData.id,
        },
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch {
      alert('Erro ao deletar caso. Tente novamente.')
    }
  }

  function handleLogout() {
    session.clear();

    history.push('/');
  }

  function IncidentCard(props: { id: number, title: string, description: string, value: number }) {
    return (
      <li className="profile-incident">
        <IncidentCardItem
          title="CASO"
          value={props.title}
        />
        <IncidentCardItem
          title="DESCRIÇÃO"
          value={props.description}
        />
        <IncidentCardItem
          title="VALOR"
          value={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.value)}
        />
        <button
          className="profile-incident-remove"
          type="button"
          onClick={() => handleDeleteIncident(props.id)}>
          <FiTrash2 size="20" />
        </button>
      </li>
    );
  }

  function IncidentCardItem(props: { title: string, value: string }) {
    return (
      <>
        <strong className="profile-incident-label">{props.title}:</strong>
        <p className="profile-incident-text">{props.value}</p>
      </>
    );
  }

  let incidentsList;

  if (incidents.length > 0) {
    incidentsList = (
      <ul className="profile-incidents">
        {incidents.map(incident => (
          <IncidentCard
            key={incident.id}
            id={incident.id}
            title={incident.title}
            description={incident.description}
            value={incident.value}
          />
        ))}
      </ul>
    );
  } else {
    incidentsList = (
      <span className="profile-empty">Não há nenhum caso ainda..</span>
    );
  }

  return (
    <div className="profile-container">
      <header className="profile-header">
        <Logo className="profile-header-logo" />
        <span className="profile-header-text">Bem vinda, {ngoData.name}</span>
        <div className="profile-header-right">
          <Link className="button" to="/incidents/new">
            Cadastrar novo caso
          </Link>
          <button className="profile-header-exit button-outline" onClick={handleLogout}>
            <FiPower className="button-icon" size="18" aria-hidden="true" />
          </button>
        </div>
      </header>
      <h1 className="profile-title">Casos cadastrados</h1>
      {incidentsList}
    </div>
  );
}

export default Profile;
