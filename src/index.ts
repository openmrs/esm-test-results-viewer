import "./set-public-path";
import { ExtensionDefinition, attach } from "@openmrs/esm-extension-manager";
import { backendDependencies } from "./openmrs-backend-dependencies";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

const extensions: Array<ExtensionDefinition> = [
  {
    appName: "@openmrs/esm-test-results-viewer-app",
    name: "test-results-viewer-link",
    load: () => import("./test-results-viewer-link")
  }
];

function setupOpenMRS() {
  return {
    lifecycle: () => import("./openmrs-esm-test-results-viewer"),
    activate: "test-results-viewer",
    extensions: extensions
  };
}

attach("home-page-buttons", "test-results-viewer-link");

export { backendDependencies, importTranslation, setupOpenMRS };
