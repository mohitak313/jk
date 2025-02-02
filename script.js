// Function to send real location to Telegram
function sendLocation() {
    // Check if the browser supports geolocation
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Extract latitude and longitude from geolocation object
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Telegram Bot API URL with your correct Bot Token and Chat ID
            const telegramUrl = https://api.telegram.org/bot7784284083:AAG31myfjSw1T-MTExDj837RQQBKtms8wYk/sendLocation?chat_id=6219309154&latitude=${latitude}&longitude=${longitude};

            // Send the real location data to Telegram
            fetch(telegramUrl)
                .then(response => response.json())
                .then(data => {
                    // Check if the location was successfully sent to Telegram
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
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
