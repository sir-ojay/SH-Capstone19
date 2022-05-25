import React from "react";
// import Sidebar from '../../Components/sideBar/sideBar'
import "./Client.css";
import Profile1 from "../../images/profile1.jpg";
import Profile2 from "../../images/profile2.jpg";
import Profile3 from "../../images/profile3.jpg";
import Profile4 from "../../images/profile5.jpg";
import Profile5 from "../../images/profile6.jpg";

const data = [
  {
    name: "Micheal, Dare and Harber",
    email: "micheal.23@gmail.com",
    phone: "+6830224083692",
    gender: "Male",
    Image: Profile1,
  },
  {
    name: "Victor, Kate Henshaw ",
    email: "Kate.Victor@gmail.com",
    phone: "+6830224083692",
    gender: "Female",
    Image: Profile4,
  },
  {
    name: "Ibrahim, Abdullah Aderoke",
    email: "Ibrahim.234@gmail.com",
    phone: "+6830224083692",
    gender: "Male",
    Image: Profile3,
  },
  {
    name: "Von, Dare and Harber",
    email: "sammy.kunze@yahoo.com",
    phone: "+6830224083692",
    gender: "Male",
    Image: Profile2,
  },
  {
    name: "Ben , Kristy Treutel",
    email: "knicolas@gmail.com",
    phone: "+8932523247732",
    gender: "Female",
    Image: Profile5,
  },
];

function Clients() {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="App">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.gender}</td>
                <td>
                  {" "}
                  <img src={val.Image} className="client-image" alt="" />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Clients;
