"use strict";
// import { Router, Request, Response, NextFunction } from 'express';
// interface RequestWithBody extends Request {
//   body: { [key: string]: string | undefined };
// }
// function requiredAuth(req: Request, res: Response, next: NextFunction): void {
//   if (req.session && req.session.loggedIn) {
//     next();
//     return;
//   }
//   res.status(403).send('Not permited');
// }
// const router = Router();
// router.get('/login', (req: Request, res: Response) => {
//   res.send(`
//  <form method="POST">
//   <div><label for="email">Email</label><input type="email" name="email"></div>
//   <div><label for="password">Password</label><input type="password" name="password"></div>
//   <button>Submit</button>
// </form>
//  `);
// });
// router.post('/login', (req: RequestWithBody, res: Response) => {
//   const { email, password } = req.body;
//   if (email && password && email === 'test@test.com' && password === '123') {
//     req.session = { loggedIn: true };
//     res.redirect('/');
//   } else {
//     res.send('invalid email or password');
//   }
// });
// router.get('/', (req: Request, res: Response) => {
//   if (req.session && req.session.loggedIn) {
//     res.send(`
//     <div>
//       <div>Your are logged in</div>
//       <a href="/logout">Logout</a>
//     </div>
// `);
//   } else {
//     res.send(`
//     <div>
//       <div>Your are not logged in</div>
//       <a href="/login">Login</a>
//     </div>
// `);
//   }
// });
// router.get('/logout', (req: Request, res: Response) => {
//   req.session = undefined;
//   res.redirect('/');
// });
// router.get('/protected', requiredAuth, (req: Request, res: Response) => {
//   res.send('Welcome to protected route');
// });
// export { router };
