/** Types generated for queries found in "src/resources/players/repository/makePlayerCaptain/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'MakePlayerCaptainQuery' parameters type */
export interface IMakePlayerCaptainQueryParams {
  isCaptain: boolean | null | void;
  lastname: string | null | void;
  name: string | null | void;
  number: number | null | void;
  position: string | null | void;
}

/** 'MakePlayerCaptainQuery' return type */
export interface IMakePlayerCaptainQueryResult {
  isCaptain: boolean | null;
  lastname: string | null;
  name: string | null;
  number: number | null;
  position: string | null;
}

/** 'MakePlayerCaptainQuery' query type */
export interface IMakePlayerCaptainQueryQuery {
  params: IMakePlayerCaptainQueryParams;
  result: IMakePlayerCaptainQueryResult;
}

const makePlayerCaptainQueryIR: any = {"name":"makePlayerCaptainQuery","params":[{"name":"number","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":111,"b":116,"line":3,"col":9}]}},{"name":"name","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":120,"b":123,"line":3,"col":18}]}},{"name":"lastname","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":127,"b":134,"line":3,"col":25}]}},{"name":"position","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":138,"b":145,"line":3,"col":36}]}},{"name":"isCaptain","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":149,"b":157,"line":3,"col":47}]}}],"usedParamSet":{"number":true,"name":true,"lastname":true,"position":true,"isCaptain":true},"statement":{"body":"insert into players(number, name, lastname, position, is_capitain)\nVALUES (:number, :name, :lastname, :position, :isCaptain)\nRETURNING number, name, lastname, position, is_capitain as \"isCaptain\"","loc":{"a":35,"b":229,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * insert into players(number, name, lastname, position, is_capitain)
 * VALUES (:number, :name, :lastname, :position, :isCaptain)
 * RETURNING number, name, lastname, position, is_capitain as "isCaptain"
 * ```
 */
export const makePlayerCaptainQuery = new PreparedQuery<IMakePlayerCaptainQueryParams,IMakePlayerCaptainQueryResult>(makePlayerCaptainQueryIR);


