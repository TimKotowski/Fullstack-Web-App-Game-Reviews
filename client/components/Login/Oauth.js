import React from "react";

const OAuthLoginForm = () => (
  <form method="get" action="/api/google">
    <button type="submit" className="btn bg-red white p1 rounded">
      Login with Google
    </button>
  </form>
);

export default OAuthLoginForm;
