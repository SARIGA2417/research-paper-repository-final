import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import BrowsePapers from "./pages/BrowsePapers/BrowsePapers";
import PaperDetails from "./pages/PaperDetails/PaperDetails";
import UploadPaper from "./pages/UploadPaper/UploadPaper";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import MyPapers from "./pages/MyPapers/MyPapers";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import NotFound from "./pages/NotFound/NotFound";
import SavedPapers from "./pages/SavedPapers/SavedPapers";
import DownloadedPapers from "./pages/DownloadedPapers/DownloadedPapers";
import Notifications from "./pages/Notifications/Notifications";
import Settings from "./pages/Settings/Settings";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<BrowsePapers />} />
      <Route path="/paper" element={<PaperDetails />} />
      <Route path="/upload" element={<UploadPaper />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mypapers" element={<MyPapers />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/saved" element={<SavedPapers />} />
      <Route path="/downloads" element={<DownloadedPapers />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
      

    </Routes>
    </>
  );
}

export default App;