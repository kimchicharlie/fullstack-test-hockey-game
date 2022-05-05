import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const deletePlayerById = async (playerId: number) => {
  try {
    const res = await axios.delete(`${API_URL}/players/${playerId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};
