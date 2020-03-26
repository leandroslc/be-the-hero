import { Request, Response } from 'express';
import incidentsData from '../data/incidents';
import NGO from '../models/ngo';

export default {
  async index(request: Request, response: Response) {
    const ngo_id = request.headers.authorization!;
    const ngo = <NGO>{ id: ngo_id };

    const incidents = await incidentsData.getAllFromNGO(ngo);

    return response.json(incidents);
  },
}
