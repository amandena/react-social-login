const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy
const GitHubStrategy = require("passport-github2").Strategy
const FacebookStrategy = require("passport-facebook").Strategy

const GOOGLE_CLIENT_ID = "693193201005-jodd5d1127craet830ffc5gbdpuhi3s2.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "4484bb2ef11d9f107a9d"
const GITHUB_CLIENT_SECRET = "c1f1f5a5e7e14ee197d18f49b98a71e0c0f9ed26"

const FACEBOOK_APP_ID = "1076858769627332"
const FACEBOOK_APP_SECRET = "2139f269329bf51450188fc2782fcc2e"

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

passport.use(
  new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(
  new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
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