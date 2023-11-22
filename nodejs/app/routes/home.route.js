import express from 'express';

const router = express.Router();

const time = new Date();

router.get('/', (req, res, next) => {
    return res.json({
        message: 'Server is running...',
        deployTime: time,
        env: process.env.NODE_ENV,
        CICD: process.env.CI_CD
    });
});

export default router;
