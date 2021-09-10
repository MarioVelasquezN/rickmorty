import React, {useState,useEffect} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
export default function ClasesCharacter(){
    const [character,setCharacter]=useState({
      
      info:{
        next:"",
        prev:""
      },
      results:[]
    });
    
    useEffect(() =>{
      
      function getCharacter(){
        fetch("https://rickandmortyapi.com/api/character")
      .then(data=>data.json()).then(data=>setCharacter(data));
      }
      getCharacter();
      
    },[]);

    function Siguiente(){
      if(character.info.next!==null){
        fetch(character.info.next).then(data=>data.json()).then(data=>setCharacter(data)).catch(error=>console.log(error));
      }else{
        alert("No hay mas");
      }
    }

    function Atras(){
      if(character.info.prev!==null){
        fetch(character.info.prev).then(data=>data.json()).then(data=>setCharacter(data)).catch(error=>console.log(error));
      }else{
        alert("No hay mas");
      }
    }

    return(
        <div>
        <table  className="table">
    <thead>
      <tr className="table-dark">
        <th scope="col">Character Name</th>
        <th scope="col">Character Status</th>
        <th scope="col">Character Specie</th>
        <th scope="col">Character Gender</th>
      </tr>
    </thead>    
    <tbody>
      {character.results.map((item, index) => {
        return (
            <tr className={index%2?"table-secondary":"table-default"}>
              <td>
                <Link to="/episode">{item.name}
                </Link>
                </td>
              <td >{item.status}</td>
              <td >{item.species}</td>
              <td >{item.gender}</td>
            </tr>
        );
      })}
    </tbody>
  </table>
  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <button className="btn btn-primary" onClick={Atras}>atras</button>
    <button  className="btn btn-danger" onClick={Siguiente}>Siguiente</button>
  </div>
  </div>
  )
}

