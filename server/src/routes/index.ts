import {Router, Request, Response} from 'express';
import auth from './auth';
import user from './user';
import {checkJwt} from '../middlewares/checkJwt';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', [checkJwt], user);

export default routes;
