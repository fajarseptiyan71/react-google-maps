import React from "react";
import {
  DoughnutChart,
  HorizontalBar,
  MapVector,
  MultitypeChart,
} from "../../components";

export default function Chart() {
  return (
    <div style={{ margin: "50px 50px 50px 50px" }}>
      <div style={{ height: "20%", width: "20%" }}>
        <DoughnutChart
          datasetLabel={"example"}
          labels={["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]}
          datas={[12, 19, 3, 5, 2, 3]}
          backgroundColor={[
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ]}
          borderColor={[
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ]}
          legendPosition="left"
        />
      </div>
      <div style={{ height: "20%", width: "20%" }}>
        <HorizontalBar
          datasetLabel="Dataset 1"
          labels={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ]}
          datas={[20, 90, 12, 100, 30, 80, 99]}
          backgroundColor={"rgba(255, 99, 132, 0.5)"}
          legendPosition={"bottom"}
        />
      </div>
      <div style={{ height: "20%", width: "20%", marginTop: "50px" }}>
        <MapVector />
      </div>
      <div style={{ height: "20%", width: "20%", marginTop: "50px" }}>
        <MultitypeChart />
      </div>
    </div>
  );
}
