import React,{useState,useEffect} from "react";


export default function ClaseEpiso(){
    const [episode,setEpisode]=useState({
        info:{},
        results:[]
    });

    useEffect(() =>{
        function getEpisode(){
            fetch("https://rickandmortyapi.com/api/episode")
            .then(dato=>dato.json())
            .then(dato=>setEpisode(dato));
        }
        getEpisode();
    },[]);

    return (
        <div className="">
        <h1 className="Header">Episode List</h1>
        <div>
        <table  className="table">
    <thead>
      <tr className="table-dark">
        <th scope="col">Name</th>
        <th scope="col">air_date</th>
        <th scope="col">Episode</th>
      </tr>
    </thead>    
    <tbody>
      {episode.results.map((item, index) => {
        return (
            <tr className={index%2?"table-secondary":"table-default"}>
              <td >{item.name}</td>
              <td >{item.air_date}</td>
              <td >{item.episode}</td>
            </tr>
        );
      })}
    </tbody>
  </table>
  </div>
  </div>
    )
}