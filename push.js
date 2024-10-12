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
    "https://fcm.googleapis.com/fcm/send/eJLyHI4mOQc:APA91bHNlYJWOjN9F0lYfiyqLtFH9OvaWKBw3p8oKBAUhAi1ECBcDxB_d93Ws42-nZDMthRm86kGxC-h5YPsXtbY3cRp0VbSABz4CMX0KpQSuXV25LMfgNqD-TanwTZ55U5XFn_5thMd",
  expirationTime: null,
  keys: {
    p256dh:
      "BA4H1bp_bEwln8-GzmDrDMxcNuuUh7lm85Ma7NXieN-_SUplXvjSOlYJ8ZBAPO1YdHW3MsBLLSt3642S6KERQUI",
    auth: "KeiUYK6yy4HoI3foX_ZZjA",
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
