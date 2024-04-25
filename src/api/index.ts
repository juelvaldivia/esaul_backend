import express from 'express';
import http, { Server } from 'http';
import Database from '../database/interfaces.ts';
import { welcome } from './routes/welcome.ts';

export default class Api {
  private _database: Database;
  private _apiServer: express.Application;

  constructor(database: Database) {
    this._database = database;
    this._apiServer = express();

    const router = express.Router();
    router.get('/welcome', welcome);

    this._apiServer.use(router);
  }

  get database() {
    return this._database;
  }

  public apiServer(): Server {
    return http.createServer(this._apiServer);
  }
}
