let push =require('web-push');

let vapidKeys={
    publicKey: 'BA4MxFbqv-Tx-bZ9M6s_mNt9LstHI_jFWgC-JMOEANJnujrmqhCBgDpp2fvZE2GeksT9uHdl3Qf08ppYSqkxBMc',
    privateKey: 'gCAJHsCVR3NMibfZLfRGtws2hw9b6TB_T1ZHUS5dz_Y'
  }

push.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

  let sub={};
  push.sendNotification(sub,'test message')