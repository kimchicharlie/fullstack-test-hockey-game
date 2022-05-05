import { Client } from "pg";
import { getPlayerById } from "../getPlayerById";

import { makePlayerCaptainQuery, IMakePlayerCaptainQueryParams } from "./query";

export const makePlayerCaptain = async (
  { pgClient }: { pgClient: Client },
  params: IMakePlayerCaptainQueryParams
) => {
  await makePlayerCaptainQuery.run(params, pgClient);

  return getPlayerById({ pgClient }, { playerId: params.playerId });
};
