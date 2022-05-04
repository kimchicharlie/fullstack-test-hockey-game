/** Types generated for queries found in "src/resources/teams/repository/insertPlayerInTeam/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'InsertPlayerInTeamQuery' parameters type */
export interface IInsertPlayerInTeamQueryParams {
  playerId: number | null | void;
  teamId: number | null | void;
}

/** 'InsertPlayerInTeamQuery' return type */
export interface IInsertPlayerInTeamQueryResult {
  id: number;
  playerId: number | null;
  teamId: number | null;
}

/** 'InsertPlayerInTeamQuery' query type */
export interface IInsertPlayerInTeamQueryQuery {
  params: IInsertPlayerInTeamQueryParams;
  result: IInsertPlayerInTeamQueryResult;
}

const insertPlayerInTeamQueryIR: any = {"name":"insertPlayerInTeamQuery","params":[{"name":"playerId","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":89,"b":96,"line":3,"col":9}]}},{"name":"teamId","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":100,"b":105,"line":3,"col":20}]}}],"usedParamSet":{"playerId":true,"teamId":true},"statement":{"body":"insert into player_team(player_id, team_id)\nVALUES (:playerId, :teamId)\nRETURNING id, player_id as \"playerId\", team_id as \"teamId\"","loc":{"a":36,"b":165,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * insert into player_team(player_id, team_id)
 * VALUES (:playerId, :teamId)
 * RETURNING id, player_id as "playerId", team_id as "teamId"
 * ```
 */
export const insertPlayerInTeamQuery = new PreparedQuery<IInsertPlayerInTeamQueryParams,IInsertPlayerInTeamQueryResult>(insertPlayerInTeamQueryIR);


