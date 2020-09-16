import React from "react";
import openmrsRootDecorator from "@openmrs/react-root-decorator";
import { BrowserRouter, Route } from "react-router-dom";
import TestResultsViewerComponent from "./test-results-viewer/test-results-viewer.component";

function Root(props) {
  return (
    <BrowserRouter basename={window["getOpenmrsSpaBase"]()}>
      <Route
        path="/test-results-viewer"
        component={TestResultsViewerComponent}
      />
    </BrowserRouter>
  );
}

export default openmrsRootDecorator({
  featureName: "test-results-viewer",
  moduleName: "@openmrs/esm-test-results-viewer-app"
})(Root);
