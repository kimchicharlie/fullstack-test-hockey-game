import Router from "koa-router";
import { getIntegerFromString } from "../../utils/strings";
import { createPlayerInTeam } from "./handlers/createPlayerInTeam";

import { getTeamPlayersByYear } from "./repository";

export const buildTeamsRouter = () => {
  const router = new Router();

  router.get("/:year", async (ctx) => {
    const players = await getTeamPlayersByYear(
      { pgPool: ctx.app.context.pgPool },
      { year: getIntegerFromString(ctx.params.year) }
    );

    ctx.status = 200;
    ctx.body = players;
  });

  router.post("/:year", async (ctx) => {
    const { isCaptain, lastname, name, number, position } = ctx.request.body;

    const playerCreated = await createPlayerInTeam(
      {
        pgPool: ctx.app.context.pgPool,
      },
      {
        isCaptain: isCaptain || false,
        lastname,
        name,
        number,
        position,
        year: getIntegerFromString(ctx.params.year),
      }
    );

    ctx.status = 201;
    ctx.body = playerCreated;
  });

  return router;
};
