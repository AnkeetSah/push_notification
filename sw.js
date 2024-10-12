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
        badge: 'https://img.icons8.com/ios/452/badge.png',
        actions: [
            {
                action: 'youtube-action',
                title: 'Go to YouTube',
                icon: 'https://img.icons8.com/ios-filled/50/000000/youtube-play.png'
            }
        ],
        data: {
            url: 'https://www.youtube.com', // Redirect URL on click
        }
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});

self.addEventListener('notificationclick', (event) => {
    console.log('Notification click received:', event.notification);

    event.notification.close(); // Close the notification when clicked

    // Handle the click and redirect to YouTube or any URL set in options.data
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
    event.waitUntil(
        self.registration.showNotification('Test Notification', {
            body: 'This is a test notification triggered manually.',
            icon: 'https://img.icons8.com/ios/452/notification.png',
            badge: 'https://img.icons8.com/ios/452/badge.png',
            data: {
                url: 'https://www.youtube.com' // Redirect URL on click
            }
        })
    );
});
