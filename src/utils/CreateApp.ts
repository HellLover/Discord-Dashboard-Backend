import express, { Express } from "express";
import routes from "../routes";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import store from "connect-mongo";
require("../strategies/discord");

export function createApp(): Express {
    const app = express();
    
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cors({ origin: ["http://localhost:3000"], credentials: true }))
    app.use(
        session({
           secret: "YouHave0IQ", // Change this
           resave: false,
           saveUninitialized: false,
           cookie: { maxAge: 60 * 60 * 24 * 7 * 1000 }, // 1 week
           store: store.create({ mongoUrl: `${process.env.MONGODB_URL}` })
        })
    )
    app.use(passport.initialize());
    app.use(passport.session());
    
    app.use('/api', routes);

    return app;
}
