import { Client } from "pg";

import {
  createPlayer,
  insertPlayerInTeam,
  getTeamByYear,
  TCreatePlayerParams,
  TGetTeamByYearParams,
  createTeam,
} from "../../repository";

type TParams = TCreatePlayerParams & TGetTeamByYearParams;

// This creates a new player and add it to the provided year's team
export const createPlayerInTeam = async (
  { pgClient }: { pgClient: Client },
  { year, isCaptain, lastname, name, number, position }: TParams
) => {
  const playerCreated = await createPlayer(
    { pgClient },
    { isCaptain, lastname, name, number, position }
  );

  let team = await getTeamByYear({ pgClient }, { year });

  if (!team) {
    team = await createTeam({ pgClient }, { year, coach: "Unknown" });
  }

  await insertPlayerInTeam(
    { pgClient },
    { playerId: playerCreated.id, teamId: team.id }
  );

  return playerCreated;
};
