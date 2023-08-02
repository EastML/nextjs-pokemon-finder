"use client";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { capitalize } from "../utils";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link href={pokemon.name} style={{ textDecoration: "none" }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="h6" align="center">
              {capitalize(pokemon.name)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default PokemonCard;
