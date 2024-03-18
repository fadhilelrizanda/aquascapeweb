import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
function Homepage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <Sidebar />
          <Home />
        </div>
      </div>
    </>
  );
}

export default Homepage;
