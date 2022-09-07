import GroupStackChart from "./components/GroupStackChart";
import { TData } from "./components/GroupStackChart/types";
import styled from "styled-components";
import { Children } from "react";
import {
  parseAllClassesGrowth,
  parseAllClassesTestScore,
  parseOneClassAllStudentsTestScore,
  parseOneClassOneStudentTestScore,
} from "./components/parseData";
import {
  _allClassesGrowth,
  _allClassesTestScore,
  _oneClassAllStudentsTestScore,
  _oneClassOneStudentTestScore,
} from "./components/parseData/mock-data";

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
      <p>_groupStackData</p>
      <GroupStackChart
        data={parseAllClassesGrowth(_allClassesGrowth)}
        startSpacing={60}
        spacingBetweenChart={20}
        title={"Domain Score"}
        isShowGrowth
        isShowPopoverGrowth
        isShowPopoverBar={false}
      />
      <p>_allClassesTestScoreClone</p>
      <GroupStackChart
        data={parseAllClassesTestScore(_allClassesTestScore)}
        title={"_allClassesTestScoreClone"}
        spacingBetweenChart={50}
        startSpacing={50}
        strokeWidth={2}
        isShowPopoverBar
      />
      <p>_oneClassAllStudentsTestScoreClone</p>
      <GroupStackChart
        data={parseOneClassAllStudentsTestScore(_oneClassAllStudentsTestScore)}
        title={"_oneClassAllStudentsTestScoreClone"}
        spacingBetweenChart={50}
        startSpacing={50}
        isShowPopoverBar
      />
      <p>_oneClassOneStudentTestScoreClone</p>
      <GroupStackChart
        data={parseOneClassOneStudentTestScore(_oneClassOneStudentTestScore)}
        title={"_oneClassOneStudentTestScoreClone"}
        spacingBetweenChart={100}
        startSpacing={50}
        isShowPopoverBar={false}
        strokeWidth={5}
        widthForLabelGroup={130}
        componentLabelGroup={Div}
      />
    </div>
  );
}

export default App;

const Div = styled.div<{ width: number }>`
  border-top: 2px solid black;
  font-size: 16px;
  transform: unset;
`;
