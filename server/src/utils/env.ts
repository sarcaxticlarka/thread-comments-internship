import { z } from 'zod/v4';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config()

export const envSchema = z.object({
    PORT: z.string().default("8000"),
    DATABASE_URL: z.url(),
    NODE_ENV: z.enum(['development', 'production']).default('development')
});

const {success, error, data: env} = envSchema.safeParse(process.env);
if (!success) {
    console.error('Invalid environment variables:', error.issues);
    process.exit(1);
}
export const {PORT, DATABASE_URL, NODE_ENV} = env;

