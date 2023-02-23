import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Feb 1", uv: 4000 },
  { name: "Feb 2", uv: 3000 },
  { name: "Feb 3", uv: 2000 },
  { name: "Feb 4", uv: 4030 },
  { name: "Feb 5", uv: 1890 },
  { name: "Feb 6", uv: 2390 },
  { name: "Feb 7", uv: 3490 },
];

const Charts = () => {
  return (
    <div style={{ width: "100%" }}>
      <h3 style={{ padding: "0.5rem 0rem" }}>Last Month Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          stroke={"#475be8"}
          height={200}
          data={data}
          margin={{
            top: 0,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
