const Paper = require("../models/Paper");

// Upload Paper
const uploadPaper = async (req, res) => {
  try {
    const {
      title,
      abstract,
      authors,
      category,
      keywords,
    } = req.body;

    // Check if PDF is uploaded
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a PDF file",
      });
    }

    // Create Paper
    const paper = await Paper.create({
      title,
      abstract,
      authors,
      category,
      keywords,
      pdfFile: req.file.path,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      message: "Paper uploaded successfully",
      paper,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  uploadPaper,
};