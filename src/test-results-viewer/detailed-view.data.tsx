import { TestResult } from "./test-results-viewer.types";
import { DetailedDataView } from "./detailed-view.type";

const detailedViewDataMap: DetailedDataView = {
  testCategory: "Blood Cell Profile and Diff",
  dateList: [
    new Date(),
    new Date("2020-05-16 12:00:00"),
    new Date("2020-06-10 12:00:00"),
    new Date("2020-06-30 12:00:00"),
    new Date("2020-07-31 12:00:00"),
    new Date("2020-09-16 12:00:00"),
    new Date("2020-11-10 12:00:00")
  ],
  testDetails: [
    {
      profileName: "WBC",
      subTestName: "WBC",
      isCount: true,
      range: {
        lowerRange: "50",
        upperRange: "100",
        unit: "K/mm3"
      },
      dataValueMap: [
        {
          date: new Date(),
          value: 11,
          result: TestResult.Normal
        },
        {
          date: new Date("2020-05-16 12:00:00"),
          value: 09,
          result: TestResult.Low
        },
        {
          date: new Date("2020-11-10  12:00:00"),
          value: 10,
          result: TestResult.Normal
        }
      ]
    },
    {
      profileName: "WBC",
      subTestName: "WBC",
      isCount: false,
      range: {
        lowerRange: "10",
        upperRange: "15",
        unit: "g/dL"
      },
      dataValueMap: [
        {
          date: new Date("2020-11-10 12:00:00"),
          value: 11,
          result: TestResult.Normal
        },
        {
          date: new Date("2020-05-16 12:00:00"),
          value: 09,
          result: TestResult.Low
        },
        {
          date: new Date("2020-07-31 12:00:00"),
          value: 10,
          result: TestResult.Normal
        },
        {
          date: new Date("2020-06-10 12:00:00"),
          value: 10,
          result: TestResult.Normal
        },
        {
          date: new Date("2020-06-30 12:00:00"),
          value: 10,
          result: TestResult.Normal
        },
        {
          date: new Date("2020-09-16  12:00:00"),
          value: 10,
          result: TestResult.Normal
        }
      ]
    },
    {
      profileName: "HCT",
      subTestName: "HCT",
      isCount: false,
      range: {
        lowerRange: "40",
        upperRange: "65",
        unit: "%"
      },
      dataValueMap: [
        {
          date: new Date("2020-11-10 12:00:00"),
          value: 42,
          result: TestResult.Normal
        },
        {
          date: new Date("2020-05-16 12:00:00"),
          value: 38,
          result: TestResult.Low
        },
        {
          date: new Date("2020-07-31 12:00:00"),
          value: 32,
          result: TestResult.Low
        },
        {
          date: new Date("2020-06-10 12:00:00"),
          value: 32,
          result: TestResult.Low
        },
        {
          date: new Date("2020-06-30 12:00:00"),
          value: 32,
          result: TestResult.Low
        },
        {
          date: new Date("2020-09-16  12:00:00"),
          value: 32,
          result: TestResult.Low
        }
      ]
    }
  ]
};

export { detailedViewDataMap };
