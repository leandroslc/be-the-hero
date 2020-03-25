import { Router } from 'express';

const routes = Router();

routes.get('/test', (request, response) => {
  console.log(request.body);
  
  return response.json();
});

export default routes;
