import React from "react";

const NavBar = () => {
  return (
    <div class="px-4 md:px-8 py-2 h-16 flex justify-between items-center shadow-sm bg-white">
      <div class="flex items-center w-2/3">{/* Si queremos search */}</div>
      <div class="flex items-center w-1/7">
        <div class="relative">
          <div class="cursor-pointer font-bold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full">
            AD
          </div>

          <div class="absolute top-0 mt-12 right-0 w-48 bg-white py-2 shadow-md border border-gray-100 rounded-lg z-40 hidden">
            <a
              href="#"
              class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            >
              Edit Profile
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            >
              Account Settings
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
