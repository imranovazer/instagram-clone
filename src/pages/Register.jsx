import React from "react";
import AuthorizationLayout from "../layouts/AuthorizationLayout";

function Register() {
  return (
    <div>
      <AuthorizationLayout login={false}>
        <h1>Register page</h1>
      </AuthorizationLayout>
    </div>
  );
}

export default Register;
