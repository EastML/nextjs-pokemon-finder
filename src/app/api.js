const BASE_POKEMON_API = "https://pokeapi.co/api/v2/";

export const getPokemonList = async () => {
  try {
    const response = await fetch(
      BASE_POKEMON_API + "pokemon?limit=251&offset=0",
    );
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error("There was an error fetching your list of pokemon");
    return [];
  }
};

export const getPokemon = async (name) => {
  try {
    const response = await fetch(BASE_POKEMON_API + `pokemon/${name}`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error("There was an error fetching your pokmeon");
    return {};
  }
};
