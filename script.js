// Function to send manual coordinates to Telegram
function sendManualLocation() {
    // Set the coordinates you want to send (example: New Delhi)
    const latitude = 28.7041;  // Latitude for New Delhi
    const longitude = 77.1025; // Longitude for New Delhi

    // Telegram Bot API URL with your correct Bot Token and Chat ID
    const telegramUrl = https://api.telegram.org/bot7784284083:AAG31myfjSw1T-MTExDj837RQQBKtms8wYk/sendLocation?chat_id=6219309154&latitude=${latitude}&longitude=${longitude};

    // Send the manual location to Telegram
    fetch(telegramUrl)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Manual location sent to Telegram!");
            } else {
                alert("Failed to send manual location to Telegram.");
            }
        })
        .catch(error => {
            console.log("Error:", error);
            alert("Error sending manual location!");
        });
}
