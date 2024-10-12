const push = require("web-push");

// VAPID keys for authentication
const vapidKeys = {
  publicKey:
    "BA4MxFbqv-Tx-bZ9M6s_mNt9LstHI_jFWgC-JMOEANJnujrmqhCBgDpp2fvZE2GeksT9uHdl3Qf08ppYSqkxBMc",
  privateKey: "gCAJHsCVR3NMibfZLfRGtws2hw9b6TB_T1ZHUS5dz_Y",
};

// Set VAPID details
push.setVapidDetails(
  "mailto:example@yourdomain.org", // Replace with your email
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Your push subscription details
const sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cJkGIwHK6QY:APA91bE-2WWTyqJ0pprB5kZ4Mm_qd7qtuAa1f9FS9BAH3mdQmcgovVUW2JWxE5oR-8Ssro2E0n1P_UEKjOcuXSDHp90mDxnfz8GNYIXAN9iHRd2OaZJVJtzG_QZGNeCWIYs7fpLWlp4y",
  expirationTime: null,
  keys: {
    p256dh:
      "BINE5DUqN_mFJlAt3uMb1LcGhH-usrPZWWWwXIMp3nSPw1KAFa1GRuamzFJ1Rl-vTEYxkXHrApP66oe6DaY5N5s",
    auth: "gHdcVCtzleN0tvAS2hSlKA",
  },
};

// Prepare a JSON payload
const payload = JSON.stringify({ message: "This is a test notification!" });

push
  .sendNotification(sub, payload)
  .then((response) => {
    console.log("Push notification sent successfully", response);
  })
  .catch((error) => {
    console.error("Error sending push notification", error);
  });
