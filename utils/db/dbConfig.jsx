import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
    // process.env.DATABASE_URL,
    "postgresql://zero2hero_owner:xJvu7lyrnT0s@ep-purple-term-a5l9ped7.us-east-2.aws.neon.tech/zero2hero?sslmode=require"
);
export const db = drizzle(sql, { schema });