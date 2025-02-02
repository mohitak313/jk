// Function to get real location and send to Telegram
function sendLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const telegramUrl = https://api.telegram.org/bot7784284083:AAG31myfjSw1T-MTExDj837RQQBKtms8wYk/sendLocation?chat_id=6219309154&latitude=${latitude}&longitude=${longitude};

            fetch(telegramUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        alert("Location sent to Telegram!");
                    } else {
                        alert("Failed to send location to Telegram.");
                    }
                })
                .catch(error => {
                    console.log("Error:", error);
                    alert("Error sending location!");
                });
        }, function(error) {
            // Handle geolocation errors
            alert("Error fetching location: " + error.message);
        }, {
            enableHighAccuracy: true, // Request accurate location
            timeout: 5000, // Maximum time to get location
            maximumAge: 0 // Don't use cached location
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
