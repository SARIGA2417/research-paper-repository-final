const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    abstract: {
      type: String,
      required: true,
    },

    authors: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    keywords: {
      type: String,
    },

    pdfFile: {
      type: String,
      required: true,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Paper", paperSchema);