import React, { useState } from "react";

import Email from "./Email";
import Password from "./Password";
import GoogleAuthentication from "./GoogleAuthentication";

const steps = ["email", "password", "authentication"];

const defaultData = {
  email: "",
  password: "",
  authenticationCode: "",
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useState(defaultData);
  const [step, setStep] = useState(steps[0]);

  const props = { formData, setForm };
  switch (step) {
    case "email":
      return <Email {...props} handleNext={() => setStep("password")} />;
    case "password":
      return (
        <Password
          {...props}
          handleNext={() => setStep("authentication")}
          handlePrevious={() => setStep("email")}
        />
      );
    case "authentication":
      return <GoogleAuthentication {...props} />;

    default:
      debugger;
      return <p>error</p>;
  }
};

export default MultiStepForm;
