/** Types generated for queries found in "src/resources/teams/repository/getTeamPlayersByYear/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetTeamPlayersByYearQuery' parameters type */
export interface IGetTeamPlayersByYearQueryParams {
  year: number | null | void;
}

/** 'GetTeamPlayersByYearQuery' return type */
export interface IGetTeamPlayersByYearQueryResult {
  id: number;
  isCaptain: boolean | null;
  lastname: string | null;
  name: string | null;
  number: number | null;
  position: string | null;
}

/** 'GetTeamPlayersByYearQuery' query type */
export interface IGetTeamPlayersByYearQueryQuery {
  params: IGetTeamPlayersByYearQueryParams;
  result: IGetTeamPlayersByYearQueryResult;
}

const getTeamPlayersByYearQueryIR: any = {"name":"getTeamPlayersByYearQuery","params":[{"name":"year","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":317,"b":320,"line":12,"col":22}]}}],"usedParamSet":{"year":true},"statement":{"body":"select\n    players.id,\n    players.number,\n    players.name,\n    players.lastname,\n    players.position,\n    players.is_capitain as \"isCaptain\"\nfrom players\njoin player_team on player_team.player_id = players.id\njoin teams on teams.id = player_team.team_id\nwhere teams.\"year\" = :year\norder by players.number","loc":{"a":38,"b":344,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * select
 *     players.id,
 *     players.number,
 *     players.name,
 *     players.lastname,
 *     players.position,
 *     players.is_capitain as "isCaptain"
 * from players
 * join player_team on player_team.player_id = players.id
 * join teams on teams.id = player_team.team_id
 * where teams."year" = :year
 * order by players.number
 * ```
 */
export const getTeamPlayersByYearQuery = new PreparedQuery<IGetTeamPlayersByYearQueryParams,IGetTeamPlayersByYearQueryResult>(getTeamPlayersByYearQueryIR);


