let push = require("web-push");

let vapidKeys = {
    publicKey: "BA4MxFbqv-Tx-bZ9M6s_mNt9LstHI_jFWgC-JMOEANJnujrmqhCBgDpp2fvZE2GeksT9uHdl3Qf08ppYSqkxBMc",
    privateKey: "gCAJHsCVR3NMibfZLfRGtws2hw9b6TB_T1ZHUS5dz_Y",
};

push.setVapidDetails(
    "mailto:example@yourdomain.org",
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// Replace this with the dynamic subscription from your database
let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/cEArpB47a8I:APA91bG9F5XT3_kGp62Z66ugrm8HFQHSRXovcnX6RtrlKPYLFDbj_qvnAOviDryPejxB3U8kVVNrpIFGDLzqfXipMa2jBNGEiK6LRTQFlcuBUjUCzKcwZau7PtcyOKS-g1nfOPtEyP6L",
    expirationTime: null,
    keys: {
        p256dh: "BBMzBPpuCbKfct9j8eBk5MQTh5sF9WZDVQ0c3vzsi1DLP1eRmdj3rKPP0tRqqToO8iL9WTSoGiz2zUF9enjqlzU",
        auth: "dqMaMlRvN0BfCXf47W4Njw",
    },
};

(async () => {
    try {
        await push.sendNotification(sub, "test message");
        console.log("Notification sent successfully.");
    } catch (error) {
        console.error("Error sending notification:", error);
    }
})();
