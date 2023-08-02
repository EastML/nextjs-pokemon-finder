"use client";

import { capitalize, formatName } from "@/app/utils";
import styled from "@emotion/styled";
import { Box, Button, Chip, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';

const HomeButton = styled(Button)({
    backgroundColor: '#333',
    '&:hover': {
        backgroundColor: '#000'
    }
})

const PokemonSummary = ({ pokemon }) => {
  const router = useRouter();

  const pokemonTypes = pokemon.types.map((t) => (
    <Chip key={t.type.name} label={t.type.name.toUpperCase()} sx={{ mr: 1 }} />
  ))
  const pokemonAbilities = pokemon.abilities.map((a) =>
    <Chip key={a.ability.name} label={formatName(a.ability.name + " ")} sx={{ mr: 1 }} />
  );

  const handleReturnHome = () => router.push("/");

  return (
    <section>
      <Box display="flex">
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          width="300"
          height="300"
          priority
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          ml={4}
          p={2}
        >
          <Typography variant="h4">{capitalize(pokemon.name)}</Typography>
          <Box>
            <Typography variant="h6">Pokedex Number: {pokemon.id}</Typography>
            <Typography variant="h6">Types: {pokemonTypes} </Typography>
            <Typography variant="h6">
              Height: {pokemon.height * 10} cm
            </Typography>
            <Typography variant="h6">
              Weight: {pokemon.weight / 10} kg
            </Typography>
            <Typography variant="h6">Abilities: {pokemonAbilities}</Typography>
          </Box>
        </Box>
        <Box ml="auto" p={2}>
          <HomeButton
            onClick={handleReturnHome}
            variant="contained"
            startIcon={<HomeIcon />}
          >
            Return to Home
          </HomeButton>
        </Box>
      </Box>
    </section>
  );
};

export default PokemonSummary;
