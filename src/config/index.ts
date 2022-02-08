import { env } from "../utils/envUtils";

/* mongo db setting*/
export const MONGO_URL = env("MONGO_URL", "MONGO_URL");
export const MONGO_DEBUG = env("MONGO_DEBUG", "MONGO_DEBUG");