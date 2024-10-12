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
    "https://fcm.googleapis.com/fcm/send/dzY8uFheDCo:APA91bEmO6fT-WyoCsPNBjgf0NkUA_5t8L6ggQXyDG5DcbrAQkDC__Hbtgb256Ga7kIwYsEC_AjVzUamMFl-7gAS0fJncadhX-_gg-r4zR28HdzLVmKFmcWUOGr1h0Iqj88MWcw2OOKZ",
  expirationTime: null,
  keys: {
    p256dh:
      "BHscYMc0A2lG13rRlUCb0XAWvXEyQrUoTNW-N-jjZrEo6vdNV4t7l56PFsMsAhOhA1ilveqaXCYWhwcMVKFUzWk",
    auth: "L9RPMb5KkBgVEPoyQJ_7OA",
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
