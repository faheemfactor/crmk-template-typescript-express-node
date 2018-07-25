import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import logger from "./util/logger";
import dotenv from "dotenv";
// import flash from "express-flash";
import path from "path";
import expressValidator from "express-validator";
import bluebird from "bluebird";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });


// Create Express server
const app = express();

// Controllers (route handlers)
import { homeController } from "./controllers/home";
app.use("/welcome", homeController);

// Express configuration
app.set("port", process.env.PORT || 3000);
// app.set("views", path.join(__dirname, "../views"));
// app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: SESSION_SECRET,
//   store: new MongoStore({
//     url: mongoUrl,
//     autoReconnect: true
//   })
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController);

/**
 * API examples routes.
 */

/**
 * OAuth authentication routes. (Sign in)
 */

export default app;