---
name: clerk-auth
description: "Clerk authentication for this Next.js link shortener project. Use when: adding protected routes, implementing sign in/sign up buttons, accessing current user in server or client components, writing auth middleware, guarding dashboard pages, checking authentication state, adding new Clerk components, or any task involving user identity."
argument-hint: "Describe the auth task (e.g. 'protect a new route', 'show user avatar', 'gate a server action')"
---

# Clerk Authentication Skill

This project uses **Clerk exclusively** for authentication. No other auth library should ever be introduced.

## Project Conventions (Non-Negotiable)

| Rule | Detail |
|------|--------|
| Sign in/up **always modal** | Use `mode="modal"` — never navigate to a standalone page |
| Middleware file is `proxy.ts` | Next.js 16+ — **never create `middleware.ts`** |
| `/dashboard` is protected | Unauthenticated users → redirect to `/` |
| `/` redirects when authed | Authenticated users on `/` → redirect to `/dashboard` |
| Server auth import | `@clerk/nextjs/server` |
| Client auth import | `@clerk/nextjs` |

---

## Procedure

### 1. Protecting a New Route

Add the route to the `isProtectedRoute` matcher in [proxy.ts](../../../proxy.ts):

```ts
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/your-new-route(.*)", // add here
]);
```

The existing middleware already handles redirect logic — do not duplicate it.

### 2. Adding Sign In / Sign Up Buttons

Always wrap in a `"use client"` component. Use `buttonVariants` from `@/components/ui/button` and `cn()` from `@/lib/utils` for styling.

```tsx
"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

<SignUpButton mode="modal">
  <button className={cn(buttonVariants({ size: "lg" }))}>
    Get started
  </button>
</SignUpButton>

<SignInButton mode="modal">
  <button className={cn(buttonVariants({ variant: "outline" }))}>
    Sign in
  </button>
</SignInButton>
```

See existing patterns in [components/auth-buttons.tsx](../../../components/auth-buttons.tsx).

### 3. Accessing the Current User

**Server Component or Route Handler:**
```ts
import { auth } from "@clerk/nextjs/server";

const { userId } = await auth();
if (!userId) {
  // handle unauthenticated
}
```

**Client Component:**
```tsx
"use client";
import { useAuth } from "@clerk/nextjs";

const { userId, isLoaded, isSignedIn } = useAuth();
```

**Full user object (server):**
```ts
import { currentUser } from "@clerk/nextjs/server";

const user = await currentUser();
// user.id, user.emailAddresses, user.firstName, etc.
```

### 4. Conditionally Rendering UI Based on Auth State

**Server Component:**
```tsx
import { auth } from "@clerk/nextjs/server";

const { userId } = await auth();
return userId ? <SignedInView /> : <SignedOutView />;
```

**Client Component — use Clerk's built-in components:**
```tsx
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

<SignedIn>
  <UserButton />
</SignedIn>
<SignedOut>
  <SignInButton mode="modal"><button>Sign in</button></SignInButton>
</SignedOut>
```

### 5. Gating a Server Action

```ts
"use server";

import { auth } from "@clerk/nextjs/server";

export async function myAction() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  // proceed with action
}
```

### 6. Associating Database Records with a User

Use `userId` from Clerk as the foreign key in Drizzle schema. Never store passwords or tokens — Clerk owns identity.

```ts
// db/schema.ts example column
userId: text("user_id").notNull(), // clerk userId
```

---

## Reference: `proxy.ts` Full Template

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
```

---

## Quality Checklist

Before completing any auth-related task, verify:

- [ ] No `middleware.ts` file was created (must be `proxy.ts`)
- [ ] Sign in/up buttons use `mode="modal"`
- [ ] New protected routes are added to `isProtectedRoute` in `proxy.ts`
- [ ] Server-side auth uses `@clerk/nextjs/server`, client-side uses `@clerk/nextjs`
- [ ] `"use client"` directive is present on any component using Clerk hooks or `<SignedIn>` / `<SignedOut>`
- [ ] No custom JWT or session logic introduced
- [ ] `npm run lint` passes
