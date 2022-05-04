import Router from "koa-router";
import { buildPlayersRouter } from "./resources/players/router";
import { buildTeamsRouter } from "./resources/teams/router";

export const buildRouter = () => {
  const router = new Router({ prefix: "/api" });

  const playersRouter = buildPlayersRouter();
  const teamsRouter = buildTeamsRouter();

  router.use(
    "/players",
    playersRouter.routes(),
    playersRouter.allowedMethods()
  );

  router.use("/team", teamsRouter.routes(), teamsRouter.allowedMethods());

  return router;
};
