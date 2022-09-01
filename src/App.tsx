import GroupStackChart from "./components/GroupStackChart";
import { _data3, aGrowth, aTestScore } from "./components/GroupStackChart/data";
import { TData } from "./components/GroupStackChart/types";
import styled from "styled-components";
import { Children } from "react";

function App() {
  const data: TData[] = [
    {
      label: "Label Of Group Dai Class",
      value: [
        {
          value: [
            {
              percentage: 12,
              info: {
                name: "hi",
              },
            },
            {
              percentage: 35,
              info: {
                name: "hi",
              },
            },
          ],
          label: "MOY",
        },
        {
          value: [
            {
              percentage: 56,
              info: {
                name: "hi",
              },
            },
            {
              percentage: 29,
              info: {
                name: "hi",
              },
            },
          ],
          label: "EOY",
        },
      ],
      growth: 100,
    },
    {
      label: "Label Of Group Tinh",
      value: [
        {
          value: [
            {
              percentage: 98,
              info: {
                name: "hi",
              },
            },
            {
              percentage: 20,
              info: {
                name: "hi",
              },
            },
          ],
          label: "Bar",
        },
        {
          value: [
            {
              percentage: 10,
              info: {
                name: "hi",
              },
            },
            {
              percentage: 40,
              info: {
                name: "hi",
              },
            },
          ],
          label: "Bar",
        },
      ],
      growth: -100,
    },
    {
      label: "Label Of Group Tinh",
      value: [
        {
          value: [
            {
              percentage: 98,
              info: {
                name: "hi",
              },
            },
            {
              percentage: 20,
              info: {
                name: "hi",
              },
            },
          ],
          label: "Bar",
        },
        {
          value: [
            {
              percentage: 10,
              info: {
                name: "hi",
              },
            },
            {
              percentage: 40,
              info: {
                name: "hi",
              },
            },
          ],
          label: "Bar",
        },
      ],
      growth: 30,
    },
  ];
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        height: "1000px",
        border: "1px solid black",
      }}
    >
      {/* stack group */}
      <GroupStackChart
        data={data}
        // spacingBetweenChart={60}
        // startSpacing={70}
        // strokeWidth={2}
        // widthBar={40}
        // isShowGrowth={true}
        // title={"Domain Score"}
        componentLabelBar={Div}
        isShowGrowth={true}
      />
    </div>
  );
}

export default App;

const Div = styled.div<{ width: number }>`
  color: white;
  font-size: 14px;
  background-color: black;
`;
