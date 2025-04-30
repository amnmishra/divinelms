import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentDetails from "./StudentDetails";

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const studentRes = await axios.get(
        "http://localhost:4010/api/admin/students",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setStudents(studentRes.data);
    } catch (error) {
      console.error("Error fetching students", error.message);
    }
  };

  const handleDelete = (student) => {
    setUserToDelete(student);
  };

  const confirmDelete = async () => {
    if (!userToDelete) return;

    try {
      await axios.delete(
        `http://localhost:4010/api/admin/delete/student/${userToDelete._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUserToDelete(null);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting student", error.message);
    }
  };

  const cancelDelete = () => {
    setUserToDelete(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8">Manage Students</h2>

      {/* ✅ Pass all students to StudentDetails at once */}
      <StudentDetails
        students={students}
        onDelete={handleDelete}
        onEdit={(student) => console.log("Edit student:", student)}
        onUpdate={(student) => console.log("Update student:", student)}
      />

      {/* Delete Confirmation Modal */}
      {userToDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] shadow-xl text-center">
            <h3 className="text-lg font-bold mb-4">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStudents;
