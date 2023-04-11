import React from "react";
import "./payment.css";
import Button from "../button/Button";


function Payment() {
  return (
    <>
      <div>
        <div className="header flex flex-row ">
          <div className="header-title">
            <div className="header-title-text">
              <p>Choose the form of payment</p>
            </div>
          </div>
          <div className="btn">
            <button>
              <img src="icons/cross.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
          <div className="mainContact">
            <div className="contact">
              <div>
                <img src="icons/avatar.png" alt="" />
              </div>
              <div className="contactName">
                <div>
                  <label className="contactDetail" htmlFor="">
                    John
                  </label>
                  <label className="contactNum" htmlFor="">
                    (88) 99602-2404
                  </label>
                </div>
                <button className="Logoutbtn">
                  {" "}
                  <span className="logout">Log out </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="servicesMain">
          <label className="services" htmlFor="">
            Selected service
          </label>
        </div>
        <div className="mainContact">
          <div className="contactMain">
            <div style={{ padding: "9px", paddingLeft:"14px" }}>
              <img style={{ width: "100%" }} src='icons/img.png' alt="" />
            </div>
            <div className="contactMaindiv">
              <div>
                <label className="contactcard" htmlFor="">
                  Japanese lessons
                </label>
                <div style={{ display: "flex" }}>
                  <img
                    style={{ padding: "5px" }}
                    src="icons/icon_calendar.svg"
                  ></img>
                  <label className="datetop" htmlFor="">
                    {" "}
                    Nov 7, 2020 · 11:30
                  </label>
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    style={{ padding: "5px" }}
                    src="icons/icon_location.svg"
                  ></img>
                  <label className="date" htmlFor="">
                    Client`s place
                  </label>
                </div>
                <div style={{ padding: "2px" }}>
                  <label className="rate" htmlFor="">
                    Rp 350.000
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", paddingLeft: "38px" }}
        >
          <form action="">
            <div>
              <label className="locationdiv" htmlFor="">
                Enter your location
              </label>
            </div>
            <input
              className="inputAdress"
              type="text"
              placeholder="Enter Adress"
            />
            <div>
              <label className="locationdiv" htmlFor="">
                Note (optional)
              </label>
            </div>
            <input
              className="inputAdress"
              type="text"
              placeholder="Enter Adress"
            />
          </form>
        </div>
      </div>
        <div className="mainContact">
            <div className="payment-choose">
          <p>Choose a way to pay</p>
        </div>
        </div>
        
        <div className="flex flex-row bg-white-400">
          <Button
            buttonText="Cash"
            backgroundColor="#FFFFFF"
            borderColor="#262626"
          />
          <Button buttonText="Credit card" />
        </div>
        <div>
            <Button buttonText="eWallet/ Virtual bank" />
        </div>
        <div className="mainContact">
            <div className="flex items-center mb-4 ">
            <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                <a className="text-blue-500" href="#">
                do eiusmod
                </a>
            </label>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
        <div className="flex flex-row justify-between">
          <Button buttonText="Previous" backgroundColor="#FFFFFF" />
          <Button
            buttonText="Next"
            backgroundColor="#1E21FF"
            fontColor="white"
          />
        </div>
    </>
  );
}

export default Payment;
