export default function Cards ({characters}) {
  return (
    <div className="cards">
      {characters.map(character => (
        <div className="card" key={character.id}>
          <img src={character.image} alt={character.name}></img>
          <h3 className="character-name">{character.name}</h3>
        </div>
      ))}
    </div>
  )
}