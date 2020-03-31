import Router from 'express-promise-router';
import { doSomethingWithUser } from './ctrl';

const router = Router();

router.get('/user/:id', doSomethingWithUser);

export default router;