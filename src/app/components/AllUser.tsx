import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  profilePic: string;
  isBlocked: boolean;
};

const initialUsers: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    isBlocked: false,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "User",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    isBlocked: true,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Moderator",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    isBlocked: false,
  },
];

const AdminUserList = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const router = useRouter();

  const toggleBlockStatus = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };

  return (
    <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
        User Management
      </h2>

      {/* Table for Large Screens */}
      <div className="hidden lg:block">
        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4">Profile</th>
              <th className="py-3 px-4 text-lg">Name</th>
              <th className="py-3 px-4 text-lg">Email</th>
              <th className="py-3 px-4 text-lg">Role</th>
              <th className="py-3 px-4 text-lg">Status</th>
              <th className="py-3 px-4 text-lg">Action</th>
              <th className="py-3 px-4 text-lg">Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b text-center">
                <td className="py-3 px-4">
                  <Image
                    src={user.profilePic}
                    alt={user.name}
                    width={55}
                    height={55}
                    className="rounded-full mx-auto"
                  />
                </td>
                <td className="py-3 px-4 font-bold text-gray-800 text-lg">
                  {user.name}
                </td>
                <td className="py-3 px-4 text-gray-700 text-lg">{user.email}</td>
                <td className="py-3 px-4 font-semibold text-lg text-gray-700">
                  {user.role}
                </td>
                <td
                  className={`py-3 px-4 font-semibold text-lg ${
                    user.isBlocked ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {user.isBlocked ? "Blocked" : "Active"}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => toggleBlockStatus(user.id)}
                    className={`px-4 py-1 text-white rounded-md font-medium transition text-md ${
                      user.isBlocked
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {user.isBlocked ? "Unblock" : "Block"}
                  </button>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => router.push(`/dashboard/user/${user.id}`)}
                    className="px-4 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition text-md"
                  >
                    Show Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View for Small Screens */}
      <div className="lg:hidden space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center"
          >
            <Image
              src={user.profilePic}
              alt={user.name}
              width={50}
              height={50}
              className="rounded-full mx-auto sm:mx-0"
            />
            <div className="sm:ml-4 text-center sm:text-left">
              <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
              <p className="text-gray-700">{user.email}</p>
              <p className="text-sm font-semibold text-gray-700">{user.role}</p>
              <p
                className={`text-sm font-semibold ${
                  user.isBlocked ? "text-red-600" : "text-green-600"
                }`}
              >
                {user.isBlocked ? "Blocked" : "Active"}
              </p>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-auto flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => toggleBlockStatus(user.id)}
                className={`px-3 py-1 text-white rounded-md font-medium transition text-sm ${
                  user.isBlocked
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {user.isBlocked ? "Unblock" : "Block"}
              </button>
              <button
                onClick={() => router.push(`/dashboard/user/${user.id}`)}
                className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition text-sm"
              >
                Show Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserList;
