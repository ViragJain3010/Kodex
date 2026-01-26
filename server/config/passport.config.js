// server/config/passport.js
import passport from 'passport';
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.model.js';

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
        const user = await User.findUnique({
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

export default passport;
