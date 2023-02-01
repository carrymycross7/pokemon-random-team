import {useEffect, useState} from "react";

export const PokemonCard = () => {
  
  fetch('/api/pokemon').then(res => res.json()).then(data => console.dir(data));
  
  let pokemon_team_slots = ["pokemon_1","pokemon_2","pokemon_3","pokemon_4","pokemon_5","pokemon_6"];
  return (pokemon_team_slots.map((slot) => {
    return <h1>{slot}</h1>
  }))
}