import axios from "axios";
import { TPlayer } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

export type TCreatePlayerParams = {
  year: number;
  player: Omit<TPlayer, "id" | "isCaptain">;
};

export const createPlayer = async ({ year, player }: TCreatePlayerParams) => {
  try {
    const res = await axios.post(`${API_URL}/team/${year}`, player);

    return res.data;
  } catch (error) {
    throw error;
  }
};
