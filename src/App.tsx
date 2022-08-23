import Growth from "./components/GrowthChart";
import { dataDomainProficiencyGrowthAll } from "./data";
import GroupStackChart from "./components/GroupStackChart";

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
