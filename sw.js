self.addEventListener('push', event => {
    const data = event.data?.json() || {};
  
    const options = {
      body: data.body || 'You have a new message!',
      icon: data.icon || '/path/to/default-icon.png',
      badge: data.badge || '/path/to/badge-icon.png',
      tag: data.tag || 'notification',
      actions: [
        { action: 'open_app', title: 'Open App', icon: '/path/to/open-icon.png' },
        { action: 'dismiss', title: 'Dismiss', icon: '/path/to/dismiss-icon.png' }
      ],
      vibrate: [200, 100, 200],
      requireInteraction: true
    };
  
    event.waitUntil(
      self.registration.showNotification(data.title || 'Notification', options)
    );
  });
  
  self.addEventListener('notificationclick', event => {
    event.notification.close();
    if (event.action === 'open_app') clients.openWindow('/');
  });
  