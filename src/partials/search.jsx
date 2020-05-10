import React, { useState, useEffect, Fragment } from "react";
import Result from "./result";
import Save_Results from "./saved_results";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url] = useState("http://api.openweathermap.org/data/2.5/weather?q=");
  const [finalUrl, setFinalUrl] = useState();
  const [unit, setUnit] = useState("&units=metric");
  const ApiKey = "&appid=2da6f30081886f35583c6e666621288f";
  const [savedLocations, setSavedLocations] = useState([]);

  function handleSaveResult() {
    let auxSave = [...savedLocations];

    let auxDataUrl = [
      {
        url: finalUrl,
        data: data,
       
      },
    ];
    
    auxSave.push(auxDataUrl);
    setSavedLocations([...auxSave]);

    
  }


 const handleDelete=(pos)=>{
     console.log("display location returned",pos);
     let auxSave = [...savedLocations];
     auxSave.splice(pos,1);
      console.log("Mostrando Arreglo de Objetos", auxSave);
      setSavedLocations([...auxSave]);
 }





  useEffect(() => {
    if (!finalUrl) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await axios(finalUrl);
        setData(result.data);
      } catch (error) {}
      setIsLoading(false);
    };

    fetchData();
  }, [finalUrl]);

  function getFinalUrl() {
    let auxUrl = url.concat(query, unit, ApiKey);
    console.log("Construct Final url", auxUrl);

    setFinalUrl(auxUrl);
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-5 mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese Region o Ciudad"
              aria-describedby="button-addon4"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="input-group-append" id="button-addon4">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={getFinalUrl}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Result
          finalUrl={finalUrl}
          data={data}
          handleSaveResult={handleSaveResult}
        />
      )}
       <div className="row mt-5">
      {savedLocations.length > 0 ? (
        savedLocations.map((location,index) => 
          <Save_Results key={index} pos={index} location ={location} handleDelete={handleDelete}/>
        )
      ) : (
        <div></div>
      )}
      </div>
    </Fragment>
  );
}


