import React, { useState } from "react";
import "./Qualifications.css";

const Qualifications = () => {
  const [toogleState, setToogleState] = useState(1);
  const toogleTab = (index) => {
    setToogleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toogleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=> toogleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toogleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=> toogleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toogleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BTech (CSE)</h3>
                <span className="qualification__subtitle">
                  {" "}
                  JK Lakshmipat University, Rajasthan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020-2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Sir Padampat Singhania School, Rajasthan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>
            </div>
          </div>

          <div className={
              toogleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Data Engineer Intern</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Deepklarity, Bangalore (Remote)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
