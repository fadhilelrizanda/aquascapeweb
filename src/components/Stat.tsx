import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";
const generateOptions = (yAxisTitle: string) => ({
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: yAxisTitle,
      },
    },
  },
});

export const option_temperature = generateOptions("Temperature");
export const option_ph = generateOptions("pH");
export const option_lamp = generateOptions("lamp");
export const option_fan = generateOptions("Fan");
export const option_co2 = generateOptions("CO2");

const processDeviceStat = (rawData: any[]) => {
  const dates = rawData.map((item) =>
    moment(item.updatedAt).format("YYYY-MM-DD HH:mm:ss")
  );
  const Temp = rawData.map((item) => item.Temp);
  const pH = rawData.map((item) => item.pH);
  const LampTime = rawData.map((item) => item.LampTime);
  const FanTime = rawData.map((item) => item.FanTime);
  const CO2Time = rawData.map((item) => item.CO2Time);
  // console.log(power.slice(1, 10));
  return { dates, Temp, pH, LampTime, FanTime, CO2Time };
};

function Stat() {
  const [deviceStat, setDeviceStat] = useState([]);

  const deviceGet = async () => {
    axios
      .get("https://aquascape-api.vercel.app/device/getAll")
      .then((response) => {
        setDeviceStat(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const generateData = (dates: any, dataPoint: any, label: string) => ({
    labels: dates,
    datasets: [
      {
        label: label,
        data: dataPoint,
        borderColor: "rgb(118, 171, 174)",
        backgroundColor: "rgb(238, 238, 238)",
        tension: 0.3,
      },
    ],
  });
  useEffect(() => {
    const interval = setInterval(() => {
      deviceGet();
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
    // Fetch data from the API using Axios
  }, []);
  const deviceChartData = processDeviceStat(deviceStat);
  console.log(deviceChartData);

  const data_temperature = generateData(
    deviceChartData.dates,
    deviceChartData.Temp,
    "Temperature"
  );

  const data_pH = generateData(deviceChartData.dates, deviceChartData.pH, "pH");

  return (
    <>
      <div className="col-8 content mt-5">
        <h3>Statistics</h3>
        {/* temperature */}
        <div className="row mt-5 justify-content-center">
          <div className="col-10 graphcard">
            <h3>Temperature Graph</h3>
            <Line options={option_temperature} data={data_temperature} />
          </div>
        </div>
        {/* pH */}
        <div className="row mt-5 justify-content-center">
          <div className="col-10 graphcard">
            <h3>pH Graph</h3>
            <Line options={option_ph} data={data_pH} />
          </div>
        </div>

        <div className="row">
          <div className="table-content mt-5">
            <table className="table table-primary">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Temperature</th>
                  <th scope="col">pH</th>
                  <th scope="col">Lamp</th>
                  <th scope="col">Fan</th>
                  <th scope="col">CO2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
