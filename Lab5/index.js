import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./workingWithObjects.js";
import WorkingWithArray from "./workingWithArray.js";
export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5, changed by me 1");
  });
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArray(app);
}
