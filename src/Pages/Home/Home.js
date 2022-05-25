import React from "react";
// import Sidebar from "../../Components/sideBar/sideBar";
import "./Home.css";
import Graph from "../../images/graph.jpg";
import Istock from "../../images/istockphoto.jpg";
import Visa from "../../images/visa.jpg";
import Buy from "../../images/buyNow.jpg";
const Home = () => {
  return (
    <div className="homepage">
      <div className="page">
        {/* <h1 className="H">HomePage</h1> */}
        <div className="images">
          <div className="imgWrapper img-1">
            <h2>Statistic</h2>
            <img src={Graph} className="img-1" alt="" />
          </div>
          <div className="imgWrapper img-2">
            <h2>Card</h2>
            <img src={Visa} className="img-2" alt="" />
          </div>
          <div className="imgWrapper img-3">
            <h2>Review</h2>
            <img src={Istock} className="img-3" alt="" />
          </div>
          <div className="imgWrapper img-4">
            <h2>Buy</h2>
            <img src={Buy} className="img-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
