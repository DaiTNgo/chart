import GroupStackChart from "./components/GroupStackChart";
import {
  _data3,
  _data6,
  _groupStackData,
  _data7,
  _allClassesTestScoreClone,
  _oneClassAllStudentsTestScore,
  _oneClassAllStudentsTestScoreClone,
} from "./components/GroupStackChart/data";
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
      {/*<GroupStackChart*/}
      {/*  data={[*/}
      {/*    ..._groupStackData,*/}
      {/*    ..._groupStackData,*/}
      {/*    ..._groupStackData,*/}
      {/*    ..._groupStackData,*/}
      {/*    ..._groupStackData,*/}
      {/*    ..._groupStackData,*/}
      {/*  ]}*/}
      {/*  // spacingBetweenChart={60}*/}
      {/*  // startSpacing={70}*/}
      {/*  // strokeWidth={2}*/}
      {/*  // widthBar={40}*/}
      {/*  // isShowGrowth={true}*/}
      {/*  // title={"Domain Score"}*/}
      {/*  // componentLabelBar={Div}*/}
      {/*  isShowGrowth*/}
      {/*  isShowPopoverBar*/}
      {/*  isShowPopoverGrowth*/}
      {/*/>*/}
      {/*<GroupStackChart*/}
      {/*  data={[*/}
      {/*    ..._data7,*/}
      {/*    ..._data7,*/}
      {/*    ..._data7,*/}
      {/*    ..._data7,*/}
      {/*    ..._data7,*/}
      {/*    ..._data7,*/}
      {/*    ..._data7,*/}
      {/*    ..._data7,*/}
      {/*    ..._data7,*/}
      {/*  ]}*/}
      {/*  // spacingBetweenChart={60}*/}
      {/*  // startSpacing={70}*/}
      {/*  // strokeWidth={2}*/}
      {/*  // widthBar={40}*/}
      {/*  // isShowGrowth={true}*/}
      {/*  // title={"Domain Score"}*/}
      {/*  // componentLabelBar={Div}*/}
      {/*  widthForLabelGroup={80}*/}
      {/*  isShowPopoverBar*/}
      {/*/>*/}

      {/*<GroupStackChart*/}
      {/*  data={[*/}
      {/*    ..._allClassesTestScoreClone,*/}
      {/*    ..._allClassesTestScoreClone,*/}
      {/*    ..._allClassesTestScoreClone,*/}
      {/*    ..._allClassesTestScoreClone,*/}
      {/*    ..._allClassesTestScoreClone,*/}
      {/*    ..._allClassesTestScoreClone,*/}
      {/*    ..._allClassesTestScoreClone,*/}
      {/*    ..._allClassesTestScoreClone,*/}
      {/*    ..._allClassesTestScoreClone,*/}
      {/*  ]}*/}
      {/*  // spacingBetweenChart={60}*/}
      {/*  // startSpacing={70}*/}
      {/*  // strokeWidth={2}*/}
      {/*  // widthBar={40}*/}
      {/*  // isShowGrowth={true}*/}
      {/*  // title={"Domain Score"}*/}
      {/*  // componentLabelBar={Div}*/}
      {/*  widthForLabelGroup={80}*/}
      {/*  isShowPopoverBar={true}*/}
      {/*/>*/}
      <GroupStackChart
        data={_oneClassAllStudentsTestScoreClone}
        title={"Domain Score"}
        widthForLabelGroup={80}
        isShowPopoverBar={true}
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
