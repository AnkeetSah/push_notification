self.addEventListener('push', (event) => {
    let data = {};
    
    // Check if there is data and parse it
    if (event.data) {
        data = event.data.json(); // Parse the incoming JSON data
    } else {
        data.message = 'This is a notification body.'; // Default message
    }

    // Define notification options
    const options = {
        body: data.message, // Use the message from the parsed JSON
        icon: 'https://img.icons8.com/ios/452/notification.png', // Sample notification icon
        badge: 'https://img.icons8.com/ios/452/badge.png' // Sample badge icon
    };

    // Show the notification
    event.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});
