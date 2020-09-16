import React from "react";
import { TestDetails } from "./test-results-viewer.types";
import TestDetailsComponent from "./test-details.component";

export default function TestPanelComponent(props: any) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h4>{props.testPanel.testName}</h4>
        <p>{props.testPanel.status}</p>
      </div>
      <p>{props.testPanel.testDate?.toString()}</p>
      <div>
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
