import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/body";
import axios from "axios";


function App() {

  const [nasaInfo, setNasaStats] = useState([""]);
  

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=bNEndKHSiIA8faNAtZ98oeEtkLQHGt72udc1KJbA"
      )
      .then(resp => {
        // return null;
        console.log("nasa data -- ", resp.data.hdurl);
        setNasaStats(resp.data);
      })
      .catch(error => {
        // return null;
        console.log("nasa data error -- ", error);
      });
  }, []);


  return (
    <div className="App">
    {/* styles={{ backgroundImage:`url(${props.data.hdurl})`}} */}
      <Body data={nasaInfo} />
    </div>
  );
}

export default App;
