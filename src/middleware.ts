import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { get } from "@vercel/edge-config";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

export async function middleware(req: NextRequest) {
  let isInMaintenanceMode = false;

  try {
    isInMaintenanceMode =
      // Don't show the maintenance page in development
      process.env.VERCEL_ENV === "production" &&
      // Check Edge Config to see if the maintenance page should be shown
      ((await get("isInMaintenanceMode")) ?? false);
  } catch (e) {
    // Edge Config not accessible, log the error
    console.error(e);
  }

  if (isInMaintenanceMode) {
    req.nextUrl.pathname = `/maintenance`;
    return NextResponse.rewrite(req.nextUrl);
  }
}
