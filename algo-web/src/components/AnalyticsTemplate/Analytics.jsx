import "./Analytics.css";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  PieChart,
  Pie,
  LineChart,
  YAxis,
  Line,
} from "recharts";

const Analytics = ({
  chart_i,
  chart_ii,
  chart_iii,
  title,
  value,
  illustration,
}) => {
  const data = [
    {
      name: "Sept",
      Loss: 4000,
      Profit: 2400,
    },
    {
      name: "Oct",
      Loss: 3000,
      Profit: 1398,
    },
    {
      name: "Nov",
      Loss: 2000,
      Profit: 9800,
    },
    {
      name: "Dec",
      Loss: 2780,
      Profit: 3908,
    },
  ];
  const data02 = [
    {
      profit: 4000,
      loss: 2400,
    },
    {
      profit: 3000,
      loss: 1398,
    },
    {
      profit: 2000,
      loss: 4000,
    },
    {
      profit: 2780,
      loss: 3908,
    },
    {
      profit: 1890,
      loss: 2000,
    },
  ];

  const data03 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data04 = [
    {
      name: "Group A",
      value: 2000,
    },
    {
      name: "Group B",
      value: 3567,
    },
    {
      name: "Group C",
      value: 598,
    },
    {
      name: "Group D",
      value: 2000,
    },
    {
      name: "Group E",
      value: 1000,
    },
    {
      name: "Group F",
      value: 2500,
    },
  ];
  return (
    <div className="analytics">
      {chart_i && (
        <>
          <header>
            <span className="profit">Profit</span>
            <span className="loss">Loss</span>
          </header>

          <BarChart className="chart" width={250} height={210} data={data}>
            <CartesianGrid strokeDasharray="100 10" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Profit" fill="#20b50d" />
            <Bar dataKey="Loss" fill="#ed1811" />
          </BarChart>
        </>
      )}

      {chart_ii && (
        <LineChart
          width={260}
          height={220}
          data={data02}
          margin={{ right: 10, top: 10 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="profit" stroke="#20b50d" />
          <Line type="monotone" dataKey="loss" stroke="#ed1811" />
        </LineChart>
      )}

      {chart_iii && (
        <PieChart width={300} height={300}>
          <Pie
            data={data03}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#20b50d"
          />
          <Pie
            data={data04}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#03a60e"
            label
          />
        </PieChart>
      )}

      {title && (
        <>
          <h1 className="title">Points to remember</h1>
        
         
        </>
      )}
    </div>
  );
};

export default Analytics;
