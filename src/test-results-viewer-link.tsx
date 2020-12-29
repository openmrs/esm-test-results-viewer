import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { ConfigurableLink } from "@openmrs/esm-react-utils";

export default function Root() {
  return (
    <ConfigurableLink
      className="omrs-link omrs-filled-neutral"
      to="${openmrsSpaBase}/test-results-viewer"
    >
      Test Results Viewer
    </ConfigurableLink>
  );
}
