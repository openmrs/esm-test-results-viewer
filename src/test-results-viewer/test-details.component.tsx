import React from "react";

export default function TestDetailsComponent(props: any) {
  return (
    <div style={{ display: "flex" }}>
      <div>{props.testDetails.name}</div>
      <div>{props.testDetails.value}</div>
      <div>{props.testDetails.range}</div>
    </div>
  );
}
