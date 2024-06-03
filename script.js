// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8_BjV_XSn5-g35FGo6NOKX3QExCcyPLw",
    authDomain: "to-do-list-70530.firebaseapp.com",
    projectId: "to-do-list-70530",
    storageBucket: "to-do-list-70530.appspot.com",
    messagingSenderId: "162040004643",
    appId: "1:162040004643:web:9a05be5bea2b0aab26f196",
    measurementId: "G-1JJ2GRZWZ7"
  };
// Get a reference to the chat database
const db = firebase.database();
const chatRef = db.ref('chats');

// Get the input field and send button
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Get the chat log element
const chatLog = document.getElementById('chat-log');

// Add an event listener to the send button
sendBtn.addEventListener('click', async () => {
    // Get the message from the input field
    const message = messageInput.value.trim();

    // Check if the message is not empty
    if (message!== '') {
        // Create a new chat message object
        const chatMessage = {
            message: message,
            timestamp: Date.now(),
        };

        // Add the chat message to the database
        chatRef.push(chatMessage);

        // Clear the input field
        messageInput.value = '';
    }
});

// Add a value event listener to the chat database
chatRef.on('value', (snapshot) => {
    // Get the chat messages from the database
    const chats = snapshot.val();

    // Clear the chat log
    chatLog.innerHTML = '';

    // Loop through the chat messages and add them to the chat log
    Object.keys(chats).forEach((key) => {
        const chatMessage = chats[key];
        const chatLogItem = document.createElement('li');
        chatLogItem.textContent = `${chatMessage.message} - ${new Date(chatMessage.timestamp).toLocaleTimeString()}`;
        chatLog.appendChild(chatLogItem);
    });
});