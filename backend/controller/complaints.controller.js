import * as complaintService from "../services/complaints.service.js";
import AppError from "../errors/app.errors.js";

//===========================================
//           addComplaint (post)
//===========================================
export async function addComplaint(req, res, next) {
  try {
    const { message, category } = req.body;

    if(!category || !message){
       throw new AppError("must provide a message and a category", 401);
    }

    await complaintService.addComplaint(message, category);
    return res.status(201).json({message : "Complaint added successfully."})
  } catch (error) {
    next(error);
  }
}

//===========================================
//      getComplaint (get) - ADMIN ONLY!
//===========================================
export async function getComplaints(req, res, next) {
  try {
    const complaints = await complaintService.getComplaints();
    return res.status(201).json({complaints});
  } catch (error) {
    next(error);
  }
}