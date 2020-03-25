import { Request, Response } from 'express';
import crypto from 'crypto';
import data from '../data/ngos';
import NGO from '../models/ngo';

export default {
  async index(_request: Request, response: Response) {
    const ngos = await data.getAll();

    return response.json(ngos);
  },

  async create(request: Request, response: Response) {
    const ngo : NGO = { ...request.body };

    ngo.id = crypto.randomBytes(4).toString("HEX");
    
    await data.insert(ngo);
    
    return response.json({
      id: ngo.id
    });
  },
};
