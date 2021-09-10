import React, { useEffect, useState } from 'react';
import ClaseEpisode from './ClaseEpisode';

export default function DetallesEpisode(){
    const [episod,setEpidod]=useState({
        info:{
          next:"",
          prev:""
        },
        results:[]
      });
      
      useEffect(() =>{
        function getCharacter(){
          fetch("https://rickandmortyapi.com/api/character")
        .then(data=>data.json()).then(data=>setEpidod(data));
        }
        getCharacter();
        
      },[]);

    return(
         episod.results.map((item)=>{
        return(
            <div>
                <h1>Character Detail</h1>
                <h3>Name {item.name}</h3>
                <h3>Status {item.status}</h3>
                <h3>Specie {item.specie}</h3>
                <h3>Gender {item.gender}</h3>
                <ClaseEpisode></ClaseEpisode>
            </div>
        );
    })
    )
}