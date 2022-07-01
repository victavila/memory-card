import React, { useEffect, useState} from "react";
import Cards from "./Cards";
import uniqid from "uniqid";

const jikanjs  = require('jikanjs');

export default function Main () {

  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await jikanjs.loadAnime(21, 'characters_staff');
    const characters = await response.characters.filter(character => character.role === "Main" || character.name === "Trafalgar, Law" || character.name === "Portgas D., Ace")
    characters.forEach(character => {
      setCharacters((prevArr) => [...prevArr, {name: character.name, image: character.image_url, id: uniqid()}])
    })
  }

  useEffect(() => {
    fetchCharacters();
  }, [])

  

  
    
  return (
    <main className="main">
      <Cards characters={characters} />
    </main>
  )
}