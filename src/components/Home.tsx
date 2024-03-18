import cardImage1 from "../assets/img1.jpg";
import cardImage2 from "../assets/img2.jpg";
import cardImage3 from "../assets/img3.jpg";
import cardImage4 from "../assets/img4.jpg";
import cardImage5 from "../assets/img5.jpg";

function Home() {
  return (
    <>
      <div className="col-8 content mt-5">
        <h3>Current Parameter</h3>
        <div className="row mt-5">
          <div className="col-4 temp">
            <div className="card">
              <img src={cardImage1} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Temperature : x Celcius</p>
              </div>
            </div>
          </div>
          <div className="col-4 pH">
            <div className="card">
              <img src={cardImage2} className="img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">pH : x </p>
              </div>
            </div>
          </div>
          <div className="col-4 lamp">
            <div className="card">
              <img src={cardImage3} className="img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">Lamp : x </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 CO2">
            <div className="card">
              <img src={cardImage4} className="img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">CO2 : x </p>
              </div>
            </div>
          </div>
          <div className="col-4 fan">
            <div className="card">
              <img src={cardImage5} className="img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">fan : x </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
