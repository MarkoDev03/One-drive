firebase.database().ref("accounts/")
.once('value',snap => {
   snap.forEach(function(snapshot) {
      document.getElementById('accounts').innerHTML +=`
         <div class="account swiper-slide2" onclick="openChat('${snapshot.val().id}','${snapshot.val().profileimage}','${snapshot.val().username}')">
         <div class="story-image chat-img-priv" style="background-image: url(${snapshot.val().profileimage});"></div>
         <p class="display-username">${snapshot.val().username}</p>
         </div>`;                     
      }) 
})



var chat = document.getElementById('chat-ui')
var chatOverlay = document.getElementById('chat-private-overlay')
var chatInput = document.getElementById('private-ui-chat-message')
var imageVideoIcon = document.getElementById('icons-for-messag-private')
var closeBtn = document.getElementById('close-chat-btn')
var sendBtn = document.getElementById('sned-private-message-ui')
var chatUsername = document.getElementById('username-private')
var userImage = document.getElementById('user-image-private')

chatInput.addEventListener('keyup',() => {
      imageVideoIcon.style.display = 'none'
      sendBtn.style.display = 'flex'
})

chatInput.addEventListener('keydown',() => {
      imageVideoIcon.style.display = 'none'
      sendBtn.style.display = 'flex'
})

chatInput.addEventListener('click',() => {
      imageVideoIcon.style.display = 'none'
      sendBtn.style.display = 'flex'
})

chat.addEventListener('click', () => {
      imageVideoIcon.style.display = 'flex'
      sendBtn.style.display = 'none'
})

closeBtn.addEventListener('click',() => {
      sessionStorage.setItem("private-chat-id",'')
      chatOverlay.style.display = 'none'
      chat.style.display = 'none'
      chatUsername.innerText = ''
      userImage.src = ''
})

function openChat(id, image, username) {
    sessionStorage.setItem("private-chat-id",id)
    chatOverlay.style.display = 'flex'
    chat.style.display = 'flex'
    chatUsername.innerText = username
    userImage.src = image
      
    document.getElementById('private-chat').style.height = chat.clientHeight - 100 + 'px'
    $("#private-chat").scrollTop($("#private-chat")[0].scrollHeight);
 
}

fetch("data.json", { method: "GET" })
.then((response) => response.json())
.then((data) => showEmojesPrivate(data));

function showEmojesPrivate(data) {
      var emojiArray = data.emojes;
      for (var i = 0; emojiArray.length; i++) {
          console.log(emojiArray[i])
    
    }
}

