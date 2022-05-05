import { Client } from "pg";

import { getPlayerByIdQuery, IGetPlayerByIdQueryParams } from "./query";

export const getPlayerById = async (
  { pgClient }: { pgClient: Client },
  params: IGetPlayerByIdQueryParams
) => {
  const data = await getPlayerByIdQuery.run(params, pgClient);

  return data[0];
};
