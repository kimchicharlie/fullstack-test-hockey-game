// Importing dotenv/config assigns .env content to process.env
import "dotenv/config";

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { buildRouter } from "./router";
import { initPgClient } from "./utils/initPgClient";

const app = new Koa();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

initPgClient(DATABASE_URL)
  .then((pgClient) => {
    app.context.pgClient = pgClient;

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
  })
  .catch((err) => {
    console.error("Postgres connection can not be initiated");
    throw err;
  });
