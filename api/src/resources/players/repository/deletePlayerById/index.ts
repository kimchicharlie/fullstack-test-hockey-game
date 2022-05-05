import { Client } from "pg";

import { deletePlayerByIdQuery, IDeletePlayerByIdQueryParams } from "./query";

export const deletePlayerById = async (
  { pgClient }: { pgClient: Client },
  params: IDeletePlayerByIdQueryParams
) => {
  await deletePlayerByIdQuery.run(params, pgClient);
};
