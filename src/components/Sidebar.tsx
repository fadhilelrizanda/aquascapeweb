import { GoHome } from "react-icons/go";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <>
      <div className="col-4 line_content sidebar">
        <h3 className="mt-5 mb-5">FE Aquascape</h3>
        <ul>
          <li>
            <a href="/">
              {" "}
              <GoHome /> Home
            </a>
          </li>
          <li>
            <a href="/statistics">
              <IoStatsChartOutline /> Statistic
            </a>
          </li>
          <li>
            <a href="#">
              <IoSettingsOutline /> Setting
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <IoAddCircleOutline /> Feature 1
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <IoAddCircleOutline />
              Feature 2
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
