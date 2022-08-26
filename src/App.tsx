import Growth from "./components/GrowthChart";
import {
  dataDomainProficiencyGrowthAll,
  dataDomainProficiencyTestScore,
} from "./data";
import GroupStackChart from "./components/GroupStackChart";
import Chart from "./Chart";

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
      <GroupStackChart />
    </div>
  );
}

export default App;
