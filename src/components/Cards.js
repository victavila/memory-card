export default function Cards ({characters, handleClick}) {
  
  return (
    <div className="cards">
      {characters.map(character => (
        <div data-name={character.name} className="card" key={character.id} onClick={handleClick}>
          <img src={character.image} alt={character.name} data-name={character.name}></img>
          <h3 className="character-name" data-name={character.name}>{character.name}</h3>
        </div>
      ))}
    </div>
  )
}