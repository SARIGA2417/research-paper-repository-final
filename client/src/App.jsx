import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
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
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<BrowsePapers />} />
      <Route path="/paper/:id" element={<PaperDetails />} />
      
      <Route
  path="/upload"
  element={
    <ProtectedRoute>
      <UploadPaper />
    </ProtectedRoute>
  }
/>
<Route
  path="/upload/:id"
  element={
    <ProtectedRoute>
      <UploadPaper />
    </ProtectedRoute>
  }
/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      <Route
  path="/mypapers"
  element={
    <ProtectedRoute>
      <MyPapers />
    </ProtectedRoute>
  }
/>
      <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
     <Route
  path="/saved"
  element={
    <ProtectedRoute>
      <SavedPapers />
    </ProtectedRoute>
  }
/>
     <Route
  path="/downloads"
  element={
    <ProtectedRoute>
      <DownloadedPapers />
    </ProtectedRoute>
  }
/>
      <Route
  path="/notifications"
  element={
    <ProtectedRoute>
      <Notifications />
    </ProtectedRoute>
  }
/>
      <Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
      

    </Routes>
    </>
    
  );
}

export default App;