import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import cors from "cors";
import express from "express";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import "dotenv/config";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";
import mongoose from "mongoose";

// const CONNECTION_STRING =
//   process.env.MONGO_CONNECTION_STRING ||
//   "mongodb://127.0.0.1:27017/kanbas-cs5610-fa24";
// mongoose.connect(CONNECTION_STRING);

const MONGODB_ATLAS_URI = process.env.MONGODB_ATLAS_URI;
const LOCAL_DB_URI = "mongodb://127.0.0.1:27017/kanbas-cs5610-fa24";

// Connect to MongoDB Atlas in production, local MongoDB in development
const CONNECTION_STRING =
  process.env.NODE_ENV === "production" ? MONGODB_ATLAS_URI : LOCAL_DB_URI;

// Add connection options and error handling
mongoose
  .connect(CONNECTION_STRING)
  .then(() =>
    console.log(
      "Connected to MongoDB:",
      process.env.NODE_ENV === "production" ? "Atlas" : "Local"
    )
  )
  .catch((err) => console.log("MongoDB Connection Error:", err));

const app = express();
// Allow both local development and Netlify URLs
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      process.env.NETLIFY_URL,
      "https://a5--kanbas-react-web-app-cs5610-chen.netlify.app",
      "https://a6--kanbas-react-web-app-cs5610-chen.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
app.listen(process.env.PORT || 4000);
