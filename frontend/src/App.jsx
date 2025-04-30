import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";

// Public Pages
import Home from "./components/Home";
import CoursePage from "./pages/CoursePage";

// Auth Pages
import LoginModal from "./pages/authPage/LoginModal";
import RegisterModal from "./pages/authPage/RegisterModal";

// Admin Pages
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import ManageStudents from "./components/admin/ManageStudents";
import ManageTeachers from "./components/admin/Manage/manageTeachers";
import AdminPrivateRoute from "./components/admin/AdminPrivateRoute";

// Student Pages
import StudentDashboard from "./components/Student/Dashboard/StudentDashboard";
import PrivateRoute from "./components/PrivateRoute";

// Student Sidebar Routes
import Attendance from "./components/Student/Attendance";
import Assignment from "./components/Student/Assignment";
import ClassSchedule from "./components/Student/ClassSchedule";
import Grades from "./components/Student/grades";
import LiveClasses from "./components/Student/LiveClasses";
import Messages from "./components/Student/Messages";
import Profile from "./components/Student/Profile";
import MySubjects from "./components/Student/MySubjects"; // My Subjects Page

function App() {
  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<RegisterModal />} />


        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminPrivateRoute>
              <AdminDashboard />
            </AdminPrivateRoute>
          }
        >
          <Route path="manage-students" element={<ManageStudents />}/>
          <Route path="manage-teachers" element={<ManageTeachers />}/>
        </Route>
        

        {/* Student Dashboard and Nested Routes */}
        <Route
          path="/student/dashboard"
          element={
            <PrivateRoute>
              <StudentDashboard student={student} />
            </PrivateRoute>
          }
        >
          <Route path="my-subjects" element={<MySubjects />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="assignments" element={<Assignment />} />
          <Route path="class-schedule" element={<ClassSchedule />} />
          <Route path="grades" element={<Grades />} />
          <Route path="live-classes" element={<LiveClasses />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile-settings" element={<Profile />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
