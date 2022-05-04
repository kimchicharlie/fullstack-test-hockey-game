/** Types generated for queries found in "src/resources/teams/repository/getTeamByYear/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetTeamByYearQuery' parameters type */
export interface IGetTeamByYearQueryParams {
  year: number | null | void;
}

/** 'GetTeamByYearQuery' return type */
export interface IGetTeamByYearQueryResult {
  coach: string;
  id: number;
  year: number;
}

/** 'GetTeamByYearQuery' query type */
export interface IGetTeamByYearQueryQuery {
  params: IGetTeamByYearQueryParams;
  result: IGetTeamByYearQueryResult;
}

const getTeamByYearQueryIR: any = {"name":"getTeamByYearQuery","params":[{"name":"year","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":97,"b":100,"line":7,"col":20}]}}],"usedParamSet":{"year":true},"statement":{"body":"select\n    id,\n    coach,\n    year\nfrom teams\nwhere teams.year = :year\nlimit 1","loc":{"a":31,"b":108,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * select
 *     id,
 *     coach,
 *     year
 * from teams
 * where teams.year = :year
 * limit 1
 * ```
 */
export const getTeamByYearQuery = new PreparedQuery<IGetTeamByYearQueryParams,IGetTeamByYearQueryResult>(getTeamByYearQueryIR);


