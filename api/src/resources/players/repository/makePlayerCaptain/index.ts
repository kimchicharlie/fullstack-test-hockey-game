import { Pool, PoolClient } from "pg";

import { usePgPool } from "../../../../utils/usePgPool";

// import {
//   makePlayerCaptainQuery,
//   IMakePlayerCaptainQueryResult,
//   IMakePlayerCaptainQueryParams,
// } from "./query";

// export const makePlayerCaptain = async (
//   { pgPool }: { pgPool: Pool },
//   params: ICreatePlayerQueryParams
// ) =>
//   usePgPool<ICreatePlayerQueryResult[]>(pgPool, async (client: PoolClient) =>
//     makePlayerCaptainQuery.run(params, client)
//   );
