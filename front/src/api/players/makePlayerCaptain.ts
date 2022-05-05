import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const makePlayerCaptain = async (playerId: number) => {
  try {
    const res = await axios.put(`${API_URL}/players/${playerId}/captain`);

    return res.data;
  } catch (error) {
    throw error;
  }
};
