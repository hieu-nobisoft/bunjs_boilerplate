import express from 'express';
import {
    generateJWT
} from '#controllers/base.controller.js';

const router = express.Router();

// AUTH
router.route('/generateJWT').post(generateJWT);

export default router;
