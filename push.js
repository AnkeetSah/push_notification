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
    "https://fcm.googleapis.com/fcm/send/f5Gd93rYn1U:APA91bGYbTHE2g_YKA4_TotG9yqbvEV1p49JfJllmvwjlmUT8nINa1DfFcsZg77rFdnS8fhCgj6i-VdD_nE3Pz2TS0LAfTLqIPK1nlQ496yywpfpk_uglX0nSsiCZzot2xv91YFYuwfJ",
  expirationTime: null,
  keys: {
    p256dh:
      "BB7mtPYgDKiAxyBfbG1web3RXwz-y61LaoQ7rCIlZjkMFHEe27UlBFAPwZ8HmobWIZdpYZNAGjNsAPH7JiyhpV8",
    auth: "DnlNl1MSW0kDaYC3z9xeTA",
  },
};

// Prepare a JSON payload
const payload = JSON.stringify({ message: "test message" });

push
  .sendNotification(sub, payload)
  .then((response) => {
    console.log("Push notification sent successfully", response);
  })
  .catch((error) => {
    console.error("Error sending push notification", error);
  });
