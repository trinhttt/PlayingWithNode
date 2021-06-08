import { Router } from 'express';
import {
    cateRoute,
} from './routes';

export default () => {
    const api = Router();

    // api.use('*', authenticator)
    api.use('/cate', cateRoute);

    return api;
}
