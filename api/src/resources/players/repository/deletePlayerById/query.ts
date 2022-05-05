/** Types generated for queries found in "src/resources/players/repository/deletePlayerById/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'DeletePlayerByIdQuery' parameters type */
export interface IDeletePlayerByIdQueryParams {
  playerId: number | null | void;
}

/** 'DeletePlayerByIdQuery' return type */
export type IDeletePlayerByIdQueryResult = void;

/** 'DeletePlayerByIdQuery' query type */
export interface IDeletePlayerByIdQueryQuery {
  params: IDeletePlayerByIdQueryParams;
  result: IDeletePlayerByIdQueryResult;
}

const deletePlayerByIdQueryIR: any = {"name":"deletePlayerByIdQuery","params":[{"name":"playerId","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":66,"b":73,"line":2,"col":32}]}}],"usedParamSet":{"playerId":true},"statement":{"body":"DELETE FROM players WHERE id = :playerId","loc":{"a":34,"b":73,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM players WHERE id = :playerId
 * ```
 */
export const deletePlayerByIdQuery = new PreparedQuery<IDeletePlayerByIdQueryParams,IDeletePlayerByIdQueryResult>(deletePlayerByIdQueryIR);


