import React from "react";
import openmrsRootDecorator from "@openmrs/react-root-decorator";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home.component";

function Root() {
  return null;
}

export default openmrsRootDecorator({
  featureName: "test-results-viewer",
  moduleName: "@openmrs/esm-test-results-viewer"
})(Root);
