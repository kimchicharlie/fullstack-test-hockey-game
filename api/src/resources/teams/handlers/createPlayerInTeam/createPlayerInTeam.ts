import { Pool } from "pg";

import {
  createPlayer,
  insertPlayerInTeam,
  getTeamByYear,
  TCreatePlayerParams,
  TGetTeamByYearParams,
} from "../../repository";

type TParams = TCreatePlayerParams & TGetTeamByYearParams;

// This creates a new player and add it to the provided year's team
export const createPlayerInTeam = async (
  { pgPool }: { pgPool: Pool },
  { year, isCaptain, lastname, name, number, position }: TParams
) => {
  const playerCreated = await createPlayer(
    { pgPool },
    { isCaptain, lastname, name, number, position }
  );

  const team = await getTeamByYear({ pgPool }, { year });

  await insertPlayerInTeam(
    { pgPool },
    { playerId: playerCreated.id, teamId: team.id }
  );

  return playerCreated;
};
