/** Types generated for queries found in "src/resources/players/repository/getPlayerById/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetPlayerByIdQuery' parameters type */
export interface IGetPlayerByIdQueryParams {
  playerId: number | null | void;
}

/** 'GetPlayerByIdQuery' return type */
export interface IGetPlayerByIdQueryResult {
  isCaptain: boolean | null;
  lastname: string | null;
  name: string | null;
  number: number | null;
  position: string | null;
}

/** 'GetPlayerByIdQuery' query type */
export interface IGetPlayerByIdQueryQuery {
  params: IGetPlayerByIdQueryParams;
  result: IGetPlayerByIdQueryResult;
}

const getPlayerByIdQueryIR: any = {"name":"getPlayerByIdQuery","params":[{"name":"playerId","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":192,"b":199,"line":9,"col":20}]}}],"usedParamSet":{"playerId":true},"statement":{"body":"select\n    players.number,\n    players.name,\n    players.lastname,\n    players.position,\n    players.is_capitain as \"isCaptain\"\nfrom players\nwhere players.id = :playerId","loc":{"a":31,"b":199,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * select
 *     players.number,
 *     players.name,
 *     players.lastname,
 *     players.position,
 *     players.is_capitain as "isCaptain"
 * from players
 * where players.id = :playerId
 * ```
 */
export const getPlayerByIdQuery = new PreparedQuery<IGetPlayerByIdQueryParams,IGetPlayerByIdQueryResult>(getPlayerByIdQueryIR);


