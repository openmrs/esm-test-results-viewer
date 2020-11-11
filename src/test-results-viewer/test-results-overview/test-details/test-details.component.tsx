import React from "react";
import { TestResult } from "../types/test-results-overview.types";
import * as styles from "./test-details.component.css";

export default function TestDetailsComponent(props: any) {
  const isResultHigh = props.testDetails.result == TestResult.High;
  return (
    <div className={styles.testDetail}>
      <div>{props.testDetails.name}</div>
      <div
        className={`${isResultHigh ? `${styles.highRange} omrs-bold` : ""} `}
      >
        <span>{props.testDetails.value}</span>
        {isResultHigh && (
          <span>
            <svg
              className="omrs-icon"
              fill="var(--omrs-color-danger)"
              style={{ height: "1rem", width: "1rem" }}
            >
              <use xlinkHref="#omrs-icon-arrow-upward"></use>
            </svg>
          </span>
        )}
      </div>
      <div>{props.testDetails.range}</div>
    </div>
  );
}
