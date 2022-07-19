const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy

const GOOGLE_CLIENT_ID = "693193201005-jodd5d1127craet830ffc5gbdpuhi3s2.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(
  new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile"],
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})