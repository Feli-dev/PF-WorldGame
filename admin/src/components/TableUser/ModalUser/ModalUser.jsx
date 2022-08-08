import React from "react";

// Icons
import CloseIcon from "@mui/icons-material/Close";

// {
//   "id": 4,
//   "name": "FER",
//   "username": "fers",
//   "password": "8735202216849030",
//   "country": "Mexico",
//   "email": "",
//   "points": 1,
//   "state": true,
//   "authorization": false,
//   "games": [],
//   "averageScore": 0
// }

const ModalUser = ({ setModalUser, userInfo }) => {
  return (
    <div
      id="small-modal"
      className="modal  fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center justify-center inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex justify-between items-center p-5 rounded-t border-b ">
            <h3 className="text-xl font-medium text-gray-900 ">
              User - {userInfo?.name ? `${userInfo?.name}` : `Unknow`}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="small-modal"
              onClick={() => setModalUser(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <p className="font-bold">
              E-mail:
              <span className="text-base leading-relaxed text-gray-500">
                {" "}
                {userInfo?.email ? `${userInfo.email}` : `Unknow`}
              </span>
            </p>
            <p className="font-bold">
              Rol:
              <span className="text-base leading-relaxed text-gray-500 ">
                {" "}
                {userInfo?.authorization
                  ? `${userInfo?.authorization}`
                  : `Unknow`}
              </span>
            </p>
            <p className="font-bold">
              Registration Date:
              <span className="text-base leading-relaxed text-gray-500 ">
                {" "}
                {userInfo?.createdAt.slice(0, 10)
                  ? userInfo?.createdAt.slice(0, 10)
                  : "Unknow"}
              </span>
            </p>

            <p className="font-bold">
              State:{" "}
              {userInfo?.state ? (
                <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">
                  Active
                </span>
              ) : (
                <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                  Blocked
                </span>
              )}
            </p>

            <p className="font-bold">
              Games Played:
              <span className="text-base leading-relaxed text-gray-500 ">
                {" "}
                {userInfo?.games.length ? `${userInfo?.games.length}` : `0`}
              </span>
            </p>

            <p className="font-bold">
              Friends:
              <span className="text-base leading-relaxed text-gray-500 ">
                {" "}
                {userInfo?.friends.length ? `${userInfo?.friends.length}` : `0`}
              </span>
            </p>

            <p className="font-bold">
              Points:
              <span className="text-base leading-relaxed text-gray-500 ">
                {" "}
                {userInfo?.stats?.averageScore
                  ? `${userInfo?.stats?.averageScore}`
                  : "0"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
