/** Types generated for queries found in "src/resources/teams/repository/createPlayer/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'CreatePlayerQuery' parameters type */
export interface ICreatePlayerQueryParams {
  isCaptain: boolean | null | void;
  lastname: string | null | void;
  name: string | null | void;
  number: number | null | void;
  position: string | null | void;
}

/** 'CreatePlayerQuery' return type */
export interface ICreatePlayerQueryResult {
  id: number;
  isCaptain: boolean | null;
  lastname: string | null;
  name: string | null;
  number: number | null;
  position: string | null;
}

/** 'CreatePlayerQuery' query type */
export interface ICreatePlayerQueryQuery {
  params: ICreatePlayerQueryParams;
  result: ICreatePlayerQueryResult;
}

const createPlayerQueryIR: any = {"name":"createPlayerQuery","params":[{"name":"number","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":106,"b":111,"line":3,"col":9}]}},{"name":"name","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":115,"b":118,"line":3,"col":18}]}},{"name":"lastname","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":122,"b":129,"line":3,"col":25}]}},{"name":"position","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":133,"b":140,"line":3,"col":36}]}},{"name":"isCaptain","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":144,"b":152,"line":3,"col":47}]}}],"usedParamSet":{"number":true,"name":true,"lastname":true,"position":true,"isCaptain":true},"statement":{"body":"insert into players(number, name, lastname, position, is_capitain)\nVALUES (:number, :name, :lastname, :position, :isCaptain)\nRETURNING id, number, name, lastname, position, is_capitain as \"isCaptain\"","loc":{"a":30,"b":228,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * insert into players(number, name, lastname, position, is_capitain)
 * VALUES (:number, :name, :lastname, :position, :isCaptain)
 * RETURNING id, number, name, lastname, position, is_capitain as "isCaptain"
 * ```
 */
export const createPlayerQuery = new PreparedQuery<ICreatePlayerQueryParams,ICreatePlayerQueryResult>(createPlayerQueryIR);


