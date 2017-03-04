/**
 * Notification functions for displaying accounts-related user feedback,
 * such as success or failure messages for logging in, logging out,
 * signing in and forgetting password.
 */

const MAX_PASSWORD_TRIES = 5;

export const successMsgs = {
  SUCCESS_LOGIN: "Welcome back",
  SUCCESS_SIGNUP: "Welcome! Please log in with your new account below!",
  SUCCESS_NEW_PASSWORD_SENT: "New password sent to your email!"
}

export const errorMsgs = {
  ERR_INCORRECT_PASSWORD: "Incorrect password entered",
  ERR_EXCEEDED_LOGIN_ATTEMPTS: "Password reset. Too many login attempts. Please check",
  ERR_EMAIL_UNRECOGNIZED: "is not recognized. Have you created an account yet?",
  ERR_EMAIL_UNVERIFIED: "Your email has not been verified yet. Please check",
  ERR_EMAIL_ENTERED_INVALID: "Invalid NUS email. Remember to end your email address with '@u.nus.edu'.",
  ERR_PASSWORDS_NOT_MATCH: "Passwords do not match."
}

//=====================================================
// SUCCESS MESSAGES
//=====================================================
/**
 * SUCCESSFUL Login Message
 * @param  {[String]} username   User's username
 * @return {[String]}    Welcome message
 */
export const successMsgLoginName = function(username) {
  return successMsg.SUCCESS_LOGIN + " " + username;
}

//=====================================================
// ERROR MESSAGES
//=====================================================
/**
 * ERROR Incorrect Password with Number of Tries Message
 * @param  {[String]} numOfTries   Number of times the user has tried
 * @return {[String]}    Error message counting down number of tries left
 */
export const errorMsgIncorrectPassword = function(numOfTries) {
  let numTriesMsg = "You've got " + (MAX_PASSWORD_TRIES - numOfTries) + " tries left.";
  return errorMsgs.ERR_INCORRECT_PASSWORD + ". " + numTriesMsg;
}

/**
 * ERROR Warning when user exceeded the max number of login attempts Message
 * @param  {[String]} email   User's email address
 * @return {[String]}    Error message
 */
export const errorMsgExceededLoginAttempts = function(email) {
  return this.errorMsgs.ERR_EXCEEDED_LOGIN_ATTEMPTS + " " + email;
}

/**
 * ERROR Warning when user hasn't verified email Message
 * @param  {[String]} email   User's email address
 * @return {[String]}    Error message
 */
export const errorMsgUnverifiedEmail = function(email) {
  return this.errorMsgs.ERR_EMAIL_UNVERIFIED + " " + email;
}

/**
 * ERROR Warning when the email the user entered isn't a recognized in our
 * database Message
 * @param  {[String]} email   User's email address
 * @return {[String]}    Error message
 */
export const errorMsgUnrecognizedEmail = function(email) {
  return email + " " + this.errorMsgs.ERR_EMAIL_UNRECOGNIZED;
}