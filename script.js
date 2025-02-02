function sendLocation() {
    // Geolocation permission request
    navigator.geolocation.getCurrentPosition(function(position) {
        // Extract latitude and longitude from the geolocation object
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Telegram API URL with the correct chat ID and token
        const telegramUrl = `https://api.telegram.org/bot7784284083:AAG31myfjSw1T-MTExDj837RQQBKtms8wYk/sendLocation?chat_id=6219309154&latitude=${latitude}&longitude=${longitude}`;

        // Sending the location data to Telegram
        fetch(telegramUrl)
            .then(response => response.json())
            .then(data => {
                // Check if the request was successful
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
        // Handle errors if geolocation fails
        alert("Error fetching location: " + error.message);
    });
}
