import NGO from '@be-the-hero/core/models/ngo';
import connection from './connection';

const ngos = () => connection('ngos');

export default {
  async insert(ngo: NGO) {
    await ngos().insert(ngo);
  },

  async getAll() {
    return await ngos().select('*') as NGO[];
  },

  async findById(id: string, ...props: string[]) {
    return await ngos()
      .where('id', id)
      .select(props)
      .first() as NGO;
  },
};
