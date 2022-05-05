import { Client } from "pg";

import { getTeamPlayersByYearQuery } from "./query";

export const getTeamPlayersByYear = async (
  { pgClient }: { pgClient: Client },
  { year }: { year: number }
) =>
  getTeamPlayersByYearQuery.run(
    {
      year,
    },
    pgClient
  );
