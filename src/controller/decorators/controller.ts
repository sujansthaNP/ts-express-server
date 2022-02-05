import { NextFunction, Request, RequestHandler, Response } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';
import { Method } from './Methods';
function bodyValidators(keys: string[]): RequestHandler {
  //returns a middleware function
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('invalid request');
      return;
    }
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }
    next();
  };
}
export function controller(routePrefix: string) {
  //constructor decorator defination
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      //loop in object
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Method = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];
      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];
      // ['email', 'password'];

      const validator = bodyValidators(requiredBodyProps); //middleware function
      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        ); //router.get('/auth/login',(req,res)=>{})
      }
    }
  };
}
