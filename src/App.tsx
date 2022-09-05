import GroupStackChart from "./components/GroupStackChart";
import { _data3, _data6, _cloneData } from "./components/GroupStackChart/data";
import { TData } from "./components/GroupStackChart/types";
import styled from "styled-components";
import { Children } from "react";

function App() {
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
        data={_cloneData}
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
