// Importing dotenv/config assigns .env content to process.env
import "dotenv/config";

import {
  createPlayer,
  createTeam,
  insertPlayerInTeam,
} from "../resources/teams/repository";
import { initPgClient } from "../utils/initPgClient";
import data from "./newData.json";

const DATABASE_URL = process.env.DATABASE_URL;

const feedDb = async () => {
  const pgClient = await initPgClient(DATABASE_URL);

  for (const teamAndPlayers of data) {
    console.info(`Creating ${teamAndPlayers.year} team`);
    const { players, ...team } = teamAndPlayers;
    const teamCreated = await createTeam({ pgClient }, team);

    await Promise.all(
      players.map(async (player) => {
        const playerCreated = await createPlayer(
          { pgClient },
          {
            isCaptain: player.is_capitain,
            lastname: player.lastname,
            name: player.name,
            number: player.number,
            position: player.position,
          }
        );

        await insertPlayerInTeam(
          { pgClient },
          { teamId: teamCreated.id, playerId: playerCreated.id }
        );
      })
    );
  }
  console.info(`Ending PG connection...`);

  await pgClient.end();

  console.info(`Done`);
};

feedDb();
