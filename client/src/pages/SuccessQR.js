/* eslint-disable no-unused-vars */
import React from "react";

import Success from "../components/Success/Success";
import Navbar from "../components/Navbar/Navbar";

function SuccessQR() {
  return (
    <div className="bg-golf bg-no-repeat h-screen bg-fixed bg-cover">
      <div className="container mx-auto">
        <div className="flow-root ">
          <p className="text-center my-10 text-yellow-300 text-4xl">Course Events and Reminders</p>

          <p className="text-center text-black font-bold my-10 text-2xl">Remind Bushwood's Golfers:</p>
        </div>
      </div>

      <div className="container flow-root">
        <p className="text-center text-black font-bold mt-10 text-2xl">
          <h1>Please Remind Golfers:</h1>
          <ul>
            <li>Do not approach angry gophers!!</li>
            <li>Rake sand traps, fix divots, tread lightly on our greens.</li>
            <li>Access to the beer cart is a privilege, not a right, and it can be revoked!</li>
          </ul>
        </p>
      </div>
      <br></br>
      <div className="container flow-root">
        <p className="text-center text-yellow-900 font-bold mt-10 text-2xl">
          <h1>Upcoming Events:</h1>
          <ul>
            <li>Monday May 31, 2021: Memorial Day Shotgun Scramble Tournament</li>
            <li>July 4, 2021: Member Barbecue, Discounted Holiday Green Fees, and 9 pm fireworks.</li>
            <li>Saturday Night Prime Rib dinners for members through August 31st!</li>
          </ul>
        </p>
        <br></br>
        <p className="animate-bounce text-center font-bold  text-yellow-400 my-6 mb-10 text-2xl">
          Refer your friends to the Bushwood CC & Tee Time App!
        </p>
      </div>
    </div>
  );
}

export default SuccessQR;
