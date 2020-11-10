import { TestResult } from "./test-results-viewer.types";

export type DetailedDataView = {
  testCategory: string;
  dateList: Array<Date>;
  testDetails: Array<TestDetailObject>;
};

export type TestDetailObject = {
  profileName: string;
  subTestName: string;
  isCount: boolean;
  dataValueMap: Array<TestResultValueType>;
  range: ValueRange;
};

export type TestResultValueType = {
  date: Date;
  value: number;
  result: TestResult;
};

export type ValueRange = {
  lowerRange: string;
  upperRange: string;
  unit: string;
};
