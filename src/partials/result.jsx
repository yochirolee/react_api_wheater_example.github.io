import React, { useState, useEffect, Fragment } from "react";


export default function Result(props) {
 

  if (props.data.sys) {
    const { name, sys, main, wind, clouds } = props.data;
    var flagUrl = 'https://www.countryflags.io/'+sys.country+'/flat/64.png' ;
    return (
      <Fragment>
        <div className="row ">
          <div className="card mb-3 mt-5  mx-auto" style={{ width: "540px" }}>
            <div className="row no-gutters">
              <div className="col-md-12">
                <div className="row mt-2">
                  <div className="col">
                    <h4 className="card-title mt-2 ml-5">
                    <img src={flagUrl}  className="rounded mr-2 country-flag" alt="..."></img>
                      {name},<span className="text-muted">{sys.country}</span>
                    </h4>
                  </div>
                  <div className="col-5 text-right mr-4">
                    <h6>
                      <i className="wi wi-thermometer "></i>
                      <span className="badge badge-secondary mr-2">
                        {main.temp}
                      </span>
                      <a className="bolder">°C</a> | <a>°F</a>
                    </h6>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row text-center">
                    <div className="col">
                      <i className="wi wi-day-hail"></i>{" "}
                      <strong>{main.pressure}hpa</strong>
                    </div>
                    <div className="col">
                      <i className="icon icon-wrap wi wi-strong-wind"></i>{" "}
                      <strong>{wind.speed}m/s</strong>
                    </div>
                    <div className="col">
                      <i className=" wi wi-cloudy "></i>{" "}
                      <strong>{clouds.all}%</strong>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="card-text pt-3 ">
                      <small className="text-muted">
                        {" "}
                        temperature from {main.temp_min} to {main.temp_max} °С,
                        feels like {main.feels_like}
                      </small>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="card-text pt-3 mx-auto ">
                      <button
                        className="btn-save fa fa-save"
                        onClick={props.handleSaveResult}
                      ></button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </Fragment>
    );
  } else return <div></div>;
}
