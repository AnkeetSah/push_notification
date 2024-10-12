self.addEventListener('push', (event) => {
    // Define notification options
    const options = {
        body: 'This is a notification body.', // Customize your notification body
        // No icon or badge specified
    };

    // Show the notification
    event.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});
