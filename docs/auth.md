# Authentication — Clerk

All authentication in this project is handled exclusively by **Clerk**. No other auth libraries, custom JWT logic, or session handling should be introduced.

## Rules

1. **Clerk only.** Never implement alternative auth methods (NextAuth, custom sessions, etc.).
2. **Sign In / Sign Up must always open as a modal** — use Clerk's `<SignInButton mode="modal">` and `<SignUpButton mode="modal">`. Never navigate to a standalone `/sign-in` or `/sign-up` page.
3. **`/dashboard` is a protected route.** Any unauthenticated user attempting to access `/dashboard` must be redirected to the homepage. Enforce this via `clerkMiddleware` in `proxy.ts`.
4. **Redirect authenticated users away from `/`.** If a logged-in user visits the homepage, redirect them to `/dashboard`.

## Implementation Reference

### `proxy.ts` (project root)

> Next.js 16+ uses `proxy.ts` instead of `middleware.ts`. Never create a `middleware.ts` file.

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Redirect authenticated users from homepage to dashboard
  if (userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Protect dashboard routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
```

### Sign In / Sign Up buttons

```tsx
import { SignInButton, SignUpButton } from "@clerk/nextjs";

<SignInButton mode="modal">
  <button>Sign In</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign Up</button>
</SignUpButton>
```

### Accessing the current user

- **Server Components / Route Handlers:** `const { userId } = await auth()` from `@clerk/nextjs/server`
- **Client Components:** `const { userId } = useAuth()` from `@clerk/nextjs`
