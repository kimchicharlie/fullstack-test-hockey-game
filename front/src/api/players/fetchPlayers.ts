import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchPlayers = async (year: number) => {
  console.log("process.env -> ", process.env);
  try {
    const res = await axios.get(`${API_URL}/team/${year}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};
