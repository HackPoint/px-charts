import {NextFunction, Router, Request, Response} from 'express';
import * as path from 'path';
import {AuditItemModel} from '../shared/models/audit-item-model';
import * as fs from 'fs';
const db = require('../db/db.json');

export class IndexApiRoute {
  public static create(router: Router) {
    // log
    console.log('[IndexRoute::create] Creating index route.');

    // add ping route
    router.get('/ping', (req: Request, res: Response, next: NextFunction) => {
      new IndexApiRoute().ping(req, res, next);
    });

    router.get('/logs', (req: Request, res: Response, next: NextFunction) => {
      new IndexApiRoute().logs(req, res, next);
    });

    // add home route
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new IndexApiRoute().index(req, res, next);
    });
  }

  public ping(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({'token': 1});
  }

  public logs(req: Request, res: Response, next: NextFunction) {
    try {
      const logs: AuditItemModel[] = db;
      if (logs.length > 0) {
        res.status(200);
        res.json(logs);
      } else {
        res.status(404);
      }
    } catch (err) {
      res.status(500);
    }
  }

  public index(req: Request, res: Response, next: NextFunction) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }
}
