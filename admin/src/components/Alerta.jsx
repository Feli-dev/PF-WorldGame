import React from "react";

// Icons
import ErrorIcon from "@mui/icons-material/Error";

const Alerta = () => {
  return (
    <div
      class="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
      role="alert"
    >
      <ErrorIcon />

      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Info alert!</span> Change a few things up and
        try submitting again.
      </div>
    </div>
  );
};

export default Alerta;
