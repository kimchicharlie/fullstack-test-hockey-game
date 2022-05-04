import { Pool, PoolClient } from "pg";

import { usePgPool } from "../../../../utils/usePgPool";

import {
  createPlayerQuery,
  ICreatePlayerQueryResult,
  ICreatePlayerQueryParams,
} from "./query";

export type TCreatePlayerParams = ICreatePlayerQueryParams;

export const createPlayer = async (
  { pgPool }: { pgPool: Pool },
  params: TCreatePlayerParams
) => {
  const data = await usePgPool<ICreatePlayerQueryResult[]>(
    pgPool,
    async (client: PoolClient) => createPlayerQuery.run(params, client)
  );
  return data[0];
};
