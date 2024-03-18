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

function Stat() {
  const generateData = (label: string, dataPoint: Object) => ({
    labels: [1, 2, 3, 4, 5],
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
  const data_temperature = generateData("Temperature", [1, 2, 3, 4, 5]);
  const data_pH = generateData("pH", [12, 32, 13, 44, 55]);
  const data_lamp = generateData("lamp", [12, 32, 13, 44, 55]);
  const data_co2 = generateData("CO2", [12, 32, 13, 44, 55]);
  const data_fan = generateData("fan", [12, 32, 13, 44, 55]);

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

        <div className="row mt-5 justify-content-center">
          <div className="col-10 graphcard">
            <h3>Lamp Graph</h3>
            <Line options={option_lamp} data={data_lamp} />
          </div>
        </div>
        {/* CO2 */}
        <div className="row mt-5 justify-content-center">
          <div className="col-10 graphcard">
            <h3>Fan Graph</h3>
            <Line options={option_fan} data={data_fan} />
          </div>
        </div>
        {/* Fan */}
        <div className="row mt-5 justify-content-center">
          <div className="col-10 graphcard">
            <h3>CO2 Graph</h3>
            <Line options={option_co2} data={data_co2} />
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
