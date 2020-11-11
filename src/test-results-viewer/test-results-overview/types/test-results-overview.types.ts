export enum TestResult {
  High = 1,
  Low,
  Normal
}

export type TestDetails = {
  name: string;
  value: string;
  range: string;
  result: TestResult;
};

export type TestPanel = {
  testName: string;
  status: string;
  testDate: Date | null | undefined;
  subTests: TestDetails[] | null | undefined;
};
