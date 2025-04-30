import React, { useEffect } from "react";

const StudentDetails = ({ students, onDelete, onEdit, onUpdate }) => {
    return (
        <div className="p-4">
            {/* Table for md and above */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-sm font-medium text-gray-600 text-center">
                            <th className="px-4 py-2 border">Profile Picture</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Contact</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.length > 0 ? (
                            students.map((student) => (
                                <tr key={student._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">
                                        <div className="flex justify-center">
                                            <img
                                                src={student.profilePicture}
                                                alt="Profile"
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {student.firstName} {student.middleName} {student.lastName}
                                    </td>
                                    <td className="px-4 py-2 border">{student.email}</td>
                                    <td className="px-4 py-2 border">
                                        {student.contact || "Not available"}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                onClick={() => onEdit(student)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() => onEdit(student)}
                                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => onUpdate(student)}
                                                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => onDelete(student)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4">
                                    No students found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Card layout for small screens */}
            <div className="md:hidden space-y-4">
                {students.length > 0 ? (
                    students.map((student) => (
                        <div
                            key={student._id}
                            className="w-full border border-gray-300 rounded-lg p-4 shadow-sm"
                        >
                            <div className="flex items-start space-x-4 mb-4">
                                <img
                                    src={student.profilePicture}
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                                />
                                <div className="flex-1 space-y-1 break-words overflow-hidden">
                                    <p className="font-semibold text-lg break-words">
                                        {student.firstName} {student.middleName} {student.lastName}
                                    </p>
                                    <p className="text-sm text-gray-600 break-words">
                                        {student.email}
                                    </p>
                                    <p className="text-sm text-gray-600 break-words">
                                        {student.contact || "Not available"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => onEdit(student)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                >
                                    View
                                </button>
                                <button
                                    onClick={() => onEdit(student)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onUpdate(student)}
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => onDelete(student)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No students found.</p>
                )}
            </div>

        </div>
    );
};

export default StudentDetails;
