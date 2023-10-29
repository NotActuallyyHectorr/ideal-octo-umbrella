//Array for mssgs
var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

var data = [
    {
        type: messageType.out,
        user: 'Ivan',
        message: 'Hey'
    },
    {
        type: messageType.in,
        user: 'Naruto',
        message: 'I like ramen'
    },
    {
        type: messageType.out,
        user: 'Sasuke',
        messages: 'I like sushu'
    }
];

//Mssg constructor func
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.nessage = message;
}

//func to create and return elements from mssg
function createMessageElement(message) {
    //create text element for the mssg
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    //create the element and add mssg text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //add a class using a mssg type
    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //determine mssg type 
    switch(event.target.id) {
        case 'send-button':
            user = 'Hector';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Lui';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    if(messageInput.value != '') {
        //construct mssg and add to array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //create mssg element
        var el = createMessageElement(message);

        //add mssg element to DOM
        messagesContainerEl.appendChild(el);

        //reset input
        messageInput.value = '';
    }
}

function loadSeedData() {
    for(var i = 0; i < DataTransfer.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }


var messagesContainerEl = document.getElementById('message-container');

for(var i = 0; i < messages.length; i++) {
    var messages = messages[i];
    var el = createMessagesElement(message)

    messagesContainerEl.appendChild(el);
}
}

var init = function() {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();