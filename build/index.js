"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import { router } from './routes/loginRoutes';
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controller/LoginController");
require("./controller/RootController");
var AppRouter_1 = require("./AppRouter");
var app = (0, express_1.default)();
// app.use(express.json()); // Used to parse JSON bodies
// app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
// or
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded bodies using qs library
app.use((0, cookie_session_1.default)({ keys: ['random'] }));
// app.use(router);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(5000, function () {
    console.log('listening on port 5000');
});
