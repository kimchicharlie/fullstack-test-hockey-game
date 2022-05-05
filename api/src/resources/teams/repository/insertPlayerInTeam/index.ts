import { Client } from "pg";

import {
  insertPlayerInTeamQuery,
  IInsertPlayerInTeamQueryParams,
} from "./query";

export type TInsertPlayerInTeamParams = IInsertPlayerInTeamQueryParams;

export const insertPlayerInTeam = async (
  { pgClient }: { pgClient: Client },
  params: TInsertPlayerInTeamParams
) => {
  const data = await insertPlayerInTeamQuery.run(params, pgClient);
  return data[0];
};
