import "carbon-components/scss/globals/scss/styles.scss";
import React from "react";
import "./main.css";
import { Link } from "carbon-components-react";
import MultiStepForm from "./MultiStepForm";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-header">
        <h1 className="Login-title">Log in</h1>
        <p className="Login-intro">
          Don't have an account ?
          <Link className="link" href="#">
            Register now
          </Link>
        </p>
        <MultiStepForm />
      </div>
    </div>
  );
};
export default Login;
