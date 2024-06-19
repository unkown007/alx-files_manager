import { Express } from 'express';
import AppController from '../controllers/AppController';


const Routes = (api) => {
    api.get('/status', AppController.getStatus);
    api.get('/stats', AppController.getStats);
};

export default Routes;
