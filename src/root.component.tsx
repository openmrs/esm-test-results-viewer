import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TestResultsViewerComponent from "./test-results-viewer/test-results-viewer.component";

export default function Root() {
  return (
    <BrowserRouter basename={window["getOpenmrsSpaBase"]()}>
      <Route
        path="/test-results-viewer"
        component={TestResultsViewerComponent}
      />
    </BrowserRouter>
  );
}
