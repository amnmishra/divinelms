import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const teacherRes = await axios.get(
        "http://localhost:4010/api/admin/teachers",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTeachers(teacherRes.data);
    } catch (error) {
      console.error("Error fetching teachers", error.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Teachers</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Teacher ID</th>
              <th className="py-2 px-4 border">Subjects</th>
              <th className="py-2 px-4 border">Grade</th>
              <th className="py-2 px-4 border">Academic Year</th>
              <th className="py-2 px-4 border">Contact</th>
              <th className="py-2 px-4 border">Address</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {teachers.length > 0 ? (
              teachers.map((teacher, index) => (
                <tr key={teacher._id} className="text-center">
                  <td className="py-1 px-2 border">{index + 1}</td>
                  <td className="py-1 px-2 border">
                    {teacher.firstName} {teacher.middleName || ""} {teacher.lastName}
                  </td>
                  <td className="py-1 px-2 border">{teacher.email}</td>
                  <td className="py-1 px-2 border">{teacher.teacherId}</td>
                  <td className="py-1 px-2 border">
                    {teacher.subjects?.join(", ")}
                  </td>
                  <td className="py-1 px-2 border">{teacher.grade}</td>
                  <td className="py-1 px-2 border">{teacher.academicYear}</td>
                  <td className="py-1 px-2 border">{teacher.contact}</td>
                  <td className="py-1 px-2 border">{teacher.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-500">
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ManageTeachers;
