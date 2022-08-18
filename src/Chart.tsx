// @ts-nocheck
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Chart = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    className="chartaaaa"
    data={data}
    keys={[
      // 'hot dog',
      "burger",
      // 'sandwich',
      // 'kebab',
      // 'fries',
      // 'donut'
    ]}
    indexBy="burger"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: -50, // dịch chuyển giá tị cột của chart ở bottom
      tickPadding: 95, // margin top giá tị cột của chart ở bottom
      tickRotation: 20, // góc quay của giá tị cột của chart ở bottom
      legend: "country", // tên của cột của chart ở bottom
      legendPosition: "middle", // vị trí của tên cột của chart ở bottom
      legendOffset: -109, // dịch chuyển text của chart ở bottom
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={500}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
    }}
    axisBottomAriaLabel="burger"
    axisBottomAriaLabelOffset={100}
    enableGridX={true}
    enableGridY={true}
    enableLabel={true}
    animate={true}
    motionStiffness={90}
    motionDamping={150}
    isInteractive={true}
    // barComponent={(...rest) =>{
    //   console.log(rest);
    //   return <h1>hi</h1>
    // }}
    innerPadding={100}
    minValue={0}
    ariaDescribedBy={"bar-chart-description"}
    ariaLabelledBy={"bar-chart-title"}
    ariaTitle={"Bar Chart"}
    ariaDescription={"This is a bar chart"}
    ariaTitleTemplate={"%s"}
    ariaDescriptionTemplate={"%s"}
    ariaLabelTemplate={"%s"}
    ariaValueTemplate={"%s"}
    ariaValueTextTemplate={"%s"}
    renderWrapper={(...rest) => {
      console.log(rest);
      return <h1>hi</h1>;
    }}
    gridYValues={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
    // gridXValues={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
  />
);

function Bar() {
  return <div>hi</div>;
}

export default Chart;
