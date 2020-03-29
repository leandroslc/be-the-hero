import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import Joi from '@hapi/joi';

import NGOController from './controllers/NGOController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = Router();

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
}), SessionController.create);

routes.get('/ngos', NGOController.index);

routes.post('/ngos', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().regex(/[0-9\-+\s]+/),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }),
}), NGOController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}), IncidentController.index);

routes.post('/incidents', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), IncidentController.delete);

export default routes;
