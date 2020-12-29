import "./set-public-path";
import { backendDependencies } from "./openmrs-backend-dependencies";
import { getAsyncLifecycle } from "@openmrs/esm-react-utils";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const options = {
    featureName: "test-results-viewer",
    moduleName: "@openmrs/esm-test-results-viewer-app"
  };
  return {
    lifecycle: getAsyncLifecycle(() => import("./root.component"), options),
    activate: "test-results-viewer",
    extensions: [
      {
        id: "test-results-viewer-link",
        slot: "home-page-buttons",
        load: getAsyncLifecycle(
          () => import("./test-results-viewer-link"),
          options
        )
      }
    ]
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
