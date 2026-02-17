import express from "express";
import * as controller from "../controller/complaints.controller.js"
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", controller.addComplaint);

router.get("/", authMiddleware, controller.getComplaints)

export default router;