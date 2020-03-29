import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Incident from '@be-the-hero/core/models/incident';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
  const [incidents, setIncidents] = useState([] as Incident[]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(getIncidents, []);

  function navigateToDetail(incident: Incident) {
    navigation.navigate('Detail', { incident });
  }

  function getIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    api.get('incidents', {
      params: { page }
    }).then(response => {
      setIncidents([...incidents, ...response.data]);
      setTotal(response.headers['x-total-items']);
      setPage(page + 1);
      setLoading(false);
    });
  }

  function IncidentItem(props: { title: string, value: string }) {
    return (
      <>
        <Text style={styles.incidentProperty}>{props.title}:</Text>
        <Text style={styles.incidentValue}>{props.value}</Text>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        data={incidents}
        keyExtractor={incident => incident.id.toString()}
        showsVerticalScrollIndicator={true}
        onEndReached={getIncidents}
        onEndReachedThreshold={0.2}
        style={styles.incidentsList}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <IncidentItem title="ONG" value={incident.ngo.name} />
            <IncidentItem title="CASO" value={incident.title} />
            <IncidentItem title="VALOR" value={
              Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(incident.value)} />
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
