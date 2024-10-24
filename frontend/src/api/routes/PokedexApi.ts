import { BadgeType } from "../../enum/badgeEnum";
import { api } from "../axios/axios";

const resource = "/pokemons";

export interface PokemonType {
  id: number;
  name: string;
  sprite: string;
  spriteShiny: string;
  type1: BadgeType;
  type2: BadgeType;
  hp: number;
  atk: number;
  spatk: number;
  def: number;
  spdef: number;
  speed: number;
}

// interface ParamsType {
//   limit: number;
//   offset: number;
//   page: number;
// }

const getPokemon = async () => {
  // params: { limit: 10, offset: 0, page: 1 }
  return await api.get(`${resource}`);
};

export const pokemonApi = {
  getPokemon,
};
