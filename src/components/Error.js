import React from "react";

const Error = ({ err }) => {
  console.log(err);
  return (
    <div>
      <p>Error</p>
      <p>Message: {"Page Not Found" || err}</p>
    </div>
  );
};

export default Error;
