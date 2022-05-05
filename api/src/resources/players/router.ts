import Router from "koa-router";
import { deletePlayerById, makePlayerCaptain } from "./repository";
import { getIntegerFromString } from "../../utils/strings";

export const buildPlayersRouter = () => {
  const router = new Router();

  router.put("/:id/captain", async (ctx) => {
    await makePlayerCaptain(
      { pgClient: ctx.app.context.pgClient },
      { playerId: getIntegerFromString(ctx.params.id) }
    );
    ctx.status = 200;
    ctx.body = `player ${ctx.params.id} should become captain`;
  });

  router.delete("/:id", async (ctx) => {
    await deletePlayerById(
      { pgClient: ctx.app.context.pgClient },
      { playerId: getIntegerFromString(ctx.params.id) }
    );
    ctx.status = 200;
  });

  return router;
};
