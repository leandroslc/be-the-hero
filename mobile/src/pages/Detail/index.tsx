import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  Linking
} from 'react-native';
import Incident from '@be-the-hero/core/models/incident';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = (route.params as { incident: Incident }).incident;
  const incidentFormattedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL' })
  .format(incident.value);

  const message = `Olá ${incident.ngo.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${incidentFormattedValue}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.ngo.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.ngo.whatsapp}&text=${message}`);
  }

  function IncidentItem(props: { title: string, value: string, style?: StyleProp<TextStyle> }) {
    return (
      <>
        <Text style={styles.incidentProperty}>{props.title}:</Text>
        <Text style={[styles.incidentValue, props.style]}>{props.value}</Text>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <TouchableOpacity onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color="#e02041" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <IncidentItem title="ONG" value={`${incident.ngo.name} de ${incident.ngo.city} - ${incident.ngo.uf}`} />
          <IncidentItem title="CASO" value={incident.title} />
          <IncidentItem title="DESCRIÇÃO" value={incident.description} />
          <IncidentItem style={{ marginBottom: 0 }}
            title="VALOR"
            value={incidentFormattedValue}
          />
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
