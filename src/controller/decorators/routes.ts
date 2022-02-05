import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { Method } from './Methods';

interface RouteHandlerDescripter extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescripter) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Method.get);
export const put = routeBinder(Method.put);
export const post = routeBinder(Method.post);
export const patch = routeBinder(Method.patch);
export const del = routeBinder(Method.del);
