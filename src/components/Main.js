import React, { useEffect, useState} from "react";

const jikanjs  = require('jikanjs');

export default function Main () {

  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await jikanjs.loadAnime(21, 'characters_staff');
    const characters = await response.characters.filter(character => character.role === "Main" || character.name === "Trafalgar, Law" || character.name === "Portgas D., Ace")
    characters.forEach(character => {
      setCharacters((prevArr) => [...prevArr, {name: character.name, image: character.image_url}])
    })
  }

  useEffect(() => {
    fetchCharacters();
  }, [])

  

  
    
  return (
    <main className="main"></main>
  )
}