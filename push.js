const push = require("web-push");

// VAPID keys for authentication
const vapidKeys = {
  publicKey:
    "BA4MxFbqv-Tx-bZ9M6s_mNt9LstHI_jFWgC-JMOEANJnujrmqhCBgDpp2fvZE2GeksT9uHdl3Qf08ppYSqkxBMc",
  privateKey: "gCAJHsCVR3NMibfZLfRGtws2hw9b6TB_T1ZHUS5dz_Y",
};

// Set VAPID details
push.setVapidDetails(
  "mailto:example@yourdomain.org", // Change this to your email
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Your push subscription details
const sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fjgoMRmmCJE:APA91bEcTntW5Vnj529XmmqJ8pTESPtf2DCq-8iyaj0LQXrPD_b1dWoCUxYEV3BrojRHMcpRb3rUQaOZBJkhhOBwOWMkbz-6beiM5Ge1qWJl-ss21KM5-MceHqzWdK2qVH_VeRvlPNnU",
  expirationTime: null,
  keys: {
    p256dh:
      "BMw-4eut15iiuY-31ANbQyx-SULkz1lOneI3oE2KVZptrtXxxlvF0cdgOj9P8HWBlEKYDPmOj3lcudxp2z_ddL8",
    auth: "loIPm6lFw5cC367X5OEgEQ",
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
