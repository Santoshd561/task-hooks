import React, { useState } from "react";
import {
  TextInput,
  FormLabel,
  Button,
  InlineNotification,
} from "carbon-components-react";
import { ArrowRight16, Error16 } from "@carbon/icons-react";
import "./main.css";
import { AuthService } from "../../Service/AuthService";

const GoogleAuthenticate = ({ setForm, formData, navigation }) => {
  const [response, setResponse] = useState(null);

  const { email, password, authenticationCode } = formData;

  function handleLogin() {
    const response = AuthService.login(email, password, authenticationCode);
    setResponse(response);
  }

  return (
    <div className="box">
      <p className="Login-int">2-Step Verification</p>
      <div className="textinput">
        <FormLabel className="formlabel">Google Authenticator Code</FormLabel>
      </div>
      <div className="inputbox">
        <TextInput
          className="textinput"
          disabled={false}
          name="authenticationCode"
          id="test2"
          invalid={false}
          light={false}
          placeholder="****"
          size={undefined}
          onChange={(e) => {
            setForm({ ...formData, authenticationCode: e.target.value });
          }}
          type="password"
          value={authenticationCode}
        />
      </div>
      <Button
        className="button"
        disabled={false}
        href="#"
        iconDescription="Button icon"
        kind="primary"
        onClick={handleLogin}
        renderIcon={ArrowRight16}
        size="field"
        tabIndex={0}
        type="button"
      >
        Log In
      </Button>
      {response && response.success === true && (
        <InlineNotification
          className="notification-green"
          hideCloseButton={false}
          iconDescription="describes the close button"
          kind="success"
          notificationType="inline"
          onCloseButtonClick={function noRefCheck() {}}
          role="alert"
          statusIconDescription="describes the status icon"
          subtitle={response.subtitle}
          title={response.message}
        />
      )}
      {response && response.success === false && (
        <InlineNotification
          className="notification"
          hideCloseButton={false}
          iconDescription="describes the close button"
          kind="error"
          notificationType="inline"
          onCloseButtonClick={function noRefCheck() {}}
          role="alert"
          statusIconDescription="describes the status icon"
          subtitle={response.subtitle}
          title={response.message}
        />
      )}
    </div>
  );
};

export default GoogleAuthenticate;
