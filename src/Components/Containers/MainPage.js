import "carbon-components/scss/globals/scss/styles.scss";
import React from "react";
import "./main.css";
import FormContainer from "./FormContainer";

const MainPage = () => {
  return (
    <div>
      <div className="main-header">
        <h1 className="main-header-title">Strobes</h1>
        <h1 className="main-header-right">Docs</h1>
        <h1 className="main-header-right1">Contact</h1>
      </div>
      <div className="inf">
        <div className="App">
          <div className="App-header">
            <h1 className="App-title">strobes</h1>
            <p className="App-intro">A Risk-based Vulnerability Management</p>
            <p className="sub-title">Asset Management</p>
            <p className="sub-intro">
              Monitor all of your assets from
              <br />a unifiedconsole
            </p>
            <p className="sub-title">Security Workflows</p>
            <p className="sub-intro">
              Create and playbooks to integrate <br />
              security into your CI/CD pipeline
            </p>
            <p className="sub-title">Visual Insights</p>
            <p className="sub-intro">
              Augmented with meaningful metrics,Strobes <br />
              is the single pane of glass in to risks
            </p>
          </div>
        </div>

        <FormContainer />
      </div>
    </div>
  );
};
export default MainPage;
