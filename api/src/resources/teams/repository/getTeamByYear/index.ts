import { Pool, PoolClient } from "pg";

import { usePgPool } from "../../../../utils/usePgPool";

import {
  getTeamByYearQuery,
  IGetTeamByYearQueryResult,
  IGetTeamByYearQueryParams,
} from "./query";

export type TGetTeamByYearParams = IGetTeamByYearQueryParams;

export const getTeamByYear = async (
  { pgPool }: { pgPool: Pool },
  params: TGetTeamByYearParams
) => {
  const data = await usePgPool<IGetTeamByYearQueryResult[]>(
    pgPool,
    async (client: PoolClient) => getTeamByYearQuery.run(params, client)
  );
  return data[0];
};
