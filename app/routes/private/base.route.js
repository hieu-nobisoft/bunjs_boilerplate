import express from 'express';
import {
    test,
} from '#controllers/base.controller.js';

const router = express.Router();

router.route('/test').post(test);

export default router;
