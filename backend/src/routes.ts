import { Router } from 'express';
import NGOController from './controllers/NGOController';

const routes = Router();

routes.get('/ngos', NGOController.index);
routes.post('/ngos', NGOController.create);

export default routes;
