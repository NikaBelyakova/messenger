let chatContent = document.querySelector('.chat-content');
let messageTemplate = document.querySelector('#message-template').content;
let newMessageTemplate = messageTemplate.querySelector('.chat-message');
let newMessageForm = document.querySelector('.chat-form');
let newChatMessage = newMessageForm.querySelector('.chat-form-input');

let deleteMessage = function (message) {
  let deleteMessageButton = message.querySelector('.chat-message-button');
  deleteMessageButton.addEventListener('click', function () {
    message.remove();
  })};
  
  
newMessageForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var chatText = newChatMessage.value;
  var newMessage = newMessageTemplate.cloneNode(true);
  var chatMessageText = newMessage.querySelector('p');
  chatMessageText.textContent = chatText;

  chatContent.appendChild(newMessage);
  newChatMessage.value = '';
  
  deleteMessage(newMessage);
});

