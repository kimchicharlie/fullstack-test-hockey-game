import Router from "koa-router";

export const buildPlayersRouter = () => {
  const router = new Router();

  router.put("/:id/captain", (ctx) => {
    ctx.body = `player ${ctx.params.id} should become captain`;
  });

  return router;
};
