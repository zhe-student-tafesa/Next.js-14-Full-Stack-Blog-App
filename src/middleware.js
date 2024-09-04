import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

//  Default config object it's not going to interrupt our API calls or static files
//  matcher allows you to fliter Middleware 
//  to run( or not run like in the example) on specific paths.
//  If you do not add any matcher, Middleware will be invoked 
//  for every route in your project.
export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};