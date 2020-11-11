import React from "react";
import { TestDetails } from "../types/test-results-overview.types";
import TestDetailsComponent from "../test-details/test-details.component";
import * as styles from "./test-panel.component.css";

export default function TestPanelComponent(props: any) {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
  return (
    <div className={styles.panel}>
      <div className={styles.name}>
        <h4 className={styles.header}>{props.testPanel.testName}</h4>
        <p className={styles.status}>{props.testPanel.status}</p>
      </div>
      <p className={styles.date}>
        {props.testPanel.testDate
          ? dateFormatter.format(props.testPanel.testDate)
          : ""}
      </p>
      <div className={styles.details}>
        {props.testPanel.subTests.map((testDetails: TestDetails) => (
          <TestDetailsComponent
            testDetails={testDetails}
            key={testDetails.name}
          />
        ))}
      </div>
    </div>
  );
}
