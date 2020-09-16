import "./set-public-path";
import { backendDependencies } from "./openmrs-backend-dependencies";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  return {
    lifecycle: () => import("./openmrs-esm-test-results-viewer"),
    activate: "test-results-app"
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
