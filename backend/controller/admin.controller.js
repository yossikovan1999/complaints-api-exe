import * as adminService from "../services/admin.service.js";

export function login(req, res, next) {
  try {
    const { password } = req.body;
    const token = adminService.login(password);
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
}
