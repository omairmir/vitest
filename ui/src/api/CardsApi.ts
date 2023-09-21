import { fetcher } from "@/mixos";

class CardBaseApi {
  constructor() {}
  getCards = async (param = 0): Promise<CardResponseSchema> => {
    await setTimeout(() => {}, 2000);
    const res = await fetcher.get("api/cards?offset=" + param);
    return res.data;
  };
}
export type CardResponseSchema = {
  status: number;
  cards: Card[];
  nextCursor: number;
};
interface Card {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  supertype: string;
  subtype: string;
  hp: string;
  retreatCost: string[];
  convertedRetreatCost: number;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: Attack[];
  resistances: Resistance[];
  weaknesses: Weakness[];
}

interface Attack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

interface Resistance {
  type: string;
  value: string;
}

interface Weakness {
  type: string;
  value: string;
}

export const cardApi = new CardBaseApi();
