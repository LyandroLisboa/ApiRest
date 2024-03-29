import dotenv from 'dotenv';
import { resolve } from 'path';

import './database';

import express from 'express';
import homeRoutes from './routes/homeRotes';
import tokenRoutes from './routes/tokenRotes';
import alunoRoutes from './routes/AlunoRotes';
import userRoutes from './routes/userRotes';
import photoRoutes from './routes/photoRotes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/photograph/', photoRoutes);
  }
}

export default new App().app;
