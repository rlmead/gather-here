"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className={className}
    >
      {resolvedTheme === "light" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
