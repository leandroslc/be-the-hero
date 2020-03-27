import Incident from '@be-the-hero/core/models/incident';
import NGO from '@be-the-hero/core/models/ngo';
import connection from './connection';

const incidents = () => connection('incidents');

export default {
  async insert(ngo: Incident) {
    return await incidents().insert(ngo);
  },

  async getAll(page: number, limit: number) {
    const result = await incidents()
      .join('ngos', 'ngos.id', 'incidents.ngo_id')
      .limit(limit)
      .offset((page - 1) * limit)
      .select('incidents.*', {
        ngo_name: 'ngos.name',
        ngo_email: 'ngos.email',
        ngo_whatsapp: 'ngos.whatsapp',
        ngo_city: 'ngos.city',
        ngo_uf: 'ngos.uf'
      });

    return result.map((item) => <Incident>{
      id: item.id,
      title: item.title,
      description: item.description,
      value: item.value,
      ngo_id: item.ngo_id,
      ngo: {
        name: item.ngo_name,
        email: item.ngo_email,
        whatsapp: item.ngo_whatsapp,
        city: item.ngo_city,
        uf: item.ngo_uf,
      },
    });
  },

  async getAllFromNGO(ngo: NGO) {
    return await incidents()
      .where('ngo_id', ngo.id)
      .select('*') as Incident[];
  },

  async count() {
    const [count] = await incidents().count();

    return count['count(*)'] as number;
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
