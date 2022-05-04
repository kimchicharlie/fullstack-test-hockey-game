import { Pool, PoolClient } from "pg";

import { usePgPool } from "../../../../utils/usePgPool";

import {
  insertPlayerInTeamQuery,
  IInsertPlayerInTeamQueryResult,
  IInsertPlayerInTeamQueryParams,
} from "./query";

export type TInsertPlayerInTeamParams = IInsertPlayerInTeamQueryParams;

export const insertPlayerInTeam = async (
  { pgPool }: { pgPool: Pool },
  params: TInsertPlayerInTeamParams
) => {
  const data = await usePgPool<IInsertPlayerInTeamQueryResult[]>(
    pgPool,
    async (client: PoolClient) => insertPlayerInTeamQuery.run(params, client)
  );
  return data[0];
};
