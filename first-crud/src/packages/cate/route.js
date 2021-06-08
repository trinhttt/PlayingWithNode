import { Router } from 'express';
//change it
// import HomCtrl from '../controllers/home';

const router = new Router();

router.get('/', (req, res) => {
    // change it, call from controller, dont do like this
    console.log(1)
});

export default router;
