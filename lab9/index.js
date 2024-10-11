document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send-button-user1').addEventListener('click', function() {
        let messageInput = document.getElementById('message-input-user1');
        let messageText = messageInput.value.trim();

        if (messageText !== "") {
            let messageElement = document.createElement('div');
            messageElement.classList.add('message', 'user1');
            messageElement.textContent = messageText;

            document.getElementById('messages').appendChild(messageElement);
            messageInput.value = ''; 
        }
    });

    document.getElementById('send-button-user2').addEventListener('click', function() {
        let messageInput = document.getElementById('message-input-user2');
        let messageText = messageInput.value.trim();

        if (messageText !== "") {
            let messageElement = document.createElement('div');
            messageElement.classList.add('message', 'user2');
            messageElement.textContent = messageText;

            document.getElementById('messages').appendChild(messageElement);
            messageInput.value = ''; 
        }
    });
});

