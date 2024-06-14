
/*@type {string[]}
-------------------------------------------Routes accessible au public non login
*/ 

export const publicRoutes = [
    "/",
    "/auth/new-verification"
];

// -------------------------------------------Routes utilisés pour l'authentification qui redirige vers la page /settings

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
];

// -------------------------------------------

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";