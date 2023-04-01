import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashBoard = () => {
  const MarksArray = [
    { name: "Alice", physics: 90, chemistry: 85, math: 95 },
    { name: "Bob", physics: 70, chemistry: 80, math: 75 },
    { name: "Charlie", physics: 80, chemistry: 75, math: 85 },
    { name: "David", physics: 60, chemistry: 70, math: 65 },
    { name: "Emily", physics: 95, chemistry: 90, math: 98 },
    { name: "Frank", physics: 85, chemistry: 80, math: 90 },
    { name: "Grace", physics: 70, chemistry: 65, math: 75 },
    { name: "Harry", physics: 80, chemistry: 75, math: 85 },
    { name: "Isabella", physics: 75, chemistry: 80, math: 70 },
    { name: "Jack", physics: 85, chemistry: 90, math: 95 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={MarksArray}>

        <Line dataKey="math" stroke="#8884d8"></Line>
        <Line dataKey="physics" stroke="#8884d8"></Line>
        <Line dataKey='chemistry'></Line>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default DashBoard;
