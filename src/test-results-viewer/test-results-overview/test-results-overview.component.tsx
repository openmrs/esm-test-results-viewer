import React from "react";
import TestPanelComponent from "./test-panel/test-panel.component";
import { TestPanel, TestResult } from "./types/test-results-overview.types";

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
          value: "2K/mm3",
          range: "1.5 To 5.5",
          result: TestResult.Low
        }
      ]
    },
    {
      testName: "Hgb A1c Bld qn IA",
      status: "Inpatient",
      testDate: new Date(2020, 4, 15),
      subTests: [
        {
          name: "WBC",
          value: "11K/mm3",
          range: "3.5 To 5.5",
          result: TestResult.Normal
        },
        {
          name: "Hcb",
          value: "1/mm3",
          range: "4.5 To 5.5",
          result: TestResult.High
        },
        {
          name: "Mcv",
          value: "11K/mm3",
          range: "4.5 To 15",
          result: TestResult.Normal
        },
        {
          name: "Abc",
          value: "4K/mm3",
          range: "2.5 To 10",
          result: TestResult.High
        }
      ]
    },
    {
      testName: "Blood Cell Profile and Diff",
      status: "",
      testDate: new Date(2020, 8, 30),
      subTests: []
    }
  ];
  return (
    <div>
      {testReport.map((testPanel: TestPanel) => (
        <TestPanelComponent testPanel={testPanel} key={testPanel.testName} />
      ))}
    </div>
  );
}
