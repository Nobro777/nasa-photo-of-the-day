import React, {useState, useEffect} from "react";
import axios from "axios";

const Body = props => {

const [image, setImage] = useState(props.data.hdurl);

useEffect(() => {
    axios
        .get(
            "https://api.nasa.gov/planetary/apod?api_key=bNEndKHSiIA8faNAtZ98oeEtkLQHGt72udc1KJbA"
        )
        .then(resp => {
            // return null;
            console.log("nasa data -- ", resp)
            // setImage(resp.data.hdurl)
        })
        .catch(error => {
            // return null;
            console.log("nasa data error -- ", error)
        });
    }, []);



    return (
    <h1>
        
    </h1>
    )
}

export default Body;