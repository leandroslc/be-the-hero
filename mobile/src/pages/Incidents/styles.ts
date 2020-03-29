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
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    marginTop: 48,
    marginBottom: 16,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#13131a',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  incidentsList: {
    marginTop: 32,
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

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e02041',
  },
});
