// Importing dotenv/config assigns .env content to process.env
import "dotenv/config";

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { Pool } from "pg";
import { buildRouter } from "./router";

const app = new Koa();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// This is used to initiate pg connections and use them to run queries
app.context.pgPool = new Pool({
  connectionString: DATABASE_URL,
});

app.use(cors());
app.use(bodyParser());

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

const router = buildRouter();

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.info(`Server listening on PORT ${PORT}`);
});
