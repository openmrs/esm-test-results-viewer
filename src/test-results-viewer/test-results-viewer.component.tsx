import React from "react";
import TestReportComponent from "./test-results-overview/test-results-overview.component";
import * as styles from "./test-results-viewer.component.css";

export default function TestResultsViewerComponent() {
  return (
    <main className={`omrs-main-content`}>
      <div className={styles.leftPane}>
        <TestReportComponent />
      </div>
    </main>
  );
}
