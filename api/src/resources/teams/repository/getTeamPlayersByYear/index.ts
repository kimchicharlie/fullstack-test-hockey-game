import { Pool, PoolClient } from "pg";

import { usePgPool } from "../../../../utils/usePgPool";

import {
  getTeamPlayersByYearQuery,
  IGetTeamPlayersByYearQueryResult,
} from "./query";

export const getTeamPlayersByYear = async (
  { pgPool }: { pgPool: Pool },
  { year }: { year: number }
) =>
  usePgPool<IGetTeamPlayersByYearQueryResult[]>(
    pgPool,
    async (client: PoolClient) =>
      getTeamPlayersByYearQuery.run(
        {
          year,
        },
        client
      )
  );
