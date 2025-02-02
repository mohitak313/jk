document.getElementById('getLocation').addEventListener('click', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Construct the Telegram API URL with the correct bot token and chat ID
      const telegramUrl = `https://api.telegram.org/bot7784284083:AAG31myfjSw1T-MTExDj837RQQBKtms8wYk/sendLocation?chat_id=6219309154&latitude=${latitude}&longitude=${longitude}`;

      // Sending the location data to Telegram
      fetch(telegramUrl)
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            alert("Location sent to Telegram!");
          } else {
            alert("Failed to send location to Telegram.");
            console.log('Error:', data.description); // Log specific error description
          }
        })
        .catch(error => {
          console.log("Error:", error);
          alert("Error sending location!");
        });
    }, function(error) {
      alert("Location access denied or error occurred.");
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});
