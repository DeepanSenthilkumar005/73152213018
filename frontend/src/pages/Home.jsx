import React,{useState} from 'react'
import axios from "axios";
import "./Home.css"
function Home() {
    const [url,setUrl] = useState("");
const handleShort = async()=>{
    try{

        const response = await axios.post("http://localhost:8000/api/shorten",{url})
    }
}

  return (
    <section className='Home'>
        <div className="container">
            <center>Url Shorterner</center>
            <br />

            <label htmlFor="url">Enter the URL : </label>
            <input value={url} onChange={(e)=>setUrl(e.target.value)} type="text" className='homeText' />
            <button onClick={handleShort} className='btn'>Submit</button>
        </div>
    </section>
  )
}

export default Home