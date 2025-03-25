function PokemonCard({pokemon}) {

  const getPokemonType = (pokemon) => {
    if(pokemon.type.length < 2) {
      return pokemon.type[0].name
    } else {
      return `${pokemon.type[0].name} / ${pokemon.type[1].name}`;
    }
  }

  return (
    <article className="card">
      <div className="card__top">
        <img
          src={pokemon.image}
          alt={`Picture of ${pokemon.name}`}
          className="card__img"
          style={{ backgroundColor : pokemon.type[0].color}}
        />
        <span className="card__index">#{pokemon.id}</span>
      </div>
      <div className="card__middle">
        <h3 className="card__pokemon-name">{pokemon.name}</h3>
        <h4>
          {
            pokemon.type.length < 2
            ? pokemon.type[0].name
            : `${pokemon.type[0].name} / ${pokemon.type[1].name}`
          }
        </h4>
      </div>
      <div className="card__bottom">
        <p className="card__stat">Attack: {pokemon.stats.attack}</p>
        <p className="card__stat">Defense: {pokemon.stats.defense}</p>
        <p className="card__stat">Sp. Attack: {pokemon.stats.specialAttack}</p>
        <p className="card__stat">Sp. Defense: {pokemon.stats.specialDefense}</p>
        <p className="card__stat">HP: {pokemon.stats.hp}</p>
        <p className="card__stat">Speed: {pokemon.stats.speed}</p>
        <p className="card__stat card__stat--span-two">Total: {pokemon.stats.total}</p>
      </div>
    </article>
  )
}

export default PokemonCard;
