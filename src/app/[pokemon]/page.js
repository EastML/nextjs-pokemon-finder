import { Grid } from "@mui/material";
import { getPokemon } from "../api";
import PokemonSummary from "./_components/PokemonSummary";
import PokemonStats from "./_components/PokemonStats";
import PokemonMoveList from "./_components/PokemonMoveList";
import { separateMoves } from "../utils";

const PokemonPage = async ({ params }) => {
  const pokemon = await getPokemon(params.pokemon);
  const categorizedMoves = separateMoves(pokemon.moves)
  
  return (
    <>
      <PokemonSummary pokemon={pokemon} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
            <PokemonStats name={pokemon.name} stats={pokemon.stats} />
        </Grid>
        <Grid item xs={12} sm={9}>
            <PokemonMoveList moves={categorizedMoves} />
        </Grid>
      </Grid>
    </>
  );
};

export default PokemonPage;
