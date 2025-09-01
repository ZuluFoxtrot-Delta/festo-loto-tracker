
fetch('expires.json')
  .then(response => response.json())
  .then(data => {
    const watchdogDiv = document.getElementById('watchdog');
    data.qr.forEach(entry => {
      const status = new Date(entry.expiry) < new Date() ? '🔴 EXPIRED' : '🟢 ACTIVE';
      watchdogDiv.innerHTML += `<p>${entry.id}: ${status} (expires ${entry.expiry})</p>`;
    });
  });
