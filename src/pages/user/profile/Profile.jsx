import React from "react";
import "./profile.css";
function Profile() {
  return (
    <div className="contents">
      <section id="">
        <div className="part1 w-100 h-100" >
          <div className="section-title   m-5">
            <h2>About</h2>
          </div>
          <div className="contents">
            <div className="lista">
              <ul>
                <li>
                  <i className="fa-solid fa-circle-chevron-right" />
                  <strong>Birthday:</strong> <span>1 May 1998</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-chevron-right" />
                  <strong>Email:</strong>
                  <span>yousraamostaffa010@gmail.com</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-chevron-right" />
                  <strong>Phone:</strong>
                  <span>123 456 7890</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-chevron-right" />
                  <strong>City:</strong>
                  <span> Aswan , Egypt</span>
                </li>
              </ul>
            </div>
            <div className="lista">
              <ul>
                <li>
                  <i className="fa-solid fa-circle-chevron-right" />
                  <strong>Age:</strong>
                  <span>25</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-chevron-right" />
                  <strong>Gender:</strong>
                  <span>Femail</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-chevron-right" />
                  <strong>Points:</strong> <span>100</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-chevron-right" />
                  <strong>Status:</strong>
                  <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
