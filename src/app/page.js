import Image from "next/image";
import PokemonGrid from "./_components/PokemonGrid";
import { getPokemonList } from "./api";

const Home = async () => {
  const pokemonList = await getPokemonList();

  return (
    <div>
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
};

export default Home;
