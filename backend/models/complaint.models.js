import mongoose from "mongoose";

const complaintSchema = mongoose.Schema(
  {
    message: String,
    category : String,
  },
  { timestamps: true },
);

const Compaint = mongoose.model("Complaint", complaintSchema);

export default Compaint;