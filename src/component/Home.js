import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = (props) =>{ 
    const [name,setUsername]=useState()
    
    const data =useParams()

    console.log(data);
    console.log(name);

    useEffect(()=>{
setUsername(data.dates)
},[])

return(
<div className="home">
    <h2>Welcome {name}</h2>

    </div>
)
}

export default Home;