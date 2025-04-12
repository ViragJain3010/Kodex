// server/config/passport.js
import passport from 'passport';
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// JWT Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: jwtPayload.id },
        });

        if (user) {
          return done(null, user);
        }

        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

// // Google OAuth Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/api/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         let user = await prisma.user.findFirst({
//           where: {
//             OR: [
//               {
//                 providerId: profile.id,
//                 authProvider: "GOOGLE",
//               },
//               { email: profile.emails[0].value },
//             ],
//           },
//         });

//         if (!user) {
//           // Create new user
//           user = await prisma.user.create({
//             data: {
//               username: profile.displayName.replace(/\s+/g, "").toLowerCase(),
//               email: profile.emails[0].value,
//               authProvider: "GOOGLE",
//               providerId: profile.id,
//             },
//           });
//         }

//         return done(null, user);
//       } catch (error) {
//         return done(error, false);
//       }
//     }
//   )
// );

// // GitHub OAuth Strategy
// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: "/api/auth/github/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         let user = await prisma.user.findFirst({
//           where: {
//             OR: [
//               {
//                 providerId:
//                   profile.id, // server/config/passport.js (continued)
//                 authProvider: "GITHUB",
//               },
//               { email: profile.emails[0].value },
//             ],
//           },
//         });

//         if (!user) {
//           // Create new user
//           user = await prisma.user.create({
//             data: {
//               username: profile.username,
//               email: profile.emails[0].value,
//               authProvider: "GITHUB",
//               providerId: profile.id,
//             },
//           });
//         }

//         return done(null, user);
//       } catch (error) {
//         return done(error, false);
//       }
//     }
//   )
// );

export default passport;
