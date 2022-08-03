import React from "react";

// Icons
import InfoIcon from "@mui/icons-material/Info";

const Alerta = ({ alerta }) => {
  return (
    <div
      className={
        alerta.error
          ? "p-4 mb-4 text-sm  rounded-lg text-center text-red-700 bg-red-100"
          : "p-4 mb-4 text-sm  rounded-lg text-center text-green-700 bg-green-100"
      }
      role="alert"
    >
      <span className="font-medium">
        <InfoIcon />
      </span>{" "}
      {alerta.msg}
    </div>
  );
};

export default Alerta;
