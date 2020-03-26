import { Request, Response } from 'express';
import data from '../data/incidents';
import Incident from '../models/incident';

export default {
  async index(_request: Request, response: Response) {
    const incidents = await data.getAll();

    response.json(incidents);
  },

  async create(request: Request, response: Response) {
    const incident: Incident = { ...request.body };

    incident.ngo_id = request.headers.authorization!;

    const [id] = await data.insert(incident);

    return response.json({ id });
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const ngo_id = request.headers.authorization!;
    
    const incident = await data.findById(id, 'ngo_id');

    if (incident.ngo_id !== ngo_id) {
      return response.status(401).json({ error: 'Operation not allowed' });
    }

    return response.status(204).send();
  }
}
