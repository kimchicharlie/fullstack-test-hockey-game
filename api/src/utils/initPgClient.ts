import { Client } from "pg";

export const initPgClient = async (dbUrl?: string): Promise<Client> => {
  if (typeof dbUrl !== "string") {
    throw new Error(
      `Can not init Postgres client, dbUrl (${dbUrl}) should be a string`
    );
  }

  const client = new Client({
    connectionString: dbUrl,
  });

  await client.connect();

  return client;
};
