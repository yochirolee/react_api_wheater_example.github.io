import React, { useState, useEffect, Fragment } from "react";


export default function Save_Results(props) {


  let  [timePass,setTimePass]=useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
        setTimePass(timePass+60)
      console.log('This will run every second!');console.log(timePass);
    }, 60000);
    
    
    return () => clearInterval(interval);
    
  }, [timePass]);


  function formatTime(secs) {
    let hours   = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    return [hours, minutes, seconds]
        .map(v => ('' + v).padStart(2, '0'))
        .filter((v,i) => v !== '00' || i > 0)
        .join(':');
  }





    if (!props) return;

  if (props.location[0].data.sys) {
    const { name, sys, main, wind, clouds } = props.location[0].data;
    var flagUrl = 'https://www.countryflags.io/'+sys.country+'/flat/64.png' ;
    return (
      <div className="col-md-3 col-sm-12 mt-2">
        <div
          className="my-toast toast"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src={flagUrl}  className="rounded mr-2 country-flag" alt="..."></img>
            
            <strong className="mr-auto">
              {name},{sys.country}
            </strong>
            <small>{formatTime(timePass)} mins ago</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
              onClick={()=>props.handleDelete(props.pos)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="toast-body text-center">
            <div className="row">
              <div className="col">
                <i className="wi-thermometer-exterior"></i>{" "}
                <strong>{main.temp}C</strong>
              </div>

              <div className="col">
                <i className="wi wi-day-hail"></i>{" "}
                <strong>{main.pressure}hpa</strong>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <i className="icon icon-wrap wi wi-strong-wind"></i>{" "}
                <strong>{wind.speed}m/s</strong>
              </div>
              <div className="col">
                <i className=" wi wi-cloudy "></i>{" "}<br></br>
                <strong >{clouds.all} % </strong>
              </div>
            </div>
            <div className="row text-center">
                <button className="btn-save fa fa-repeat mx-auto"></button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
