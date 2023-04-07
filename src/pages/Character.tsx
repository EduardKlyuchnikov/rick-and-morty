import { useQuery } from "@apollo/client";
import { CHARACTER_BY_ID } from "../apollo/quries";
import { CharacterByIdVariables, CharacterResponce } from "../types";
import { Navigate, useParams } from "react-router";
import MainWrapper from "../components/MainWrapper/MainWrapper";

const Character = () => {
  const { id } = useParams();
  if (!id) {
    return <Navigate to="/home" />;
  }
  const { data, loading, error, refetch } = useQuery<
    CharacterResponce,
    CharacterByIdVariables
  >(CHARACTER_BY_ID, {
    variables: {
      id,
    },
  });

  return <MainWrapper>Character</MainWrapper>;
};

export { Character };
