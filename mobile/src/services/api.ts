import axios from 'axios';
import { IP } from 'react-native-dotenv'

const api = axios.create({
  baseURL: `http://${IP}:3333`,
});

export default api;
