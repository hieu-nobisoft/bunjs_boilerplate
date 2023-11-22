import express from 'express';
import baseRoute from './base.route.js';
const router = express.Router();

router.use('/base', baseRoute);

export default router;
