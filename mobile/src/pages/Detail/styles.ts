import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 48,
  },

  incident: {
    marginBottom: 16,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  incidentProperty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414d',
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 15,
    color: '#737380',
  },

  contactBox: {
    marginBottom: 16,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#13131a',
  },

  heroDescription: {
    marginTop: 16,
    fontSize: 15,
    color: '#737380',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#e02041',
  },

  actionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
