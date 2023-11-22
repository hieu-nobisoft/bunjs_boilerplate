import express from 'express';
import env from 'dotenv';
import logger from "#logger";

// IMPORT DB CONNECTION
import mongodbConnection from './config/db.js';

// IMPORT ALL MIDDILEARES
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

//IMPORT ALL ROUTES
import PrivateRouter from './routes/private/index.js';
import PublicRouter from './routes/public/index.js';
import homeRoute from './routes/home.route.js';

// IMPORTS ALL CUSTOM MIDDLEWARES
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
function main() {

    const app = express();
    env.config();

    // SETUP ALL MIDDLEWARES
    app.use(morgan('dev'));
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    // MONGO DB CONNECTION,
    mongodbConnection();

    // DEFINE ALL ROUTES ENTRY POINTS
    app.use('/', homeRoute);
    app.use('/public', PublicRouter);
    app.use('/private', PrivateRouter);

    // SETUP ALL CUSTOM MIDDLEWARES
    app.use(notFound);
    app.use(errorHandler);
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    // Server Listen
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        logger.info(`Server is listening on port ${PORT}`);
    });
}
export default main;
