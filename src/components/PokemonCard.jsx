export const PokemonCard = () => {
  let pokemon_team_slots = ["pokemon_1","pokemon_2","pokemon_3","pokemon_4","pokemon_5","pokemon_6"];
  return (pokemon_team_slots.map((slot) => {
    return <h1>{slot}</h1>
  }))
}