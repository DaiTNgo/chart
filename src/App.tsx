import GroupStackChart from "./components/GroupStackChart";
import { _data3, aGrowth, aTestScore } from "./components/GroupStackChart/data";
import { FIELD_SCORE } from "./components/GroupStackChart/GroupStackChart";

function App() {
  const lengthGroup = aGrowth.length;
  const lengthBar = aGrowth.reduce((total, item, idx) => {
    const currentLength = item.classesScores.length;
    return currentLength < total ? currentLength : total;
  }, 99999999);

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
      <GroupStackChart />
      {/*stack*/}
      {/*<GroupStackChart*/}
      {/*  data={[aTestScore]}*/}
      {/*  numOfGroup={1}*/}
      {/*  numOfStack={aTestScore.classesScores[0].domainScores.length}*/}
      {/*  numOfBar={aTestScore.classesScores.length}*/}
      {/*  startSpacing={50}*/}
      {/*  spacingBetweenChart={20}*/}
      {/*  widthBar={40}*/}
      {/*  fieldScore={FIELD_SCORE.CLASSES_SCORES}*/}
      {/*/>*/}
      {/*/!*bar*!/*/}
      {/*<GroupStackChart*/}
      {/*  data={[_data3]}*/}
      {/*  numOfGroup={1}*/}
      {/*  numOfStack={1}*/}
      {/*  numOfBar={_data3.studentScores.length}*/}
      {/*  startSpacing={60}*/}
      {/*  spacingBetweenChart={50}*/}
      {/*  widthBar={40}*/}
      {/*  fieldScore={FIELD_SCORE.STUDENT_SCORES}*/}
      {/*/>*/}
    </div>
  );
}

export default App;
