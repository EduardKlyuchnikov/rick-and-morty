import { useQuery } from "@apollo/client";
import { CHARACTERS_WITH_FILTERS } from "../apollo/quries";
import { CharactersResponce, CharactersVariables } from "../types";

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

  return <div>Home</div>;
};

export { Home };
