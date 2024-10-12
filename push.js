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
    "https://wns2-sg2p.notify.windows.com/w/?token=BQYAAABP86hjL%2bkm7nMdLaWZIY2yTYv6q%2fW3GtyG9Fsb4UtAmsiSs5QnUkkevHgIGxEnyUjLujFOkRpvJSID0q2C49xUUFvvnfQsOza8pACs8LkLIUV7j99gGdnEurt9S3I0GE5%2f68Rk3a5yULxw6%2bJDofOf0GbF56AG4thH%2bekrcnr%2bxLr8%2btrSv212s%2fwwNqmgb6aif78mfVKKmKW79mHYyD5GCDdhRTxurapT4JCgC9cuytxyYuQCO0SoOS%2fKCL3epiQg5a3cl6%2b6Oq%2fvoLEDWspeAgPq46voAfWa5VksrxUzWI4UzLZoqHhv71XfNx%2b8B49a7KgG1a%2fQiFFMAj%2ftr2sj",
  expirationTime: null,
  keys: {
    p256dh:
      "BHVAXZiM6bfd728CJLQsDmOvCxIuu5DPgBfYFeHA93mFxDdJaQES33y8GxSRiHzR5u-ikpTIITWKr58YuNj1UeY",
    auth: "-EvDfPidXYl0_lVuKgI3qQ",
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
