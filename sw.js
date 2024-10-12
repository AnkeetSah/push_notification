self.addEventListener('push', event => {
  const data = event.data?.json() || {}; // Get the data from the push event

  const options = {
    body: data.body || 'You have a new message!',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg', // Web icon for the notification
    badge: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg', // Web badge icon
    vibrate: [200, 100, 200],
    tag: data.tag || 'notification',
    actions: [
      {
        action: 'open_app',
        title: 'Open App',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Open_book_rounded_icon.svg' // Web icon for "Open App"
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Cancel_rounded_symbol_black.svg' // Web icon for "Dismiss"
      }
    ],
    requireInteraction: true
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Notification', options)
  );
});

// Handle notification click events
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'open_app') {
    clients.openWindow('/'); // Navigate to the app
  }
});
