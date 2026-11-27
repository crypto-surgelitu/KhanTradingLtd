import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  R2_ACCOUNT_ID: z.string().min(1),
  R2_ACCESS_KEY_ID: z.string().min(1),
  R2_SECRET_ACCESS_KEY: z.string().min(1),
  R2_BUCKET_PUBLIC: z.string().min(1),
  R2_BUCKET_PRIVATE: z.string().min(1),
  R2_PUBLIC_BASE_URL: z.string().url(),
  BREVO_API_KEY: z.string().min(1),
  EMAIL_FROM: z.string().email(),
  EMAIL_REPLY_TO: z.string().email(),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1),
  TURNSTILE_SECRET_KEY: z.string().min(1),
  TRACKER_SESSION_SECRET: z.string().min(1),
  CRON_SECRET: z.string().min(1).optional(),
  SENTRY_DSN: z.string().url().optional(),
  STITCH_API_KEY: z.string().min(1).optional(),
});

export const env = envSchema.parse(process.env);
