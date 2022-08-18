import React from "react";

function Score() {
  return (
    <div className={"chart-container"}>
      <div className={"chart-left"}>
        <h1>Title</h1>
      </div>
      <div className={"chart-right"}>
        <div className={"chart-score"}>
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
        </div>
        <div className={"chart-data"}>
          <div className={"chart-data-top"}>
            {/*<div className={"line"}></div>*/}
            {/*<div className={"line"}></div>*/}
            {/*<div className={"line"}></div>*/}
            {/*<div className={"line"}></div>*/}
            {/*<div className={"line"}></div>*/}
            <svg
              style={{
                width: "100%",
              }}
              height={360}
            >
              <line
                x1="10"
                y1="0"
                x2={"100%"}
                y2="0"
                style={{ stroke: "rgb(255, 0, 0)", strokeWidth: 2 }}
              />
              <line
                x1="10"
                y1="60"
                x2={"100%"}
                y2="60"
                style={{ stroke: "rgb(255, 0, 0)", strokeWidth: 2 }}
              />
              <line
                x1="10"
                y1="120"
                x2={"100%"}
                y2="120"
                style={{ stroke: "rgb(255, 0, 0)", strokeWidth: 2 }}
              />
              <line
                x1="10"
                y1="180"
                x2={"100%"}
                y2="180"
                style={{ stroke: "rgb(255, 0, 0)", strokeWidth: 2 }}
              />{" "}
              <line
                x1="10"
                y1="240"
                x2={"100%"}
                y2="240"
                style={{ stroke: "rgb(255, 0, 0)", strokeWidth: 2 }}
              />{" "}
              <line
                x1="10"
                y1="300"
                x2={"100%"}
                y2="300"
                style={{ stroke: "rgb(255, 0, 0)", strokeWidth: 2 }}
              />
              <line
                x1="0"
                y1="360"
                x2={"100%"}
                y2="360"
                style={{ stroke: "rgb(255,3,3)", strokeWidth: 5 }}
              />
              <rect
                x={"100"}
                y={"100"}
                width={"100"}
                height={"100"}
                style={{
                  fill: "red",
                  stroke: "black",
                  strokeWidth: "5",
                }}
              />
              <rect
                x={"250"}
                y={"100"}
                width={"100"}
                height={"100"}
                style={{
                  fill: "red",
                  stroke: "black",
                  strokeWidth: "5",
                }}
              />{" "}
              <rect
                x={"400"}
                y={"100"}
                width={"100"}
                height={"100"}
                style={{
                  fill: "red",
                  stroke: "black",
                  strokeWidth: "5",
                }}
              />
            </svg>
            <div className={"box"}>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.
            </div>
          </div>
          {/*<div className={"chart-data-bottom"}></div>*/}
        </div>
      </div>
    </div>
  );
}

export default Score;
