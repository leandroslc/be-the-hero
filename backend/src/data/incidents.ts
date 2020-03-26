import connection from './connection';
import Incident from '../models/incident';
import NGO from '../models/ngo';

const incidents = () => connection('incidents');

export default {
  async insert(ngo: Incident) {
    return await incidents().insert(ngo);
  },

  async getAll() {
    return await incidents().select('*') as Incident[];
  },

  async getAllFromNGO(ngo: NGO) {
    return await incidents()
      .where('ngo_id', ngo.id)
      .select('*');
  },

  async findById(id: any, ...props: string[]) {
    return await incidents()
      .where('id', id)
      .select(props)
      .first() as Incident;
  },

  async delete(incident: Incident) {
    await incidents().where('id', incident.id).delete();
  },
};
