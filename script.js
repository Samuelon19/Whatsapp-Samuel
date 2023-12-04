function sendMessage() {
    const userMessage = document.getElementById("user-message").value;
    if (userMessage.trim() !== "") {
        const chatContainer = document.getElementById("chat-container");
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");
        const messageSent = document.createElement("div");
        messageSent.classList.add("message", "sent");
        messageSent.textContent = userMessage;
        messageContainer.appendChild(messageSent);
        chatContainer.appendChild(messageContainer);
        document.getElementById("user-message").value = "";
    }
}