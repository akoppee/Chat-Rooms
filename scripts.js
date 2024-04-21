// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const socket = io();

  document.getElementById('send-message').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message) {
      socket.emit('message', message);
      messageInput.value = '';
    }
  });

  socket.on('message', (message) => {
    const messagesList = document.getElementById('messages');
    const msgElement = document.createElement('li');
    msgElement.textContent = message;
    messagesList.appendChild(msgElement);
  });
});
