import connection from './connection';
import NGO from '../models/ngo';

const ngos = () => connection('ngos');

export default {
  async insert(ngo: NGO) {
    await ngos().insert(ngo);
  },

  async getAll() {
    return await ngos().select('*') as NGO[];
  },
};
