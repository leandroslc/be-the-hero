import { Router } from 'express';
import NGOController from './controllers/NGOController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = Router();

routes.post('/sessions', SessionController.create);

routes.get('/ngos', NGOController.index);
routes.post('/ngos', NGOController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

export default routes;
