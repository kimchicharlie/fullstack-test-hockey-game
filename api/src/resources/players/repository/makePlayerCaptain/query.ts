/** Types generated for queries found in "src/resources/players/repository/makePlayerCaptain/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'MakePlayerCaptainQuery' parameters type */
export interface IMakePlayerCaptainQueryParams {
  playerId: number | null | void;
}

/** 'MakePlayerCaptainQuery' return type */
export type IMakePlayerCaptainQueryResult = void;

/** 'MakePlayerCaptainQuery' query type */
export interface IMakePlayerCaptainQueryQuery {
  params: IMakePlayerCaptainQueryParams;
  result: IMakePlayerCaptainQueryResult;
}

const makePlayerCaptainQueryIR: any = {"name":"makePlayerCaptainQuery","params":[{"name":"playerId","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":243,"b":250,"line":9,"col":41},{"a":506,"b":513,"line":21,"col":39},{"a":548,"b":555,"line":23,"col":21}]}}],"usedParamSet":{"playerId":true},"statement":{"body":"WITH team_players AS (\n    WITH actual_team AS (\n            SELECT\n                player_team.team_id\n            FROM\n                player_team\n            WHERE\n                player_team.player_id = :playerId\n    )\n    SELECT\n        players.*\n    FROM\n        actual_team\n        JOIN player_team ON actual_team.team_id = player_team.team_id\n        JOIN players ON players.id = player_team.player_id\n)\nUPDATE\n\tplayers\nSET\n\tis_capitain = CASE WHEN players.id = :playerId THEN\n\t\tTRUE\n\tWHEN players.id != :playerId THEN\n\t\tFALSE\n\tEND\nFROM\n\tteam_players\nWHERE\n\tteam_players.id = players.id","loc":{"a":35,"b":628,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * WITH team_players AS (
 *     WITH actual_team AS (
 *             SELECT
 *                 player_team.team_id
 *             FROM
 *                 player_team
 *             WHERE
 *                 player_team.player_id = :playerId
 *     )
 *     SELECT
 *         players.*
 *     FROM
 *         actual_team
 *         JOIN player_team ON actual_team.team_id = player_team.team_id
 *         JOIN players ON players.id = player_team.player_id
 * )
 * UPDATE
 * 	players
 * SET
 * 	is_capitain = CASE WHEN players.id = :playerId THEN
 * 		TRUE
 * 	WHEN players.id != :playerId THEN
 * 		FALSE
 * 	END
 * FROM
 * 	team_players
 * WHERE
 * 	team_players.id = players.id
 * ```
 */
export const makePlayerCaptainQuery = new PreparedQuery<IMakePlayerCaptainQueryParams,IMakePlayerCaptainQueryResult>(makePlayerCaptainQueryIR);


