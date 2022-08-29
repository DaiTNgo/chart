import Growth from "./components/GrowthChart";
import {
  dataDomainProficiencyGrowthAll,
  dataDomainProficiencyTestScore,
} from "./data";
import GroupStackChart from "./components/GroupStackChart";
import Chart from "./Chart";
import { _data3, aGrowth, aTestScore } from "./components/GroupStackChart/data";

function App() {
  const lengthGroup = aGrowth.length;
  const lengthBar = aGrowth.reduce((total, item, idx) => {
    const currentLength = item.classesScores.length;
    return currentLength < total ? currentLength : total;
  }, 99999999);
  console.log("=> :::: lengthBar ::::", lengthBar);

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
        data={aGrowth}
        numOfGroup={lengthGroup}
        numOfStack={aGrowth[0].classesScores[0].domainScores.length}
        numOfBar={lengthBar}
        startSpacing={50}
        spacingBetweenChart={20}
        widthBar={40}
      />
      {/*stack*/}
      {/*<GroupStackChart*/}
      {/*  data={[aTestScore]}*/}
      {/*  numOfGroup={1}*/}
      {/*  numOfStack={aTestScore.classesScores[0].domainScores.length}*/}
      {/*  numOfBar={aTestScore.classesScores.length}*/}
      {/*/>*/}
      {/*bar*/}
      {/*<GroupStackChart*/}
      {/*  data={[_data3]}*/}
      {/*  numOfGroup={1}*/}
      {/*  numOfStack={1}*/}
      {/*  numOfBar={_data3.studentScores.length}*/}
      {/*/>*/}
    </div>
  );
}

export default App;
