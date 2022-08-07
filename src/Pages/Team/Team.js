import React from "react";
// import Sidebar from '../../Components/sideBar/sideBar'
import Profile from "../../images/profile1.jpg";
import Profile1 from "../../images/profile2.jpg";
import Profile2 from "../../images/profile3.jpg";
import Profile3 from "../../images/profile5.jpg";
import Profile4 from "../../images/profile6.jpg";

import { HiMail } from "react-icons/hi";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";

import "./team.css";
// Example of a data array that
// you might receive from an API
const data = [
  {
    name: "Micheal, Dare and Harber",
    email: "micheal.23@gmail.com",
    phone: "+6830224083692",
    gender: "Male",
    Image: Profile,
  },
  {
    name: "Victor, Kate Henshaw ",
    email: "Kate.Victor@gmail.com",
    phone: "+6830224083692",
    gender: "Female",
    Image: Profile3,
  },
  {
    name: "Ibrahim, Abdullah Aderoke",
    email: "Ibrahim.234@gmail.com",
    phone: "+6830224083692",
    gender: "Male",
    Image: Profile2,
  },
  {
    name: "Von, Dare and Harber",
    email: "sammy.kunze@yahoo.com",
    phone: "+6830224083692",
    gender: "Male",
    Image: Profile1,
  },
  {
    name: "Ben , Kristy Treutel",
    email: "knicolas@gmail.com",
    phone: "+8932523247732",
    gender: "Female",
    Image: Profile4,
  },
];

function App() {
  return (
    <>
      <div className="teamPage">
        {/* <table> */}
        {/* <thead>
            <tr style={{ border: "1px solid black" }}>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody> */}
        {data.map((val, key) => {
          return (
            <div className="teamMember" key={key}>
              <div className="teamMember__image">
                <img src={val.Image} className="" alt="" />
              </div>
              <div className="teamMember__details">
                <div className="teamMember__name">{val.name}</div>
                <div>
                  <HiMail /> {val.email}
                </div>
                <div>
                  <BsTelephoneInboundFill /> {val.phone}
                </div>
                <div>
                  <GoPerson /> {val.gender}
                </div>
              </div>{" "}
            </div>
          );
        })}
        {/* </tbody>
        </table> */}
      </div>
    </>
  );
}

export default App;
