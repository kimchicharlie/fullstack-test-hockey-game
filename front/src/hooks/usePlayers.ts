import { useEffect, useState } from "react";
import { TPlayer } from "../types";
import { fetchPlayers } from "../api/fetchPlayers";

type TUsePlayersResult = {
  players: TPlayer[];
  isLoading: boolean;
};

export const usePlayers = (year: number): TUsePlayersResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [players, setPlayers] = useState<TPlayer[]>([]);

  useEffect(() => {
    setIsLoading(true);

    fetchPlayers(year)
      .then((players) => {
        setPlayers(players);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [year]);

  return { players, isLoading };
};
