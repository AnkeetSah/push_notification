// Check if Service Worker and Notifications are supported
const checkSupport = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error("Service worker not supported.");
    }
    if (!('Notification' in window)) {
        throw new Error("Notifications not supported.");
    }
}

// Register Service Worker
const registerSW = async () => {
    try {
        const registration = await navigator.serviceWorker.register('./sw.js'); // Ensure correct path
        console.log('Service Worker registered', registration);
        return registration;
    } catch (error) {
        console.error('Service Worker registration failed:', error);
    }
}

// Request Notification Permission
const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    console.log('Notification permission:', permission); // Log the permission result
    if (permission === 'granted') {
        new Notification("Hello world!", {
            body: "Notification triggered!"
        });
    } else {
        console.warn("Notification permission not granted.");
    }
}

// Function to initialize notifications
const initNotifications = async () => {
    checkSupport();
    await registerSW();
}

// Initialize notifications and add event listener for the button
initNotifications();

document.getElementById('notifyButton').addEventListener('click', requestNotificationPermission);
