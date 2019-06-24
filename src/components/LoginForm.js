import * as React from "react";

export const LoginForm = () => {
  return (
    <form>
      <h3>Login</h3>
      Username:
      <br />
      <input type="text" name="username" />
      <button>Submit</button>
    </form>
  );
};
