import express, { Request, Response } from 'express';
// import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import './controller/LoginController';
import './controller/RootController';
import { AppRouter } from './AppRouter';

const app = express();
// app.use(express.json()); // Used to parse JSON bodies
// app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
// or

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies using qs library
app.use(cookieSession({ keys: ['random'] }));
// app.use(router);
app.use(AppRouter.getInstance());

app.listen(5000, () => {
  console.log('listening on port 5000');
});
