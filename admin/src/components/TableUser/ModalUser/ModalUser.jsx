import React from "react";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const ModalUser = ({ setModalUser }) => {
  return (
    <div
      id="small-modal"
      tabindex="-1"
      class="modal  fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center justify-center inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Usuario - Andres Guerrero
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="small-modal"
              onClick={() => setModalUser(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <div class="p-6 space-y-6">
            <p className="font-bold">
              Email:
              <span class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {" "}
                correo@correo.com
              </span>
            </p>
            <p className="font-bold">
              Rol:
              <span class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {" "}
                Admin
              </span>
            </p>
            <p className="font-bold">
              Registration Date:
              <span class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {" "}
                20 Jul 2022
              </span>
            </p>

            <p className="font-bold">
              State:{" "}
              <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">
                Active
              </span>
            </p>

            <p className="font-bold">
              Games Played:
              <span class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {" "}
                0
              </span>
            </p>

            <p className="font-bold">
              Friends:
              <span class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {" "}
                0
              </span>
            </p>

            <p className="font-bold">
              Points:
              <span class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {" "}
                0
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
