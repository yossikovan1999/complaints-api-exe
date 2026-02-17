import Complaint from "../models/complaint.models.js";
import AppError from "../errors/app.errors.js"

//===========================================
//              addComplaint
//===========================================
export async function addComplaint(message, category) {
  try {
    const complaint = new Complaint({ message, category });
    await complaint.save();
  } catch (error) {
    throw new AppError("Error occured when adding complaint.", 400);
  }
}

//===========================================
//              getComplaints
//===========================================
export async function getComplaints() {
  try {
    const complaints = await Complaint.find({});
    return complaints;
  } catch (error) {
    throw new AppError("Error occured when fetching complaints from the database.", 501);
  }
}
