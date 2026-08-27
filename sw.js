self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : { title: 'Biciconamigos', body: 'Nueva notificación' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'https://rober0824.github.io/Biciconamigos/icon-192.png',
      badge: 'https://rober0824.github.io/Biciconamigos/icon-192.png'
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('https://rober0824.github.io/Biciconamigos/'));
});
