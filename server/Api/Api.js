import express from 'express';
import * as ROUTES from '../../app/constants/API';

const router = express.Router();

router.post(ROUTES.GET_PAGE, function(req, res) {
    res.send('waaaaaattttt');
});


export default router;
