"use client";

import { ThemeProvider } from "next-themes";
import { createClient } from "@/utils/supabase/client";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

export const SessionContext = createContext<Session | null>(null);

function SessionProvider({ children }: PropsWithChildren) {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });

    return () => {
      subscription.data.subscription.unsubscribe();
    };
  });

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
