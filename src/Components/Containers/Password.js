import React from "react";
import {
  Link,
  TextInput,
  FormLabel,
  Button,
  Checkbox,
  MultiSelect,
} from "carbon-components-react";
import {
  Add16,
  Search16,
  ArrowRight16,
  ArrowLeft16,
} from "@carbon/icons-react";
import "./main.css";

const Password = ({ setForm, formData, handleNext, handlePrevious }) => {
  const { email, password } = formData;

  return (
    <div className="box">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          className="button1"
          disabled={false}
          hasIconOnly
          tooltipPosition="top"
          tooltipAlignment="center"
          iconDescription="Previous"
          onClick={handlePrevious}
          renderIcon={ArrowLeft16}
          size="small"
          tabIndex={0}
          type="button"
          too
        />
        <p className="Login-int">{email}</p>
      </div>
      <div className="textinput">
        <FormLabel className="formlabel">Password</FormLabel>
      </div>
      <div className="inputbox">
        <TextInput
          className="textinput"
          name="password"
          id="test3"
          placeholder="*********"
          size={undefined}
          type="password"
          onChange={(e) => {
            setForm({ ...formData, password: e.target.value });
          }}
          value={password}
        />
      </div>
      <Button
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

export default Password;
