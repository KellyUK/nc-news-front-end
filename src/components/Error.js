import React from "react";

const Error = ({ err }) => {
  return (
    <div>
      <p>Error</p>
      <p>Message: {err}</p>
    </div>
  );
};

export default Error;
