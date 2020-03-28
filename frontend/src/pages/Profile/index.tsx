import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

import './styles.scss';

import Logo from '../../components/Logo';

function Profile() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <Logo className="profile-header-logo" />
        <span className="profile-header-text">Bem vinda, Teste</span>
        <Link className="profile-header-right button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button className="profile-header-exit button-outline">
          <FiPower className="button-icon" size="18" aria-hidden="true" />
        </button>
      </header>
      <h1 className="profile-title">Casos cadastrados</h1>
      <ul className="profile-incidents">
        <Incident name="Caso de teste" description="Descrição de teste" value="R$ 120,00" />
        <Incident name="Caso de teste" description="Descrição de teste" value="R$ 120,00" />
        <Incident name="Caso de teste" description="Descrição de teste" value="R$ 120,00" />
        <Incident name="Caso de teste" description="Descrição de teste" value="R$ 120,00" />
      </ul>
    </div>
  );
}

function Incident(props: { name: string, description: string, value: string }) {
  return (
    <li className="profile-incident">
      <IncidentItem title="CASO" value={props.name} />
      <IncidentItem title="DESCRIÇÃO" value={props.description} />
      <IncidentItem title="VALOR" value={props.value} />
      <button className="profile-incident-remove" type="button">
        <FiTrash2 size="20" />
      </button>
    </li>
  );
}

function IncidentItem(props: { title: string, value: string }) {
  return (
    <>
      <strong className="profile-incident-label">{props.title}:</strong>
      <p className="profile-incident-text">{props.value}</p>
    </>
  );
}

export default Profile;
