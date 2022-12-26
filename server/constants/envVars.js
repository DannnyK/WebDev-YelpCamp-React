import * as dotenv from "dotenv";

/////////////////////////////////
// load variables from .env file
dotenv.config();
//.env vars
export const PORT = process.env.PORT;
export const REMOTEDB = process.env.REMOTE_DB_CONNECTION;
export const LOCALDB = process.env.LOCAL_DB_CONNECTION;
