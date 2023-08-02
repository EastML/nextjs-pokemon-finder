"use client";

import { useEffect, useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import PokemonCard from "./PokemonCard";

const PokemonGrid = ({ pokemonList }) => {
  const [query, setQuery] = useState("");
  const [pokeList, setPokeList] = useState(pokemonList);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const filterPokemon = () => {
    const foundPokemon = pokemonList.filter(({ name }) => {
      return name.includes(query);
    });
    setPokeList(foundPokemon);
  };

  useEffect(() => {
    filterPokemon();
    //eslint-disable-next-line
  }, [query]);

  return (
    <section>
      <Box mb={2}>
        <Typography variant="h5">Search for your Pokemon</Typography>
        <TextField
          value={query}
          onChange={handleQueryChange}
          variant="outlined"
          label="Pokemon Name"
          size="small"
          fullWidth
          placeholder="Charizard, Pikachu, etc."
          autoComplete="off"
        />
      </Box>

      {pokeList.length > 0 ? (
        <Grid container spacing={1}>
          {pokeList.map((pokemon) => (
              <Grid item xs={6} sm={4} md={2} key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>Sorry, no pokemon found.</Typography>
      )}
    </section>
  );
};

export default PokemonGrid;
