self.addEventListener('push', (event) => {
    console.log('Push event received:', event);

    let data = {};
    if (event.data) {
        try {
            data = event.data.json();
            console.log('Push data:', data);
        } catch (error) {
            console.error('Error parsing push data:', error);
        }
    } else {
        data.message = 'This is a default notification body.';
    }

    const options = {
        body: data.message,
        icon: 'https://img.icons8.com/ios/452/notification.png',
        badge: 'https://img.icons8.com/ios/452/badge.png'
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    event.waitUntil(
        self.registration.showNotification('Test Notification', {
            body: 'This is a test notification triggered manually.',
            icon: 'https://img.icons8.com/ios/452/notification.png',
            badge: 'https://img.icons8.com/ios/452/badge.png'
        })
    );
});
