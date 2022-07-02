import React, { useEffect, useState} from "react";
import Cards from "./Cards";
import Score from "./Score";
import uniqid from "uniqid";

const jikanjs  = require('jikanjs');

export default function Main () {
  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const [characters, setCharacters] = useState([]);

  const [names, setNames] = useState([]);

  const fetchCharacters = async () => {
    const response = await jikanjs.loadAnime(21, 'characters_staff');
    const characters = await response.characters.filter(character => character.role === "Main" || character.name === "Trafalgar, Law" || character.name === "Portgas D., Ace")
    characters.forEach(character => {
      setCharacters((prevArr) => [...prevArr, {name: character.name, image: character.image_url, id: uniqid()}])
    })
  }

  const shuffleArray = () => {
    let array = [...characters]

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    setCharacters(array);
  }

  const updateScores = (name) => {
    if (names.includes(name)) {
      setNames([]);
      setScore(0);
    } else {
      setNames(prevArray => [...prevArray, name]);
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      };
    }
  }

  const handleClick = (e) => {
    shuffleArray();
    const name = e.target.dataset.name;
    updateScores(name);
  }

  useEffect(() => {
    fetchCharacters();
  }, [])

  

  
    
  return (
    <main className="main">
      <Score score={score} bestScore={bestScore} />
      <Cards characters={characters} handleClick={handleClick}/>
    </main>
  )
}