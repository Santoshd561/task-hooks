import React from "react";
import {
  Link,
  TextInput,
  FormLabel,
  Button,
  Checkbox,
  MultiSelect,
} from "carbon-components-react";
import { Add16, Search16, ArrowRight16 } from "@carbon/icons-react";
import "./main.css";

const Email = ({ setForm, formData, handleNext }) => {
  const { email } = formData;

  return (
    <div className="box">
      <p className="Login-int">Enter your Strobes ID</p>
      <div className="textinput">
        <FormLabel className="formlabel">Email</FormLabel>
      </div>
      <div className="inputbox">
        <TextInput
          className="textinput"
          name="email"
          id="test2"
          placeholder="john.doe@example.com"
          size={undefined}
          type="email"
          value={email}
          onChange={(e) => {
            const newValue = { ...formData, email: e.target.value };
            debugger;
            setForm(newValue);
          }}
        />
      </div>
      <Button
        //  as={function noRefCheck(){}}
        className="button"
        disabled={false}
        href="#"
        iconDescription="Button icon"
        kind="primary"
        onClick={handleNext}
        renderIcon={ArrowRight16}
        size="field"
        tabIndex={0}
        type="button"
      >
        Continue
      </Button>
      <p
        className="Login-intro"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <Checkbox
          className="checkbox"
          defaultChecked
          id="checkbox-label-1"
          labelText="Remember me"
          wrapperClassName=""
        />
        <Link className="link2" href="#">
          Forgot Password
        </Link>
      </p>
      <p className="Login-intro" style={{ marginTop: "30px" }}>
        <Link className="link3" href="#">
          Log in with SAML SSO
        </Link>
      </p>
      <p className="Login-intro1">
        &copy; Copyright Strobes 2020. All Rights Reserved.
      </p>
    </div>
  );
};

export default Email;
