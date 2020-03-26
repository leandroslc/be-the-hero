import { Request, Response } from 'express';
import data from '../data/ngos';

export default {
  async create(request: Request, response: Response) {
    const { id } = request.body;

    const ngo = await data.findById(id, 'name');

    if (!ngo) {
      return response.status(400).json({ error: 'No organization found with the given ID' });
    }

    return response.json(ngo);
  },
}
