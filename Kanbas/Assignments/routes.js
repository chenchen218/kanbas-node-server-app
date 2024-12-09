import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Find all assignments for a course
  app.get("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  });

  // Find assignment by ID
  app.get("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const assignment = await dao.findAssignmentById(aid);
    res.json(assignment);
  });

  // Create assignment
  app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignment = await dao.createAssignment({
      ...req.body,
      course: cid,
    });
    res.json(assignment);
  });

  // Update assignment
  app.put("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await dao.updateAssignment(aid, req.body);
    res.json(status);
  });

  // Delete assignment
  app.delete("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await dao.deleteAssignment(aid);
    res.json(status);
  });
}
