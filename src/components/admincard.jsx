"use client";
import Image from "next/image";
import React from "react";

const UserCard = ({ response, onUpdateRole, onDeleteUser }) => {
  const [selectedRole, setSelectedRole] = React.useState(response.role || "");

  // Function to map role value to a string
  const getRoleText = (role) => {
    switch (role) {
      case 0:
        return "Role not assigned";
      case 1:
        return "Super Admin";
      case 2:
        return "Admin";
      case 3:
        return "Core Admin";
      default:
        return "Unknown Role";
    }
  };
  return (
    <div className="mt-10 px-6">
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6">
        <div>
          <Image
            className="rounded-full"
            src={response.photoURL}
            width={100}
            height={100}
            alt="User photo"
          />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="text-2xl font-semibold">{response.name}</div>
          <div className="text-gray-600">{response.email}</div>

          {/* Display Role */}
          <div className="text-lg font-medium text-gray-800 mt-2">
            {getRoleText(response.role)}
          </div>
        </div>

        {/* Role Selector */}
        <div className="flex flex-col space-y-4">
          <label className="font-semibold text-gray-700">Assign Role:</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="1">Super Admin</option>
            <option value="2">Admin</option>
            <option value="3">Core Admin</option>
          </select>

          {/* Update Role Button */}
          <button
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            onClick={() => onUpdateRole(response.email, selectedRole)}
          >
            Update Role
          </button>

          {/* Delete User Button */}
          <button
            className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
            onClick={() => onDeleteUser(response.email)}
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
