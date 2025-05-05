import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  name: {
    type: String, required: true,
    unique: true 
  },
  description: {
    type: String 
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date }
}, { timestamps: true });

export default mongoose.model("Permission", permissionSchema);
