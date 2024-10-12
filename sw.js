self.addEventListener('push', (event) => {
    // Define notification options
    const options = {
        body: event.data ? event.data.text() : 'This is a notification body.', // Default message if no data is available
        icon: 'https://img.icons8.com/ios/452/notification.png', // Sample notification icon
        badge: 'https://img.icons8.com/ios/452/badge.png' // Sample badge icon
    };

    // Show the notification
    event.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});
