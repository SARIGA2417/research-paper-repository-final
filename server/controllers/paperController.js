const Paper = require("../models/Paper");
const User = require("../models/User");

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

    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a PDF file",
      });
    }

    const paper = await Paper.create({
      title,
      abstract,
      authors,
      category,
      keywords,
      pdfFile: req.file.filename,
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

// Get All Papers
const getAllPapers = async (req, res) => {
  try {
    const papers = await Paper.find();

    res.status(200).json(papers);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Get Single Paper
const getPaperById = async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        message: "Paper not found",
      });
    }

    res.status(200).json(paper);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Get My Papers
const getMyPapers = async (req, res) => {
  try {
    const papers = await Paper.find({
      uploadedBy: req.user.id,
    });

    res.status(200).json(papers);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Update Paper
const updatePaper = async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        message: "Paper not found",
      });
    }

    if (paper.uploadedBy.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    const updatedPaper = await Paper.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedPaper);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Delete Paper
const deletePaper = async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        message: "Paper not found",
      });
    }

    if (paper.uploadedBy.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    await Paper.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Paper deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Download Paper
const downloadPaper = async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        message: "Paper not found",
      });
    }

    res.download(`uploads/${paper.pdfFile}`);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Save Paper
const savePaper = async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        message: "Paper not found",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user.savedPapers.includes(paper._id)) {
      user.savedPapers.push(paper._id);
      await user.save();
    }

    res.status(200).json({
      message: "Paper saved successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Get Saved Papers
const getSavedPapers = async (req, res) => {
  try {

    const user = await User.findById(req.user.id)
      .populate("savedPapers");

    res.status(200).json(user.savedPapers);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};
// Remove Saved Paper
const removeSavedPaper = async (req, res) => {
  try {

    const user = await User.findById(req.user.id);

    user.savedPapers = user.savedPapers.filter(
      (paper) =>
        paper.toString() !== req.params.id
    );

    await user.save();

    res.status(200).json({
      message: "Paper removed successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};
// Get Downloaded Papers
const getDownloadedPapers = async (req, res) => {
  try {

    const user = await User.findById(req.user.id)
      .populate("downloadedPapers");

    res.status(200).json(user.downloadedPapers);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};


// Add Downloaded Paper
const addDownloadedPaper = async (req, res) => {
  try {
    console.log("Download endpoint called");

    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        message: "Paper not found",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user.downloadedPapers.includes(paper._id)) {
      user.downloadedPapers.push(paper._id);
      await user.save();
    }

    res.status(200).json({
      message: "Paper added to Downloads",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};
// Admin - Get All Papers
const getAllPapersAdmin = async (req, res) => {
  try {
    const papers = await Paper.find().populate(
      "uploadedBy",
      "name email"
    );

    res.status(200).json(papers);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Approve Paper
const approvePaper = async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        message: "Paper not found",
      });
    }

    paper.status = "Approved";

    await paper.save();

    res.status(200).json({
      message: "Paper approved successfully",
      paper,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Reject Paper
const rejectPaper = async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);

    if (!paper) {
      return res.status(404).json({
        message: "Paper not found",
      });
    }

    paper.status = "Rejected";

    await paper.save();

    res.status(200).json({
      message: "Paper rejected successfully",
      paper,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Dashboard Statistics
const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalPapers = await Paper.countDocuments();

    const pendingPapers = await Paper.countDocuments({
      status: "Pending",
    });

    const approvedPapers = await Paper.countDocuments({
      status: "Approved",
    });

    const rejectedPapers = await Paper.countDocuments({
      status: "Rejected",
    });

    res.status(200).json({
      totalUsers,
      totalPapers,
      pendingPapers,
      approvedPapers,
      rejectedPapers,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Home Statistics
const getHomeData = async (req, res) => {
  try {

    const totalPapers = await Paper.countDocuments();

    const totalResearchers = await User.countDocuments();

    const recentPapers = await Paper.find({
      status: "Approved",
    })
      .sort({ createdAt: -1 })
      .limit(6);

    const categories = await Paper.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 6,
      },
    ]);

    res.status(200).json({
      totalPapers,
      totalResearchers,
      recentPapers,
      categories,
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
  getAllPapers,
  getPaperById,
  getMyPapers,
  updatePaper,
  deletePaper,
  downloadPaper,
  savePaper,
  getSavedPapers,
  removeSavedPaper,
  getDownloadedPapers,
  addDownloadedPaper,
  getAllPapersAdmin,
  approvePaper,
  rejectPaper,
  getDashboardStats,
  getHomeData,
};