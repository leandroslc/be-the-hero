import { Request, Response } from 'express';
import NGO from '@be-the-hero/core/models/ngo';
import data from '../data/ngos';
import { generateUniqueId } from '../utils';

export default {
  async index(_request: Request, response: Response) {
    const ngos = await data.getAll();

    return response.json(ngos);
  },

  async create(request: Request, response: Response) {
    const ngo : NGO = { ...request.body };

    ngo.id = generateUniqueId();
    
    await data.insert(ngo);
    
    return response.json({
      id: ngo.id
    });
  },
};
