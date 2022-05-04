import { Pool, PoolClient } from "pg";

export const usePgPool = async <Result>(
  pgPool: Pool,
  callback: (client: PoolClient) => Promise<Result>
): Promise<Result> => {
  const client = await pgPool.connect();

  const data = await callback(client);

  client.release();

  return data;
};
