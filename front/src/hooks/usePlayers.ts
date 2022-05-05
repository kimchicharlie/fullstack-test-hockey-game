import { useCallback, useEffect, useState } from "react";
import { TPlayer } from "../api/players/types";
import { fetchPlayers } from "../api/players/fetchPlayers";
import { deletePlayerById } from "../api/players/deletePlayerById";
import { makePlayerCaptain } from "../api/players/makePlayerCaptain";
import { createPlayer, TCreatePlayerParams } from "../api/players/createPlayer";

type TUsePlayersResult = {
  players: TPlayer[];
  isLoading: boolean;
  rejetch: () => void;
  deletePlayer: (playerId: number) => void;
  makePlayerCaptain: (playerId: number) => void;
  createPlayer: (params: TCreatePlayerParams) => void;
  isCreatingPlayer: boolean;
};

export const usePlayers = (year: number): TUsePlayersResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreatingPlayer, setIsCreatingPlayer] = useState(false);
  const [players, setPlayers] = useState<TPlayer[]>([]);

  const handleRefetch = useCallback(() => {
    setIsLoading(true);

    fetchPlayers(year)
      .then((players) => {
        setPlayers(players);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [year]);

  const handleMakePlayerCaptain = useCallback(
    async (playerId: number) => {
      const hasConfirmed = window.confirm(
        "Are you sure you want to make this player captain ?"
      );

      if (hasConfirmed) {
        await makePlayerCaptain(playerId);
        handleRefetch();
      }
    },
    [handleRefetch]
  );

  const handleCreatePlayer = useCallback(
    async (params: TCreatePlayerParams) => {
      setIsCreatingPlayer(true);
      await createPlayer(params);
      handleRefetch();
      setIsCreatingPlayer(false);
    },
    [handleRefetch]
  );

  const handleDeletePlayer = useCallback(
    async (playerId: number) => {
      const hasConfirmed = window.confirm(
        "Are you sure you want to remove this player ?"
      );

      if (hasConfirmed) {
        await deletePlayerById(playerId);
        handleRefetch();
      }
    },
    [handleRefetch]
  );

  useEffect(handleRefetch, [handleRefetch]);

  return {
    makePlayerCaptain: handleMakePlayerCaptain,
    deletePlayer: handleDeletePlayer,
    createPlayer: handleCreatePlayer,
    players,
    isLoading,
    isCreatingPlayer,
    rejetch: handleRefetch,
  };
};
