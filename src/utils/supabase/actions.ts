import { createServerClient } from "@supabase/ssr";
import { type CookieSerializeOptions } from "cookie";
import { cookies } from "next/headers";
import { Database } from "@/database.types";

export function createClient(cookieStore: ReturnType<typeof cookies>) {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieSerializeOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieSerializeOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    },
  );
}
