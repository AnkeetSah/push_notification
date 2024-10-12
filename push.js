let push = require("web-push");

let vapidKeys = {
  publicKey:
    "BA4MxFbqv-Tx-bZ9M6s_mNt9LstHI_jFWgC-JMOEANJnujrmqhCBgDpp2fvZE2GeksT9uHdl3Qf08ppYSqkxBMc",
  privateKey: "gCAJHsCVR3NMibfZLfRGtws2hw9b6TB_T1ZHUS5dz_Y",
};

push.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d8IwVTqEaaw:APA91bG9jC4Nv6diwksQWfyYz-mAG-gvXY97MfGHRZlqhDk73sfv9Y6rKL0BAMUwqSJgVq8vV8-djitqAq6huogkTKJJ538L7ihCvztRV26zHEdc1Hxdb_72djSSDitsuWypOrv8zWvH",
  expirationTime: null,
  keys: {
    p256dh:
      "BNizZXVUZB62DLpIiDcaHwmwjy8PCTHuj1UEofPgLOkg2F5ur1RfIbTnYfJLsKy_Y5QcKVq2yeO2RNjI3kJjE-4",
    auth: "nS54yFcMCe17-AEplZ6qqg",
  },
};
push.sendNotification(sub, "test message");
