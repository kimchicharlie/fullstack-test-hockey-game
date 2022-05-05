import { Client } from "pg";

import { getTeamByYearQuery, IGetTeamByYearQueryParams } from "./query";

export type TGetTeamByYearParams = IGetTeamByYearQueryParams;

export const getTeamByYear = async (
  { pgClient }: { pgClient: Client },
  params: TGetTeamByYearParams
) => {
  const data = await getTeamByYearQuery.run(params, pgClient);
  return data[0];
};
