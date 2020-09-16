import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { navigateToUrl } from "single-spa";

export default singleSpaReact({
  React,
  ReactDOM,
  rootComponent: TestResultsViewer
});

export function TestResultsViewer(props) {
  const className = `omrs-link omrs-filled-neutral`;
  const url = "/openmrs/spa/test-results-viewer";
  const button = (
    <a
      className={className}
      href={url}
      onClick={event => navigateToUrl(event, url)}
    >
      Test Results Viewer
    </a>
  );
  return button;
}
