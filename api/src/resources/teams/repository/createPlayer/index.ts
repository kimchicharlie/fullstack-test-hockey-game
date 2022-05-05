import { Client } from "pg";

import { createPlayerQuery, ICreatePlayerQueryParams } from "./query";

export type TCreatePlayerParams = ICreatePlayerQueryParams;

export const createPlayer = async (
  { pgClient }: { pgClient: Client },
  params: TCreatePlayerParams
) => {
  const data = await createPlayerQuery.run(params, pgClient);
  return data[0];
};
