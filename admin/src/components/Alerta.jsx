import React from "react";

const Alerta = () => {
  return (
    <div
      class="bg-red-200 text-red-700 px-6 py-4 rounded-lg relative mb-5"
      role="alert"
      x-data="{ open: true }"
    >
      <div class="mr-4">
        <strong class="font-bold">Account Due!</strong>
        <span class="block sm:inline">
          Please renew your account to continue using our services.
        </span>
      </div>

      <span class="cursor-pointer absolute top-0 bottom-0 right-0 hover:bg-red-100 hover:text-red-600 w-10 h-10 rounded-full inline-flex items-center justify-center mt-2 mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </span>
    </div>
  );
};

export default Alerta;
