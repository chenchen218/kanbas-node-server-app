import * as dao from "./dao.js";

function AssignmentRoutes(app) {
  app.get("/api/assignments", async (req, res) => {
    const assignments = await dao.findAllAssignments();
    res.json(assignments);
  });

  app.get("/api/assignments/:id", async (req, res) => {
    const assignment = await dao.findAssignmentById(req.params.id);
    res.json(assignment);
  });

  app.post("/api/assignments", async (req, res) => {
    const newAssignment = await dao.createAssignment(req.body);
    res.json(newAssignment);
  });

  app.put("/api/assignments/:id", async (req, res) => {
    const status = await dao.updateAssignment(req.params.id, req.body);
    res.json(status);
  });

  app.delete("/api/assignments/:id", async (req, res) => {
    const status = await dao.deleteAssignment(req.params.id);
    res.json(status);
  });
}

export default AssignmentRoutes;
