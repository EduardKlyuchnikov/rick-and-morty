import { OperationVariables } from "@apollo/client";

export interface CharactersResponce {
  results: Character[];
  info: Info;
}

export interface CharacterResponce {
  character: Character;
}

export interface Character {
  id: string;
  type: string;
  gender: string;
  species: string;
  status: string;
  name: string;
  image: string;
  location: Location;
  episode?: Episode[];
}

export interface Location {
  name: string;
}

export interface Info {
  pages: number;
}

export interface Episode {
  episode: string;
  name: string;
}

export interface CharactersVariables extends OperationVariables {
  page: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  type?: string;
}

export interface CharacterByIdVariables extends OperationVariables {
  id: string;
}