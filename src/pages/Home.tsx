import { useQuery } from "@apollo/client";
import { CHARACTERS_WITH_FILTERS } from "../apollo/quries";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { CharactersResponce, CharactersVariables } from "../types";
import CharacterCard from "../components/Characters/CharacterCard";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";

const Home = () => {
  const {
    data,
    loading,
    error,
    refetch: refetchCharacters,
  } = useQuery<CharactersResponce, CharactersVariables>(
    CHARACTERS_WITH_FILTERS,
    {
      variables: {
        page: 1,
      },
    },
  );

  return (
    <MainWrapper>
      <>
        {loading && <>loading</>}
        {error && <>error</>}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 24 }}
        >
          {data &&
            data.characters.results.map((character) => (
              <Grid item xs={4} sm={4} xl={4}>
                <CharacterCard key={character.id} {...character} />
              </Grid>
            ))}
        </Grid>
      </>
    </MainWrapper>
  );
};

export { Home };
