import { Client } from "pg";

import { createTeamQuery, ICreateTeamQueryParams } from "./query";

export type TCreateTeamParams = ICreateTeamQueryParams;

export const createTeam = async (
  { pgClient }: { pgClient: Client },
  params: TCreateTeamParams
) => {
  const data = await createTeamQuery.run(params, pgClient);
  return data[0];
};
