import React from "react";

// Icons
import CloseIcon from "@mui/icons-material/Close";


const ModalMssg = ({ setModalMessage, review }) => {
  return (
    <div
      id="4"
      className="modal  fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center justify-center inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex justify-between items-center p-5 rounded-t border-b ">
            <h3 className="text-xl font-medium text-gray-900 ">
              User - {review.User?.username ? `${review.User?.username}` : `Unknow`}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="small-modal"
              onClick={() => setModalMessage(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <p className="font-bold">
              Review:
              <span className="text-base leading-relaxed text-gray-500 block break-words">
                {" "}
                {review?.message ? `${review?.message}` : `vacio`}
              </span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMssg;