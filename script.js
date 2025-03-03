JavaScript (script.js)
javascript
document.getElementById("send-btn").addEventListener("click", function () {
  const messageInput = document.getElementById("message-input");
  const messageText = messageInput.value.trim();

  if (messageText !== "") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = messageText;

    document.getElementById("messages").appendChild(messageElement);
    messageInput.value = ""; // Clear the input field

    // Scroll to the bottom of the messages box

    document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
  }
});

// Allow sending message by pressing "Enter" key
document.getElementById("message-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("send-btn").click();
  }
});