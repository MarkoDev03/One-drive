  //INSTALL FIREBASE SERVER
  var firebaseConfig = {
    apiKey: "AIzaSyBInVpEsEvXzZtYDLy7qNA4AOIaS-5mjb8",
    authDomain: "saveprojects-e2b7f.firebaseapp.com",
    projectId: "saveprojects-e2b7f",
    storageBucket: "saveprojects-e2b7f.appspot.com",
    messagingSenderId: "1068677321956",
    appId: "1:1068677321956:web:97a4d0b9ddeb63520588f1",
    measurementId: "G-HXW1NYY74D"
  };




  //logged user uploads files in storage
function uploadFileToFirebase(e){
    document.getElementById('postcontent').innerHTML = ``;
   
    var user = firebase.auth().currentUser;      
           var file_name_x; 
           var _x_file;
           var progressBarValue;
    //user is online  x89
    if(user){
 
       //allow multiple files uploading
       for(let i=0;i<e.target.files.length;i++){
             let file = e.target.files[i];
             _x_file = file;
             file_name_x = file.name;
 
          //upload file to fireabse server using put function
         firebase.storage().ref("users/" + user.uid +'/data/'+ file.name).put(file).on('state_changed',snapshot =>{
 
          //show uploading progress to client if it is bigger then 0%
          if(((snapshot.bytesTransferred / snapshot.totalBytes) * 100) === "0") {
          document.getElementById('uploading-proces').style.display="none";
       }else{
 
          //show uploading progress to client
          document.getElementById('uploading-proces').style.display="flex";
 
          //count how many bytes are transfered
          document.getElementById('uploading-proces-value').value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
 
          console.log(snapshot.totalBytes);
          
          //show percentage to client
          document.getElementById('total-transfered-percetage').innerText =((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + "%";
       
       } if(((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) == 100){
          document.getElementById('upload-button').classList.add('post-now');
          document.getElementById('uploading-proces').style.display = 'none';
        }
        else{
          document.getElementById('uploading-proces').style.display = 'flex';
          document.getElementById('upload-button').classList.remove('post-now');
        }
      
    }) 
 }
 
 var buttonClicked = 0;
 document.getElementById('xws').addEventListener('click',() =>{
    document.getElementById('xws').classList.add('public-c');
    document.getElementById('xsws').classList.add('public-c-x');
    document.getElementById('upload-button').style.display = 'none';
 
   
    for(let i=0;i<e.target.files.length;i++){
       let file = e.target.files[i];
       
       
       _x_file = file;
       file_name_x = file.name;
 
    
       
    //upload file to fireabse server using put function
   firebase.storage().ref("PUBLIC/"+  user.email.slice(0,-10) + "--" + file_name_x ).put(file).on('state_changed',snapshot => {
     
    document.getElementById('uploading-proces').style.display="flex";
 
    //count how many bytes are transfered
    document.getElementById('uploading-proces-value').value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
 
    console.log(snapshot.totalBytes);
    
    //show percentage to client
    document.getElementById('total-transfered-percetage').innerText =((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + "%";
    
    if(((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) == 100){
       document.getElementById('upload-button').classList.add('post-now');
       document.getElementById('uploading-proces').style.display = 'none';
      }else{
       document.getElementById('upload-button').classList.remove('post-now');
       document.getElementById('uploading-proces').style.display = 'flex';
      }
 
   });
 }
 
 setInterval(() => { sendRequest(file_name_x);}, 10);
    buttonClicked++;
 })
 
 // firebase.database().ref("public_posts/").on("value",snap => {
 //    snap.forEach(snapshot =>{
 //       if(snapshot.val().post_name === file_name_x) {
 //          alert("POSTED!");
 //       }
 //    })
 // })
 
 for(let i=0;i<e.target.files.length;i++){
    let file = e.target.files[i];
    let HTML=``;
   
    //image url
    var imageURLdownload  = window.URL.createObjectURL(file);
    var fileType = file.type,fileSizeProperty = (file.size/1000000).toFixed(2),name = file.name;
 
    if(name.length > 20) {
       name = name.slice(0,-20);
    }
    if(fileType.length > 25) {
       fileType = fileType.slice(0,-22);
    }
 
    if(fileType === "image/png" || fileType === "image/jpg" || fileType === "image/jpeg") {
       HTML=`<article class="storage-article" id="${fileSizeProperty}"><img src="${imageURLdownload}" alt ="" width="100%" height="auto" style="pointer-events: none;"  class="radiustht"><div class="post-options2"><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div></article>`;      
    }else if (fileType === "video/mp4") {
       HTML=`<article class="storage-article" id="${fileSizeProperty}"><video src="${imageURLdownload}" autoplay loop muted width="100%" height="auto"  class="radiustht"></video><div class="post-options2"><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div></article>`;               
    }else if (fileType === "application/octet-stream"){
        HTML=`<article class="storage-article" id="${fileSizeProperty}"><img src="./media/rar.jpg" alt ="" width="100%" height="auto" style="pointer-events: none;"  class="radiustht"><div class="post-options2"><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div></article>`;            
    }else {
        HTML=`<article class="storage-article" id="${fileSizeProperty}"><img src="./media/none-pic.png" alt ="" width="100%" height="auto" style="pointer-events: none;" class="radiustht"><div class="post-options2"><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div></article>`;    
    } 
        document.getElementById('postcontent').innerHTML += HTML;
    }
 }
 //user is not logged in
            else{
 
             //alert user
             alertUserAboutSuccess("You must log in!");
            }
    }
 
    //SEND PUBLIC POST TO DATABASE
    function sendRequest(name) {
       var user = firebase.auth().currentUser;
       if(user){
       
       var context;
       if(name.includes(".")) {
          context = name.replace(/\./g,' ');
       }else  if(name.includes("#")) {
          context = name.replace(/\#/g,' ');
       }else if(name.includes("[")) {
          context = name.replace(/\[/g,' ');
       } else if(name.includes("$")) {
          context = name.replace(/\$/g,' ');
       }else {
          context = name;
       }
 
 
       var userNameData = user.email.slice(0,-10), correctUsername;
 
       if(userNameData.includes(".")) {
          correctUsername = userNameData.replace(/\./g,' ');
       }else  if(userNameData.includes("#")) {
          correctUsername = userNameData.replace(/\#/g,' ');
       }else if(userNameData.includes("[")) {
          correctUsername = userNameData.replace(/\[/g,' ');
       } else if(userNameData.includes("$")) {
          correctUsername = userNameData.replace(/\$/g,' ');
       }else {
          correctUsername = userNameData;
       }
 
       //Get ip address from where post is posted
       var xml = new XMLHttpRequest();
       xml.open("GET","https://api.ipify.org");
       xml.send();
       xml.addEventListener('loadend',getPostLocationVIAIP);   
  
    //respond with this. ip adress
     function getPostLocationVIAIP(e) {
       POST_IP(xml.responseText)//send ip address to database
     }
 
     //Initialize parser for device info
     var ua = new UAParser();
     var device_info = ua.getResult();
 
     //send post to database
     function POST_IP(post_ipv4_address) {
          firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(function(profile_image_url){
             firebase.storage().ref("PUBLIC/" + user.email.slice(0,-10) + "--" +name ).getDownloadURL().then(function(post_url){
                  firebase.storage().ref("PUBLIC/" + user.email.slice(0,-10) + "--" +name).getMetadata().then(function(data){
                   var timeCreated = (data.timeCreated).slice(0,-14);
                   var time = (data.timeCreated).substring(11);
                   var newCurrnetTime = time.slice(0,-8);
                   var device_model_ = device_info.device.model,device_type_ = device_info.device.type;
                   if(device_model_ == undefined) device_model_ = "PC";
                   if(device_type_  == undefined) device_type_ = "PC";
                    
                   console.warn("URL"+post_url);//~~~
                   
                   try
                      {
                         firebase.database().ref("public_posts/" + context+" "+correctUsername).set(
                            {                         
                                user:
                             {
                                username:(user.email).slice(0, -10),
                                user_id:user.uid,
                                user_email:user.email,
                                profile_image:profile_image_url
                             },
                                post:
                             {
                                post_id_save:user.uid+name.replace(/\s/g, ''),
                                post_url:post_url,
                                post_name:name,                
                                post_type:data.contentType,
                                post_size:(data.size/1000000).toFixed(2),
                                post_date:timeCreated,
                                post_time:newCurrnetTime,
                             },                                              
                                info:
                                {
                                   browser:
                                   {
                                      browser_name:device_info.browser.name,
                                      browser_version:device_info.browser.version,
                                   },
                                   OS:
                                   {
                                        system_name:device_info.os.name,
                                        system_version:device_info.os.version,                                  
                                   },
                                   device:
                                   {             
                                      device_name:device_model_,
                                      device_type:device_type_,                                              
                                   },
                                   ip:
                                   {
                                      post_ip_address:post_ipv4_address,
                                   }
                                }
                            }
                          )
                          //listAllPublicPosts(context);
                      }           
                      catch(public_post_error)
                      {
                         alertUserAboutSuccess(public_post_error);
                         console.error("PUBLIC POST ERROR MESSAGE: " + public_post_error);                       
                      }
                      finally
                      {
                         console.warn("public post!");
                        // alertUserAboutSuccess("Post is live!");
                        document.getElementById('upload-button').style.display = 'flex';
                      }
                   })
                })  
              })
             }
           }
          }
 
 var profleImageUrl;
 window.addEventListener('load',() => {
 function listAllPublicPosts(){
    firebase.database().ref("public_posts/").on('value',snapshot =>{
       snapshot.forEach(function(item) {
          //console.log(item.val());
 
          var user = firebase.auth().currentUser;
          if(user){
 
 
          var context,fullname = user.email.slice(0, -10);
       
          if(fullname.includes(".")) {
             context = fullname.replace(/\./g,' ');
          }else  if(fullname.includes("#")) {
             context = fullname.replace(/\#/g,' ');
          }else if(fullname.includes("[")) {
             context = fullname.replace(/\[/g,' ');
          } else if(fullname.includes("$")) {
             context = fullname.replace(/\$/g,' ');
          }else {
             context = fullname;
          }
 
          showPublicPosts(
             context, 
             item.val().post.post_url,
             item.val().post.post_name,
             item.val().user.username,
             item.val().user.profile_image,
             item.val().post.post_size,
             item.val().post.post_type,
             item.val().post.post_date,
             item.val().post.post_time,
             item.val().user.user_id,
             item.val().post.post_id_save,
             2);  
          }                                
 
 
       })
    })
 
 }
 
 listAllPublicPosts();
 })
        
    //when page is loaded show all public posts
    window.onload = function() {
       document.getElementById('public-posts').classList.add('selected');
       document.getElementById('private-posts').classList.remove('selected');
       document.getElementById('bodyID').style.display = 'none';
       document.getElementById('esae').style.display = 'grid';
    }
    
  
    //show public posts
    function publicPosts() {
       document.getElementById('public-posts').classList.add('selected');
       document.getElementById('private-posts').classList.remove('selected');
       document.getElementById('bodyID').style.display = 'none';
       document.getElementById('esae').style.display = 'grid';
    }
    
    //show private posts
    function privatePosts() {
       document.getElementById('public-posts').classList.remove('selected');
       document.getElementById('private-posts').classList.add('selected');
       document.getElementById('bodyID').style.display = 'grid';
       document.getElementById('esae').style.display = 'none';
    }
          
    window.onload = function(){
       publicPosts();
    }
   
    


    window.addEventListener('load',() =>{
        //user is logged to firebase in an existing account
        firebase.auth().onAuthStateChanged(function(user) {
     
           
              var user = firebase.auth().currentUser;
           
            if(user) {
               var fullname = user.email.slice(0,-10),context;
              if(fullname.includes(".")) {
                 context = fullname.replace(/\./g,' ');
              }else  if(fullname.includes("#")) {
                 context = fullname.replace(/\#/g,' ');
              }else if(fullname.includes("[")) {
                 context = fullname.replace(/\[/g,' ');
              } else if(fullname.includes("$")) {
                 context = fullname.replace(/\$/g,' ');
              }else {
                 context = fullname;
              }
              firebase.database().ref("custom-colors/").on('value',snapshot => {
                 snapshot.forEach(item => {
                    console.log(item.val());
                    if(item.val().user == context) {
                    root.style.setProperty("--msg-color", item.val().messageColor);
                    root.style.setProperty("--user-color", item.val().freindColor);
                    root.style.setProperty("--chat-color", item.val().backgroundColor);
                    root.style.setProperty("--friend-color-txt",item.val().freindColorText);
                    root.style.setProperty("--msg-color-txt", item.val().messageColortext);
                    root.style.setProperty("--username-in-chat", item.val().usernameInChat);
     
                    
             document.getElementById('color-message').value = item.val().messageColor;
             document.getElementById('color-message-text').value =item.val().messageColortext;
             document.getElementById('color-msg-friends').value = item.val().freindColor;
            document.getElementById('color-msg-friends-text').value =item.val().freindColorText;
             document.getElementById('color-background').value = item.val().backgroundColor;
            document.getElementById('color-background-text').value= item.val().usernameInChat;
                    }
                 })
              })
              var fullname = user.email.slice(0,-10),context;
              if(fullname.includes(".")) {
                 context = fullname.replace(/\./g,' ');
              }else  if(fullname.includes("#")) {
                 context = fullname.replace(/\#/g,' ');
              }else if(fullname.includes("[")) {
                 context = fullname.replace(/\[/g,' ');
              } else if(fullname.includes("$")) {
                 context = fullname.replace(/\$/g,' ');
              }else {
                 context = fullname;
              }
     
              firebase.database().ref("wallpapes/"+context).on('value', snap => {
                 
     console.log(snap.val())
                   document.getElementById('chat-box').style.backgroundImage = `url('${snap.val().chatWallpaper}')`;
                   document.getElementById('chat-box').style.backgroundSize = 'cover';
                   document.getElementById('chat-box').style.backgroundPosition = 'center';
                 
              })
     
        
           
           }
           
           //user is online
           if (user) {
     
              
              firebase.database().ref("public_posts").on('child_added',function(snapshot){
                 firebase.storage().ref("users/" + snapshot.val().username +'/data/').listAll().then(function(snap){
                    snap.items.forEach(function(item) {
                       console.log("ITEM:"+item);
                    })
                 }) 
              })
     
              firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(function(url){
                 setUserData(url,(user.email).slice(0, -10),user.uid);
               });
     
              //show messages
              firebase.database().ref("messages").on('child_added',function(snapshot){
                 var html = '',htmluser='';
                var user = firebase.auth().currentUser;
        
                if(snapshot.val().image === "/" && snapshot.val().video === "/")
     
     
                 if(snapshot.val().sender === user.email.slice(0, -10)) {
                      html += `
                      <div class="my-message" id="${snapshot.key}">
         <div class="message-and-image flex-messages">      
         <i class="fas fa-ellipsis-h edit-message" onclick="deleteMessage('${snapshot.key}')"></i><p class="user-message">${snapshot.val().message}</p>
         </div>
     </div>`;
                            
                   }else{
                    html += `
                      
                    <div class="message-box" id="${snapshot.key}">
                    <p class="username-in-chat">${snapshot.val().sender}</p>
                    <div class="message-and-image">
                    <img src="${snapshot.val().profileimage}" alt="" class="user-profile-image-in-chat">
                        <p class="user-message not-your">${snapshot.val().message}</p>
                    </div>
                </div>`;
                   }
                   else  if(snapshot.val().image !== "/"){
                      ////photo image
                    if(snapshot.val().sender === user.email.slice(0, -10)) {
                       html += `
                       <div class="my-message" id="${snapshot.key}">
          <div class="message-and-image user-x-image-controls">      
          <i class="fas fa-ellipsis-h edit-message delete-image" onclick="deleteMessage('${snapshot.key}','${snapshot.val().storage_reference}')"></i><img src="${snapshot.val().image}" alt="" class="sent-image" onclick="openImageFromChat('${snapshot.val().image}')">
          </div>
      </div>`;         
                    }else{
                     html += `                               
                     <div class="message-box" id="${snapshot.key}">
                     <p class="username-in-chat">${snapshot.val().sender}</p>
                     <div class="message-and-image">
                         <img src="${snapshot.val().profileimage}" alt="" class="user-profile-image-in-chat">
                         <img src="${snapshot.val().image}" alt=""   class="sent-image" onclick="openImageFromChat('${snapshot.val().image}')">
                     </div>
                 </div>`;
                   } 
                 }else  if(snapshot.val().video !== "/"){
     
                    if(snapshot.val().sender === user.email.slice(0, -10)) {
                       html += `
                       <div class="my-message" id="${snapshot.key}">
          <div class="message-and-image user-x-image-controls">      
          <i class="fas fa-ellipsis-h edit-message delete-image" onclick="deleteMessage('${snapshot.key}','${snapshot.val().storage_reference}')"></i> <video src="${snapshot.val().video}" loop muted autoplay class="sent-image" onclick="openVideoFromChat('${snapshot.val().video}')"></video>
          </div>
      </div>`;         
                    }else{
                     html += `                               
                     <div class="message-box" id="${snapshot.key}">
                     <p class="username-in-chat">${snapshot.val().sender}</p>
                     <div class="message-and-image">
                         <img src="${snapshot.val().profileimage}" alt="" class="user-profile-image-in-chat">
                        <video src="${snapshot.val().video}" loop muted  autoplay class="sent-image" onclick="openVideoFromChat('${snapshot.val().video}')"></video>
                     </div>
                 </div>`;
                   } 
                 }
                 document.getElementById('chat-box').innerHTML += html;
     
             // $('#chat-box').scrollTop(($('#chat-box').height())*1000);
     
             //scroll to bottom of chat
              $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);});
     
     
     
              //get all users for story
              firebase.database().ref("accounts/").once('value',snap => {
                 snap.forEach(function(snapshot) {
                 
                     //show stories
                    document.getElementById('story-wrapper').innerHTML +=`<div class="swiper-slide"><div class="border-frame"><div class="white-frame"><div class="story-image" style="background-image: url(${snapshot.val().profileimage});"></div></div></div><p class="story-username">${snapshot.val().username}</p></div>`;                     
                 })
     
                    //install swiper for stories
                    var swiper = new Swiper('.swiper-container', {
                       slidesPerView: 4,
                       spaceBetween:0,
                       loop:false,
                       freeMode: true,
                     });
                   });
          
              //display user's profile 
              var username = user.email, didsplayname = username.slice(0, -10);                                           
              var storage = firebase.storage(),storageRef = storage.ref();
     
              //list all files from firebase storage
              storageRef.child("users/" + user.uid +'/data/').listAll().then(function(result){
              
                 var arrayLength = result.items.length;
                 result.items.forEach(function(imageRef){
                      
                      //get metadata foreach file
                      imageRef.getMetadata().then(s=>{
     
                         //get file size, file type, when file is created and user id
                         var fileSizeProperty = (s.size/1000000).toFixed(2);     
                         var fileType = s.contentType, timeCreated = (s.timeCreated).slice(0,-14),
                         time = (s.timeCreated).substring(11),newCurrnetTime = time.slice(0,-8),
                         useriID = user.uid;   
           
             //get user's profile image from firebase storage
               firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(imgurl =>{
                           var iiName = imageRef.name.toString();    
                           profleImageUrl = imgurl;
                    
       //save file, premesti ovo na post kad se klikne i prosled mu parametre
       var fileNameStorage =  imageRef.name.replace(/\s/g, '');     
     
          //get users ipv4 address and log it to console
          var xml = new XMLHttpRequest();
          xml.open("GET","https://api.ipify.org");
          xml.send();
          xml.addEventListener('loadend',getIp);      
     
        function getIp(e) {
            userIP(xml.responseText)
        }
     
     
        function userIP(ipv4) {console.log(ipv4)}
         
                      //reference to database server
                      var storageSveReference = user.uid+fileNameStorage,i=0;
                        
       
                      //send following data for post to UI function to client side
                     showUsersStorageContectOnPage(context,i, imageRef,iiName,didsplayname,imgurl,fileSizeProperty,fileType,timeCreated,newCurrnetTime,useriID,storageSveReference,arrayLength);                                   
                    });              
                  })
                 .catch(function(er){console.log(er)})
              });
           });
     
           //replace characters to define database server name and username
           var username = user.email, didsplayname = username.slice(0, -10);
           var fullname = didsplayname.toString(),context;
        
       //replace characters in username to get database reference
        if(fullname.includes(".")) {
           context = fullname.replace(/\./g,' ');
        }else  if(fullname.includes("#")) {
           context = fullname.replace(/\#/g,' ');
        }else if(fullname.includes("[")) {
           context = fullname.replace(/\[/g,' ');
        } else if(fullname.includes("$")) {
           context = fullname.replace(/\$/g,' ');
        }else {
           context = fullname;
        }
     
           //if user is logged in auto-fill mail sender address
           // var emailFom = document.getElementById('mail-input');
           // emailFom.value = user.email;
     
           } else {   
              //if user is not logged in 
              document.getElementById('usernamename').innerHTML = `<p>username</p>`;
              document.getElementById('img').src = 'https://www.clipartmax.com/png/middle/256-2564545_nauman-javid-none-profile.png';
         }
     });})
     AOS.init();
     
     function showPublicPosts(context, URL,name,didsplayname,profileimage,fileSizeProperty,fileType,timeCreated,newCurrnetTime,useriID,storageSveReference,arrayLength) {
                var user = firebase.auth().currentUser;       
     
        if(user.email.slice(0,-10) === didsplayname){
     
              //display different content for different file type   
              if(fileType === "image/png" || fileType === "image/jpeg" || fileType === "image/jpeg") {
                 HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><img src="${URL}" alt="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}"></div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a>
     <i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}" style="display:flex;z-index:999999">
     <i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;      
              }else if (fileType === "video/mp4") {
                 HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><video src="${URL}" autoplay loop muted width="100%" height="auto"></video><div class="not-active" id="${fileType}${name}"></div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a>
     <i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}">
     <i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;               
              }else if (fileType === "application/octet-stream"){
                 HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><img src="./media/rar.jpg" alt ="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}"></div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a>
               <i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}">
               <i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;            
              }else {
                 HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><img src="./media/none-pic.png" alt ="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}"></div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}">
                 <i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;    
              }
     
        }else{
     
                  //display different content for different file type   
                  if(fileType === "image/png" || fileType === "image/jpeg" || fileType === "image/jpeg") {
                    HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><img src="${URL}" alt="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}"></div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a>
     <i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}" style="display:flex;z-index:999999"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;      
                 }else if (fileType === "video/mp4") {
                    HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><video src="${URL}" autoplay loop muted width="100%" height="auto"></video><div class="not-active" id="${fileType}${name}"></div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a>
     <i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;               
                 }else if (fileType === "application/octet-stream"){
                    HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><img src="./media/rar.jpg" alt ="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}"></div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a>
                  <i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;            
                 }else {
                    HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><img src="./media/none-pic.png" alt ="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}"></div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;    
                 }
              
              }
                 
                 //fetch saved posts from database server
                 fetchSvedPosts(context,URL,name,fileSizeProperty,fileType,timeCreated,newCurrnetTime,didsplayname,storageSveReference,profileimage);
                 document.getElementById('esae').innerHTML += HTML;
                   
           }
     
         //show users data/ from storage on page
         function showUsersStorageContectOnPage(context,row, images,name,didsplayname,profileimage,fileSizeProperty,fileType,timeCreated,newCurrnetTime,useriID,storageSveReference,arrayLength) {
             
           //get profile image of user
           images.getDownloadURL().then(function(URL) {               
                    let HTML = ``;
                 
                 //display different content for different file type   
                 if(fileType === "image/png" || fileType === "image/jpeg" || fileType === "image/jpeg") {
                    HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><img src="${URL}" alt="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}"></div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;      
                 }else if (fileType === "video/mp4") {
                    HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><video src="${URL}" autoplay loop muted width="100%" height="auto"></video><div class="not-active" id="${fileType}${name}">  </div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a>
                    <i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i>
                    <i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div>    <div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;               
                 }else if (fileType === "application/octet-stream"){
                    HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><img src="./media/rar.jpg" alt ="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}">  </div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;            
                 }else {
                    HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><div class="show-user-saved"><img src="./media/none-pic.png" alt ="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}">  </div></div><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;    
                 }
                 
                 //fetch saved posts from database server
                 fetchSvedPosts(context,URL,name,fileSizeProperty,fileType,timeCreated,newCurrnetTime,didsplayname,storageSveReference,profileimage);
                 
                 //display all posts to client side
                 document.getElementById('bodyID').innerHTML += HTML;
     
           //       if(document.getElementById('bodyID').children.length === arrayLength) {
           //          document.getElementById('loading-popup').style.display = 'none';
           //          document.getElementById('loadscreen').style.display = 'none';
           //          document.getElementById('new-overlay').style.display = 'none';
           //          document.getElementById('bodyID').style.display = 'none';
           //       }else{
           // document.getElementById('loading-popup').style.display = 'flex';
           // document.getElementById('loadscreen').style.display = 'flex';
           // document.getElementById('new-overlay').style.display = 'flex';
           // document.getElementById('bodyID').style.display = 'none';
           //       }
              });
         }
        
     
        //loading animation 
        function loadingAnimationPopUp() {
           document.getElementById('loading-popup').style.display = 'flex';
           document.getElementById('loadscreen').style.display = 'flex';
           document.getElementById('new-overlay').style.display = 'flex';
        }
     
         //show preview of image
       function preview(locationOfImage,type) {
         
        //remove reverse class
        document.getElementById('preview-div').classList.remove('reverse');
        document.getElementById('previe-popup').classList.remove('reverse');
        document.getElementById('new-overlay').classList.remove('overlay-opacity');
     
        var div = document.getElementById('preview-div');var src = locationOfImage;
        var txtMessage = document.getElementById('text-message');var previwPopUp = document.getElementById('previe-popup');
        var previewOvewrlay = document.getElementById('new-overlay');div.style.display ='flex'; 
     
        document.body.style.overflowY = 'hidden';//block scrolling
     
        //show different popup for different file type to client
        if(type === "image/png" || type === "image/jpeg" || type === "image/jpeg"){  
           div.innerHTML = `<img src="${src}" alt="" class="preview-image">`;previwPopUp.style.display = 'flex';previewOvewrlay.style.display = 'flex';txtMessage.style.display = 'none';
        }else if(type === "video/mp4") {    
           div.innerHTML = `<video src="${src}" autoplay loop muted controls class="preview-image"></video>`;previwPopUp.style.display = 'flex';previewOvewrlay.style.display = 'flex';txtMessage.style.display = 'none';
        }else if(type === "audio/wav" || type === "audio/mp3" || type === "audio/mpeg") {
           div.innerHTML = `<video src="${src}" autoplay loop muted controls class="preview-audio" id="audio"></video>`;previwPopUp.style.display = 'flex';previewOvewrlay.style.display = 'flex';txtMessage.style.display = 'none';
        }else{
           txtMessage.style.display = 'flex';txtMessage.innerText =  "Cannot preview the "  + type + " file";previwPopUp.style.display = 'flex';previewOvewrlay.style.display = 'flex';image.classList.remove('preview-image');
        }
     
     }
       
     //when page is loaded get all saved posts from database storage
     function fetchSvedPosts(context,URL,filename,fileSizeProperty,fileType,timeCreated,newCurrnetTime,didsplayname,storageSveReference,profileimage) {
             var cont;
              
             //replace characters in username to get database reference
             if(filename.includes(".")) {
                 cont = filename.replace(/\./g,' ');
              }else  if(filename.includes("#")) {
                 cont = filename.replace(/\#/g,' ');
             }else if(filename.includes("[")) {
              cont = filename.replace(/\[/g,' ');
             }else if(filename.includes("$")) {
              cont = filename.replace(/\$/g,' ');
             }else {
              cont = filename;
             }
     
             //get files from database
        firebase.database().ref("users/" + context + "/" + cont + "/").once('value', (snapshot) => {
          
           //log all posts
           snapshot.forEach(function(childSnapshot) {                     
     
                    //set new bookmark for saved posrs
                    document.getElementById(childSnapshot.val().file_name).innerHTML = `<i class="fas fa-bookmark" onclick="removeSvedPost('${cont}','${context}','${URL}','${filename}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i>`;
          });
        });
     }
     
          //close image preview
          function closeImagePreview(){
     
           document.body.style.overflowY = 'visible';
           var div = document.getElementById('preview-div');
           
           //add reverse class
           document.getElementById('preview-div').classList.add('reverse');
           document.getElementById('previe-popup').classList.add('reverse');
           document.getElementById('new-overlay').classList.add('overlay-opacity');
     
           //clear div
              setTimeout(() => {
                 document.getElementById('previe-popup').style.display = 'none';
                document.getElementById('new-overlay').style.display = 'none';
                div.style.display = 'none';div.innerHTML = ``;
              }, 400);
     
              //pause video/audio and close it
                document.getElementById('audio').pause();      
          }
     
       var savedPosts = [];
     
       //remove post from saved post storage
     function removeSvedPost(filename, databasereference,URL,filename,fileSizeProperty,fileType,timeCreated,newCurrnetTime,didsplayname,storageSveReference,profileimage){
        
        var pointClass = document.getElementById(fileType+filename);
         
           setTimeout(() => {
           pointClass.classList.add('not-active');
           pointClass.classList.remove('active-popop'); 
           pointClass.innerHTML = ``;
     
           }, 1000);
     
           pointClass.classList.remove('not-active');
           pointClass.classList.add('active-popop'); 
     
           //check file type and set ordered image for it
           if(fileType === "image/png" || fileType === "image/jpeg" || fileType === "image/jpeg") {
                pointClass.innerHTML = `<img src="${URL}" alt="" class="saved-image"><h3>Removed </h3>`;
           }else {
           pointClass.innerHTML = `<img src=" ./media/none-pic.png" alt="" class="saved-image"><h3>Removed</h3>`;
           }     
     
        var cont;
        
        //replace chacraters in name to get database reference
        if(filename.includes(".")) {
        cont = filename.replace(/\./g,' ');
        }else  if(filename.includes("#")) {
        cont = filename.replace(/\#/g,' ');
       }else if(filename.includes("[")) {
        cont = filename.replace(/\[/g,' ');
       }else if(filename.includes("$")) {
        cont = filename.replace(/\$/g,' ');
       }else {
        cont = filename;
       }
     
       //remove post from database
        firebase.database().ref("users/" + databasereference +"/"  + cont).remove();
     
           //set previous icon for bookmark
        document.getElementById(filename).innerHTML = `<i class="far fa-bookmark" onclick="savePostToStorage('${databasereference}','${URL}','${filename}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i>`; 
     }
     
     //save post to storage
     function savePostToStorage(databasereference,fileurl,filename,filesize,filetype,datecreated,timecreated,username,storageid,profileimage) {   
        
           var pointClass = document.getElementById(filetype+filename);
         
          //remove save popup
           setTimeout(() => {
           pointClass.classList.add('not-active');
           pointClass.classList.remove('active-popop'); 
           pointClass.innerHTML = ``;
           }, 1000);
     
           pointClass.classList.remove('not-active');
           pointClass.classList.add('active-popop'); 
     
     
           //check file type and set ordered image for it
           if(filetype === "image/png" || filetype === "image/jpeg" || filetype === "image/jpeg") {
                pointClass.innerHTML = `<img src="${fileurl}" alt="" class="saved-image"><h3>Saved</h3>`;
           }else {
           pointClass.innerHTML = `<img src=" ./media/none-pic.png" alt="" class="saved-image"><h3>Saved</h3>`;
           }     
     
        //push data to array
        savedPosts.push(
              {
                 post_id:storageid,
                 post_url: fileurl,
                 username:username,
                 file_name:filename,
                 file_size:filesize,
                 file_type:filetype,
                 date_created:datecreated,
                 time_created:timecreated,
                 profile_image:profileimage
              }
           );
     
              var cont;
     
               //replace characters to enable database reference
              if(filename.includes(".")) {
                   cont = filename.replace(/\./g,' ');
              }else  if(filename.includes("#")) {
                   cont = filename.replace(/\#/g,' ');
              }else if(filename.includes("[")) {
                   cont = filename.replace(/\[/g,' ');
              }else if(filename.includes("$")) {
                   cont = filename.replace(/\$/g,' ');
              }else {
                     cont = filename;
             }
     
             //set remove post icon if post is saved
             document.getElementById(filename).innerHTML = `<i class="fas fa-bookmark" id="${fileurl}"
             onclick="removeSvedPost('${cont}','${databasereference}','${fileurl}','${filename}','${filesize}','${filetype}','${datecreated}','${timecreated}','${username}','${storageid}','${profileimage}')"></i>`;
               
           document.getElementById(filename).classList.add('save-animations');
     
             //set attributes to firebase server storage
             firebase.database().ref("users/" + databasereference + "/" + cont + "/").set({    
                 post:{post_id:storageid,
                 post_url: fileurl,
                 username:username,
                 file_name:filename,
                 file_size:filesize,
                 file_type:filetype,
                 date_created:datecreated,
                 time_created:timecreated,
                 profile_image:profileimage}          
               })
     
               //log saved posts from database
               firebase.database().ref("users/" + databasereference + "/" + cont ).once('value', (snapshot) => {
                 snapshot.forEach((childSnapshot) => {
                        console.log(childSnapshot.val());              
                });
              });
     }
     
         //delete file from firebase storage
     function deleteThisPost(name,size,type,date,time){
        var user = firebase.auth().currentUser;
        
          //disable scrolling
           document.body.style.overflowY = 'hidden';
           document.getElementById('st-dis').style.display = 'flex';
           document.getElementById('new-overlay').style.display = 'flex';
           document.getElementById('st-dis').classList.remove('reverse');
           document.getElementById('new-overlay').classList.remove('overlay-opacity');
           
          
          var displayname,postType;
     
          //if name is longer then 25 characters
          if(name.length > 25) {
           displayname = name.slice(0,29);
           }else{
              displayname =name;
           }
     
           //if type is longer then 25 charcacters
           if(type.length > 25) {
                postType = type.slice(0,29);
           }else{
                 postType =type;
           }
     
           var context;
           if(name.includes(".")) {
              context = name.replace(/\./g,' ');
           }else  if(name.includes("#")) {
              context = name.replace(/\#/g,' ');
           }else if(name.includes("[")) {
              context = name.replace(/\[/g,' ');
           } else if(name.includes("$")) {
              context = name.replace(/\$/g,' ');
           }else {
              context = name;
           }
     
     
           var userNameData = user.email.slice(0,-10), correctUsername;
     
           if(userNameData.includes(".")) {
              correctUsername = userNameData.replace(/\./g,' ');
           }else  if(userNameData.includes("#")) {
              correctUsername = userNameData.replace(/\#/g,' ');
           }else if(userNameData.includes("[")) {
              correctUsername = userNameData.replace(/\[/g,' ');
           } else if(userNameData.includes("$")) {
              correctUsername = userNameData.replace(/\$/g,' ');
           }else {
              correctUsername = userNameData;
           }
     
     
          //delete popup content 
        document.getElementById('delete-txt').innerHTML = `
        <div class="flx-metadata"><span>Name:</span><span><b class="new-color-3">${displayname}</b></span></div><div class="flx-metadata"><span>Size:</span><span><b class="new-color-3">${size} MB</b></span></div><div class="flx-metadata"><span>Type:</span><span><b class="new-color-3">${postType}</b></span></div><div class="flx-metadata"><span>Posted:</span><span><b class="new-color-3">${date} at ${time}</b></span></div>`;
       
       //onclick function for post deleting
        document.getElementById('delete').addEventListener('click',() =>{
           //document.getElementById(size).style.display = 'none';
           document.body.style.overflowY = 'auto';
           //delete post from ordered storage location
     firebase.storage().ref().child("PUBLIC/"+user.email.slice(0, -10) + "--"+ name ).delete();
        firebase.database().ref("public_posts").child(context +" " + correctUsername).remove();
           firebase.storage().ref().child("users/" +user.uid + "/data/" + name).delete().then(() =>{
              document.getElementById('st-dis').style.display = 'none';    
                 document.getElementById('new-overlay').style.display = 'none'; 
                
                //clear info
                 name = "";
                 size = "";
                 type = "";
                 date = "";
                 time = "";
                 
                 //alertUserAboutSuccess("assa");
           //refresh page   
       pageReloader();
        })
        .catch((error)=>{
     
           //alert user about deleting
           alertUserAboutSuccess(error);
        })
     
        
        
        
        
       /* firebase.database().ref("public_posts").on("value",snap=> {
              snap.forEach(snapshot => {
                 if(snapshot.val().post.post_name === name && snapshot.val().user.username === user.email.slice(0, -10)) {
     
                    // firebase.storage().ref().child("PUBLIC/"+ snapshot.val().post.post_name + " "  + user.email.slice(0, -10)).delte().then(() => {
                    //    alertUserAboutSuccess("Public post deleted!");
                    //    firebase.storage().ref().child("users/" +user.uid + "/data/" + name).delete();
                    // }).catch((error)=>{
     
                    //    //alert user about deleting
                    //    alertUserAboutSuccess(error);
                    // });
                    
                 }
                 else{
                    // firebase.storage().ref().child("users/" +user.uid + "/data/" + name).delete().then(() =>{
                    //    alertUserAboutSuccess("Private post deleted!");
     
                    // }).catch((error)=>{
     
                    //    //alert user about deleting
                    //    alertUserAboutSuccess(error);
                    // });
     
     
                    firebase.storage().ref().child("users/" +user.uid + "/data/" + name).delete().then(() =>{
                       document.getElementById('st-dis').style.display = 'none';    
                          document.getElementById('new-overlay').style.display = 'none'; 
                         
                         //clear info
                          name = "";
                          size = "";
                          type = "";
                          date = "";
                          time = "";
                          alertUserAboutSuccess("Private post deleted!")
                    //refresh page   
               // pageReloader();
                 })
                 .catch((error)=>{
              
                    //alert user about deleting
                    alertUserAboutSuccess(error);
                 })
     
     
                 }
              })
        })*/
     })
      }

      
      function infoData(name,size,type,date,time){

        //show elements
          document.getElementById('info-popup').style.display = 'flex';
          document.getElementById('new-overlay').style.display = 'flex';
          document.getElementById('info-mail').style.display = 'flex';
          document.getElementById('data-info').style.display = 'flex';

          document.getElementById('info-popup').classList.remove('reverse');
          document.getElementById('new-overlay').classList.remove('overlay-opacity');
          document.getElementById('info-mail').classList.remove('reverse');
          document.getElementById('data-info').classList.remove('reverse');
       
       //hide post name if it is longer then 25 and add ...   

       if(name.length > 25) {
          name = name.slice(0,29);
       }else{
          name =name;
       }

       if(type.length > 25) {
        type = type.slice(0,29);
      }else{
        type =type;
      }

        //html for popup
        document.getElementById('data-info').innerHTML = `<div class="flx-metadata"><span>Name:</span><span><b class="new-color-3">${name}</b></span></div><div class="flx-metadata"><span>Size:</span><span><b class="new-color-3">${size} MB</b></span></div><div class="flx-metadata"><span>Type:</span><span><b class="new-color-3">${type}</b></span></div><div class="flx-metadata"><span>Posted:</span><span><b class="new-color-3">${date} at ${time}</b></span></div>`;
        document.getElementById('data-info').style.display = 'block';document.getElementById('data-info').style.fontSize = '15px'
       
       //disable scrolling while popup is active
        document.body.style.overflowY = 'hidden';
       } 

       //Close data info
       function closeDataInfo(){

        //hide elements
       setTimeout(() => {
        document.getElementById('info-popup').style.display = 'none';
        document.getElementById('new-overlay').style.display = 'none';
        document.getElementById('info-mail').style.display = 'none';
        document.getElementById('data-info').style.display = 'none';
       }, 400);
       
       //add hidning classes animation
       document.getElementById('info-popup').classList.add('reverse');
       document.getElementById('new-overlay').classList.add('overlay-opacity');
       document.getElementById('info-mail').classList.add('reverse');
       document.getElementById('data-info').classList.add('reverse');

        //enable scrolling
        document.body.style.overflowY = 'visible';
       }
