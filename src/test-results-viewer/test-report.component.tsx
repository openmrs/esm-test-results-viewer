import React from "react";
import TestPanelComponent from "./test-panel.component";
import { TestPanel, TestResult } from "./test-results-viewer.types";

export default function TestReportComponent(props: any) {
  const testReport: TestPanel[] = [
    {
      testName: "Lipid Profile",
      status: "Inpatient",
      testDate: new Date(2020, 4, 15),
      subTests: [
        {
          name: "WBC",
          value: "11K/mm3",
          range: "4.5 To 5.5",
          result: TestResult.Normal
        },
        {
          name: "Hcb",
          value: "11K/mm3",
          range: "4.5 To 5.5",
          result: TestResult.High
        },
        {
          name: "Mcv",
          value: "11K/mm3",
          range: "4.5 To 5.5",
          result: TestResult.Normal
        },
        {
          name: "Abc",
          value: "11K/mm3",
          range: "4.5 To 5.5",
          result: TestResult.Low
        }
      ]
    },
    {
      testName: "Blood Cell Profile and Diff",
      status: "",
      testDate: null,
      subTests: []
    }
  ];
  return (
    <div style={{ display: "flex" }}>
      <div>
        {testReport.map((testPanel: TestPanel) => (
          <TestPanelComponent testPanel={testPanel} key={testPanel.testName} />
        ))}
      </div>
      <div>
        {/* selectedTestReport && <ExpandedTestReportComponent testReport={selectedTest}/> */}
      </div>
    </div>
  );
}
