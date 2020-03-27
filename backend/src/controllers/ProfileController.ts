import { Request, Response } from 'express';
import NGO from '@be-the-hero/core/models/ngo';
import incidentsData from '../data/incidents';

export default {
  async index(request: Request, response: Response) {
    const ngo_id = request.headers.authorization!;
    const ngo = <NGO>{ id: ngo_id };

    const incidents = await incidentsData.getAllFromNGO(ngo);

    return response.json(incidents);
  },
}
