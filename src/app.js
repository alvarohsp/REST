import express, { response } from 'express';
import logger from 'morgan';

import AulaRouter from './routes/aula.route';
import HackathonRouter from './routes/hackathon.route';

class App {

    constructor() {
        this.app = express();
        this.initMiddleware();
        this.routes();
        this.endMiddleware();
    }

    initMiddleware() {
        this.app.use(express.json());
        this.app.use(logger('dev', {}));
    }

    routes() {
        this.app.use('/stefanini', HackathonRouter);
        this.app.use('/stefanini', AulaRouter);

    }

    endMiddleware() {
        this.app.use((err, req, res, next) => {
            if (err) {
                res.status(400).json({
                    mensagem: err.message,
                    status: 400,
                });
            }
            next();
        })
    }
}

export default new App().app;