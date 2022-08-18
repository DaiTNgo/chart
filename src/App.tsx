import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Bar } from "@nivo/bar";
import Chart from "./Chart";
import { useMemo } from "react";
import Score from "./Score";

function App() {
  const data = useMemo(
    () =>
      [
        {
          country: "AD",
          "hot dog": 28,
          "hot dogColor": "hsl(165, 70%, 50%)",
          burger: 149,
          burgerColor: "hsl(289, 70%, 50%)",
          sandwich: 60,
          sandwichColor: "hsl(224, 70%, 50%)",
          kebab: 66,
          kebabColor: "hsl(129, 70%, 50%)",
          fries: 2,
          friesColor: "hsl(274, 70%, 50%)",
          donut: 114,
          donutColor: "hsl(298, 70%, 50%)",
        },
        {
          country: "AE",
          "hot dog": 88,
          "hot dogColor": "hsl(236, 70%, 50%)",
          burger: 96,
          burgerColor: "hsl(51, 70%, 50%)",
          sandwich: 133,
          sandwichColor: "hsl(102, 70%, 50%)",
          kebab: 155,
          kebabColor: "hsl(235, 70%, 50%)",
          fries: 48,
          friesColor: "hsl(145, 70%, 50%)",
          donut: 133,
          donutColor: "hsl(346, 70%, 50%)",
        },
        {
          country: "AF",
          "hot dog": 34,
          "hot dogColor": "hsl(351, 70%, 50%)",
          burger: 167,
          burgerColor: "hsl(156, 70%, 50%)",
          sandwich: 99,
          sandwichColor: "hsl(327, 70%, 50%)",
          kebab: 159,
          kebabColor: "hsl(182, 70%, 50%)",
          fries: 196,
          friesColor: "hsl(124, 70%, 50%)",
          donut: 126,
          donutColor: "hsl(127, 70%, 50%)",
        },
        {
          country: "AG",
          "hot dog": 44,
          "hot dogColor": "hsl(351, 70%, 50%)",
          burger: 30,
          burgerColor: "hsl(59, 70%, 50%)",
          sandwich: 50,
          sandwichColor: "hsl(18, 70%, 50%)",
          kebab: 128,
          kebabColor: "hsl(136, 70%, 50%)",
          fries: 144,
          friesColor: "hsl(266, 70%, 50%)",
          donut: 16,
          donutColor: "hsl(109, 70%, 50%)",
        },
        {
          country: "AI",
          "hot dog": 140,
          "hot dogColor": "hsl(324, 70%, 50%)",
          burger: 81,
          burgerColor: "hsl(133, 70%, 50%)",
          sandwich: 23,
          sandwichColor: "hsl(270, 70%, 50%)",
          kebab: 196,
          kebabColor: "hsl(25, 70%, 50%)",
          fries: 37,
          friesColor: "hsl(121, 70%, 50%)",
          donut: 122,
          donutColor: "hsl(70, 70%, 50%)",
        },
        {
          country: "AL",
          "hot dog": 96,
          "hot dogColor": "hsl(5, 70%, 50%)",
          burger: 47,
          burgerColor: "hsl(78, 70%, 50%)",
          sandwich: 135,
          sandwichColor: "hsl(85, 70%, 50%)",
          kebab: 25,
          kebabColor: "hsl(88, 70%, 50%)",
          fries: 156,
          friesColor: "hsl(108, 70%, 50%)",
          donut: 100,
          donutColor: "hsl(78, 70%, 50%)",
        },
        {
          country: "AM",
          "hot dog": 5,
          "hot dogColor": "hsl(159, 70%, 50%)",
          burger: 161,
          burgerColor: "hsl(26, 70%, 50%)",
          sandwich: 0,
          sandwichColor: "hsl(101, 70%, 50%)",
          kebab: 12,
          kebabColor: "hsl(230, 70%, 50%)",
          fries: 192,
          friesColor: "hsl(130, 70%, 50%)",
          donut: 87,
          donutColor: "hsl(77, 70%, 50%)",
        },
      ].map((a) => {
        return { burger: a["burger"] };
      }),
    []
  );
  console.log(data);
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        height: "1000px",
        border: "1px solid black",
      }}
    >
      {/*<Bar />*/}
      {/*<Chart data={data} />*/}
      {/*<p>*/}
      {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi*/}
      {/*  expedita incidunt natus, odit perferendis quisquam ut voluptatum? Dolor*/}
      {/*  earum libero neque quia quo? Dolorum, maiores, perferendis. Aliquid,*/}
      {/*  delectus ea eius eos fuga, id iste sequi sit tempora temporibus vero*/}
      {/*  voluptas. Ad blanditiis eligendi eos fugit itaque, quibusdam.*/}
      {/*  Exercitationem explicabo fugiat laboriosam magnam numquam sed sit?*/}
      {/*  Aliquid consequatur dolore dolorem doloremque ducimus eius et eum facere*/}
      {/*  id impedit ipsa ipsam ipsum, laboriosam libero quia repellat suscipit*/}
      {/*  tempore vitae! Dicta dignissimos eaque eligendi enim illum iste itaque*/}
      {/*  iure magnam minima mollitia nobis, provident quod suscipit totam*/}
      {/*  voluptas. Magni molestiae odio repellat saepe.*/}
      {/*</p>*/}

      <Score />
    </div>
  );
}

export default App;
