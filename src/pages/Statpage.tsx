import Sidebar from "../components/Sidebar";
import Stat from "../components/Stat";
function Statpage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <Sidebar />
          <Stat />
        </div>
      </div>
    </>
  );
}

export default Statpage;
