import express from 'express';
import baseRoute from './base.route.js';
import {
    roleBasedAccessControl,
    routeProtection
} from '#middlewares/authMiddleware.js';

const router = express.Router();

router.use('/base', routeProtection, baseRoute);


export default router;
