import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    countryName: String,
    countryShortName: String,
    countryCode: String,



    // Common Things Present in All Schema
   
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    createdAtCustom: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    updatedAtCustom: {
        type: Date
    },
    deletedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    deletedAt: {
        type: Date
    }
}, {
    timestamps: true
});

export default mongoose.model("Country", countrySchema);
