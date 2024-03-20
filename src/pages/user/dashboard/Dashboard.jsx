import React, { useState } from "react";
// import "../Side/Sidebar.css";
import "./Dashboard.css";
import garage from "../../../assets/garage-svgrepo-com.svg";
import lock from "../../../assets/lock-slash-svgrepo-com.svg";
import lock1 from "../../../assets/lock-svgrepo-com.svg";
import washing from "../../../assets/washing-machine-2-svgrepo-com.svg";
import fridge from "../../../assets/fridge-2-svgrepo-com.svg";
import tv from "../../../assets/tv-svgrepo-com.svg";
import { useSprings } from "@react-spring/web";
import { set, useForm } from "react-hook-form";
function Dashboard() {
  const [garag, setGarage] = useState(true);
  const handleGarageChange = (garag) => {
    let gar = garag.target.checked;
    {gar ? gar = false : gar = true }
    console.log(gar + ' garage is ');
    
  };




  const [Loc, setLock] = useState(true);
  const handleLockChange = (locker) =>{  setLock(locker.target.checked)  }

  const [Ligh, setLight] = useState(true);
  const handleLightChange = (ligh) => { setLight(ligh.target.checked)  };

  const [Light2, setLight2] = useState(true);
  const handleLighteChange = (ligh) => { setLight2(ligh.target.checked)  };



 

  return (
    <>
      <div className="contents">
        <div className="partion ">
          <div className="part1 mt-4 d-flex   align-content-center  justify-content-between  flex-nowrap align-content-center">
            <div className="d-flex  align-content-center justify-content-center p-4">
        {!Loc ? <img src={lock} alt="" className="garage-svg" /> : <img src={lock1} alt="" className="garage-svg" />}      
              <h6 className="card1-h">Security system</h6>
            </div>    
            <div className="d-flex  align-content-center justify-content-center p-4">
              <label className="switcher">
                <input type="checkbox" onChange={handleLockChange}  />
                <span className="slider" />
              </label>
            </div>
          </div>
          <div className="part1 mt-4 d-flex  justify-content-between  flex-nowrap align-content-center">
            <div className="d-flex  align-content-center justify-content-center p-4">
              <img className="lock-svg  ms-2 me-2" src={lock} alt="" />
              <img src={garage} alt="" className="garage-svg" />
              <h6 className="card1-h">Garage</h6>
            </div>
            <div className="d-flex  align-content-center justify-content-center p-4">
              <label className="switcher">
                <input type="checkbox" onChange={handleGarageChange} />
                <span className="slider" />
              </label>
            </div>
          </div>
        </div>

        <div className="maintools">
          <div className="part2 p-4 mt-4">
            <h5 className="card1-h">Lights - interior</h5>
            <div className="lights">
              <div className=" d-flex   align-content-center">
     {!Ligh ?  <i className='close-light fa-solid fa-lightbulb ' /> : <i className="lamp-light  fa-regular fa-lightbulb" /> }           
                <h6 className="card1-h">Kitchen</h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input type="checkbox" onChange={handleLightChange} />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="lights">
              <div className=" d-flex   align-content-center">
              {!Light2 ?  <i className='close-light fa-solid fa-lightbulb ' /> : <i className="lamp-light  fa-regular fa-lightbulb" /> }           

                <h6 className="card1-h">Kitchen</h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input type="checkbox" onChange={handleLighteChange} />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="lights">
              <div className=" d-flex   align-content-center">
                <i className=" fa-solid fa-lightbulb" />
                <h6 className="card1-h">Living room</h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input type="checkbox" disabled={true} />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="lights">
              <div className=" d-flex   align-content-center">
                <i className=" fa-solid fa-lightbulb" />
                <h6 className="card1-h">Bedroom</h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input type="checkbox" disabled={true}/>
                  <span className="slider" />
                </label>
              </div>
            </div>
            <div className="lights">
              <div className=" d-flex   align-content-center">
                <i className=" fa-solid fa-lightbulb" />
                <h6 className="card1-h">Bathroom</h6>
              </div>
              <div className="">
                <label className="switcher toggel-light">
                  <input type="checkbox" disabled={true} />
                  <span className="slider" />
                </label>
              </div>
            </div>
            <hr className="hr" />
            <div className="two-buttons">
              <button className="All-ON control-btns">All ON</button>
              <button className="control-btns">All OFF</button>
            </div>
          </div>
          <div className="  part2 p-4 mt-4 ">
            <h3 className=" card1-h">Appliances</h3>
            <hr className="margin-hr horizontal light mt-0 mb-2" />
            <div className="lights3">
              <div className=" d-flex  justify-content-around ">
                <div>
                  <img className="washing-svg" src={washing} alt="" />
                </div>
                <div>
                  <h6 className="card3-h6">Washing machine</h6>
                  <p className="card3-p">Remaining time</p>
                </div>
                <div className="">
                  <p className="card3-p2">OFF</p>
                  <p className="card3-p">666</p>
                </div>
              </div>
            </div>
            {/* ---------------repeate----------- */}
            <hr className="margin-hr horizontal light mt-0 mb-2" />
            <div className="lights3">
              <div className="   d-flex justify-content-around  align-content-around">
                <div>
                  <img className="washing-svg" src={fridge} alt="" />
                </div>
                <div>
                  <h6 className="card3-h6">Fridge</h6>
                  <p className="card3-p">Temperature</p>
                </div>
                <div className="">
                  <p className="card3-p2">OFF</p>
                  <p className="card3-p">35°F</p>
                </div>
              </div>
            </div>
            <hr className="margin-hr horizontal light mt-0 mb-2" />
            <div className="lights3">
              <div className="   d-flex justify-content-around  align-content-around">
                <div>
                  <img className="washing-svg" src={tv} alt="" />
                </div>
                <div>
                  <h6 className="card3-h6">TV</h6>
                </div>
                <div className="">
                  <p className="card3-p2">OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
