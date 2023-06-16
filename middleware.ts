export { default } from "next-auth/middleware"

export const config = { 
  matcher: [
    "/myreservations",
    "/reservations",
    "/items",
    "/favorites"
  ]
};
