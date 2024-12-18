// Kanbas/Enrollments/routes.js
import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  // Get all enrollments
  app.get("/api/enrollments", (req, res) => {
    try {
      const enrollments = dao.findAllEnrollments();
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Create enrollment
  app.post("/api/users/:userId/enrollments/:courseId", (req, res) => {
    try {
      const enrollment = dao.createEnrollment({
        user: req.params.userId,
        course: req.params.courseId,
      });
      res.json(enrollment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Delete enrollment
  app.delete("/api/users/:userId/enrollments/:courseId", (req, res) => {
    try {
      const status = dao.deleteEnrollment(
        req.params.userId,
        req.params.courseId
      );
      res.json(status);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get user enrollments
  app.get("/api/users/:userId/enrollments", (req, res) => {
    try {
      const enrollments = dao.findEnrollmentsByUser(req.params.userId);
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}
