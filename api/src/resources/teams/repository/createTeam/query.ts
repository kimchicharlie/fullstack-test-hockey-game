/** Types generated for queries found in "src/resources/teams/repository/createTeam/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'CreateTeamQuery' parameters type */
export interface ICreateTeamQueryParams {
  coach: string | null | void;
  year: number | null | void;
}

/** 'CreateTeamQuery' return type */
export interface ICreateTeamQueryResult {
  coach: string;
  id: number;
  year: number;
}

/** 'CreateTeamQuery' query type */
export interface ICreateTeamQueryQuery {
  params: ICreateTeamQueryParams;
  result: ICreateTeamQueryResult;
}

const createTeamQueryIR: any = {"name":"createTeamQuery","params":[{"name":"coach","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":68,"b":72,"line":3,"col":9}]}},{"name":"year","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":76,"b":79,"line":3,"col":17}]}}],"usedParamSet":{"coach":true,"year":true},"statement":{"body":"insert into teams(coach, year)\nVALUES (:coach, :year)\nRETURNING id, coach, year","loc":{"a":28,"b":106,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * insert into teams(coach, year)
 * VALUES (:coach, :year)
 * RETURNING id, coach, year
 * ```
 */
export const createTeamQuery = new PreparedQuery<ICreateTeamQueryParams,ICreateTeamQueryResult>(createTeamQueryIR);


