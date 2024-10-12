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
    "https://fcm.googleapis.com/fcm/send/fWhbNBkMu7o:APA91bEHW8q0dKF5OJgQOjz3hQ5IgqLLAKrvluUNlwi9G_Rxnrq3jcNwa5mre3BkjgcsY2VbBisU_ODfHu67SttdjScLHCndzjUaUOFjS-vk4lI59KXXWroJ27vSoI8qxl5cAT5OjrjU",
  expirationTime: null,
  keys: {
    p256dh:
      "BDHamRfl-ksGU2CydYJe2qlEpsXoM_vzsUuAJJQ4wkQEs_Dg169TAdHZXjPzcBAXG8PBcPwx3u0KDpub8qGSaFE",
    auth: "ADRSpiPlmDWN2VKqGcPwcQ",
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
