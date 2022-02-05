import { NextFunction, Request, Response } from 'express';
import { controller, get, use } from './decorators';

function requiredAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send('Not permited');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`
    <div>
      <div>Your are logged in</div>
      <a href="/auth/logout">Logout</a>
    </div>
`);
    } else {
      res.send(`
    <div>
      <div>Your are not logged in</div>
      <a href="/auth/login">Login</a>
    </div>
`);
    }
  }

  @get('/protected')
  @use(requiredAuth)
  getProtected(req: Request, res: Response): void {
    res.send('Welcome to protected route');
  }
}
