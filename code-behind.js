//header id for evry page--------------------------------------------
var contactHeader = document.querySelector('.contact-header');

//files and posts arrays
let files = {};
var posts = [];


   //get information about browser, device, cpu, versions, os
   var ua = new UAParser();
	var result = ua.getResult();
	console.log(result);

     //get data from json file for options in header
     fetch('data.json',{method:"GET"})
     .then(response => response.json())
     .then(data => window.onload = fncHeader(data))
     .catch(error => console.error(error));

     //class that defines all popups in the application
     class APPLICATION_POPUP{

      //show information popup
      showInformationPopUp() {
         document.getElementById('info-mail').innerHTML = `<div class="set-class popup" id="info-popup"><button class="setting-button" style="padding:0px">File info</button><div class="setting-button" style="padding:0px" id="data-info"></div><div class="flex-button" style="width: 100%;margin-right: 0px;"> <button class="new-mail" onclick="closeDataInfo()">CLOSE</button></div></div>`;
      }

      //show delete popup
      showDeletePopUp() {
         document.getElementById('st-dis').innerHTML = ` <div class="set-class popup" id="ch-mail"><button class="setting-button" style="padding:0px">Do you want to delete</button><div class="set-display-flex" id="delete-txt"></div><div class="flex-button"> <button class="new-mail" onclick="cancleUpdateMail()" >CANCLE</button><button class="new-mail" id="delete">DELETE</button></div></div>`;
      }

      //show log out popup
      showLogOutPopUp() {
         document.getElementById('log-out-mail').innerHTML = `<div class="set-class popup" id="log-out-mailp"> <div class="setting-button" style="width: 100%;justify-content: center;text-align: center;">Do you want to log out?</div><div class="flex-button" style="width: 100%;margin-right: 0px;justify-content: center;"><button  onclick="logOut()"  class="new-mail" id="logoutbtn">LOG OUT</button> <button class="new-mail" onclick="closeLogOutPopUp()">CANCLE</button></div></div>`;
      }

      //show preview popup
      showPreviewPopUp() {
         document.getElementById('previe-popup').innerHTML = `<div class="set-class popup" id="ch-mail"><button class="setting-button" style="padding:0px" id="text-message"></button><div id="preview-div"></div><div class="set-display-flex" id="desc"></div><div class="flex-button"> <button class="new-mail" onclick="closeImagePreview()">CLOSE</button></div></div>`;
      }

      //show update mail
      showMailUpdaterDiv() {
         document.getElementById('update-ml').innerHTML = `<div class=" set-class popup" id="ch-mail"><button class="setting-button top-mrg">Update email</button><input type="text" name="newmail" id="new-mail-set"  placeholder="New password" autocomplete="off" autofocus="off" class="input-box-new"><div class="flex-button"><button class="new-mail" onclick="cancleUpdateMail()" id="mail-update-btn">CANCLE</button><button class="new-mail" onclick="updateMail()">UPDATE</button></div>`;
      }

      //alert user about success
      showAlertUser() {
         document.getElementById('alert-popup').innerHTML = `<div class="set-class popup" id="ch-mail"><button class="setting-button" style="padding:0px" id="text-message-alert"></button><div class="set-display-flex" id="desc-alert"></div><div class="flex-button"> <button class="new-mail" onclick="closeALert()">CLOSE</button></div></div>`;
      }

      //loading animation popup
      loadingAnimationPopUp() {
         document.getElementById('loading-popup').innerHTML = `<div class="new-load" id="ch-mail"><div id="loadscreen"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>`;
      }

     }

     //class that displays all popups in div on all pages
     class APPLICATION_PAGE_CONTENT{

      //display popups in index page
       showPopUpLocationOnIndex() {
          document.getElementById('pagecontent-index').innerHTML = `<div class="set-displ" id="st-dis" style="padding: 10px;"></div><div class="overlay-pop-up" id="new-overlay"></div><div class="set-displ" id="previe-popup" style="padding: 10px;"></div><div class="set-displ" id="info-mail" style="padding: 10px;"></div><div class="set-displ" id="log-out-mail" style="padding: 10px;"></div><div class="set-displ" id="update-ml" style="padding: 10px;"></div><div class="set-displ" id="alert-popup" style="padding: 10px;"></div><div class="set-displ" id="loading-popup" style="padding: 10px;"></div>`;
       }

     }

//objects for classes for popups and class which displays all popups in divs on all pages
const popupclass = new APPLICATION_POPUP();
const contentclass = new APPLICATION_PAGE_CONTENT();

contentclass.showPopUpLocationOnIndex();//show div on all pages for popups
popupclass.showDeletePopUp();
popupclass.showInformationPopUp();
popupclass.showPreviewPopUp();
popupclass.showLogOutPopUp();
popupclass.showMailUpdaterDiv();
popupclass.showAlertUser();
popupclass.loadingAnimationPopUp();

     //show header options on evry html page
     function fncHeader(data) {
        var item = data.header;
       for(var i = 0; i < item.length; i++) {
        contactHeader.innerHTML += `<a class="${item[i].class}" onclick="openPageInHeader(${item[i].id})">${item[i].name}</a>`;
       }       
    }

    //open new page for options from header
    function openPage(id) {
      sessionStorage.setItem("pageId",id);
      var get = sessionStorage.getItem("pageId");

     switch(get) {
        case "1":
         window.location.href= "contact-us.html";;
              break;
         case "2":
            window.location.href= "log-in.html";  
            break;
         case "7":
               window.location.href= "inbox.html";;
         default:
                 return null;     
     }
    }

    //open page in header by using page id from session storage
    function openPageInHeader(pageId){
      sessionStorage.setItem("pageIdInHeader",pageId);
      var get = sessionStorage.getItem("pageIdInHeader");

      //check clicked button id and open right page for its id
     switch(get) {
        case "1":
         window.location.href= "inbox.html";;
              break;
         case "2":
            var user = firebase.auth().currentUser;
            if(user) {
               logoutPopUpRequest.style.display = 'flex';
               logoutPopUpRequest.classList.remove('reverse');
               document.getElementById('new-overlay').style.display = 'flex';
               document.getElementById('new-overlay').classList.remove('overlay-opacity');
            }
            else {
               window.location.href= "log-in.html"; 
            }             
         default:
                 return null;     
     }
    }

    //popup for logout location 
    var logoutPopUpRequest = document.getElementById('log-out-mail');

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

    // Initialize Firebase to saveprojects
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    var user = firebase.auth().currentUser;
   if(user){
    var x =    firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(function(url){return url});
    
  console.error(x.toString());}
  //create account
    function createAccount(){

      //account parameters required
        let email = document.getElementById('e-mail-input');
        let password = document.getElementById('password-input');

      //create account to firebase storage
       auth.createUserWithEmailAndPassword(email.value, password.value).then((userCredential) => {         
        window.location.href = "settings.html";

        //alert user
        alertUserAboutSuccess("Your account is created!");
       })
       .catch(function (error){
         //error variables 
         var errorCode = error.code;
         var errorMessage = error.message;

         alertUserAboutSuccess(errorMessage);    

         //error logs to administrator
         console.warn("CODE:" + errorCode + "MESSAGE:" + errorMessage);
       });
      
      }

   //log in
   function logIn(){		

      //account parameters that are required for logging in
		var emailIN = document.getElementById("email");
		var passwordIN = document.getElementById("password");
      
      document.getElementById('password').classList.remove('wrong-password');

      //log in to existing account on firebase using email and password
		firebase.auth().signInWithEmailAndPassword(emailIN.value, passwordIN.value).then(function() {iconEvent(4);})
		.catch(function (error){
       //error variables 
       var errorCode = error.code;
       var errorMessage = error.message;

      //error message
     alertUserAboutSuccess(errorMessage);
      document.getElementById('password').style.borderBottomColor = 'red';

      var styleCSS= document.createElement('style');
      styleCSS.innerText = 'input[type="password"]::placeholder {color: red;}';
      document.body.appendChild(styleCSS);
     

       //error logs to administrator
       console.warn("CODE:" + errorCode + "MESSAGE:" + errorMessage);
      });
	}
 
   //log out 
    function logOut() {    
		auth.signOut();

      //alert user about logging out
		alertUserAboutSuccess("Logged Out");

      //redirect user to login page 
      window.location.href = 'log-in.html';
    }

    //reset password using email verification
    function resetPassword() {
        var user = firebase.auth().currentUser;

        //user is online
        if(user) {

      //send gmail to user to reset password   
      firebase.auth().sendPasswordResetEmail(user.email).then(function() {

         //message sent successfully
         alertUserAboutSuccess("Message sent to email: " +  user.email );
      })
      .catch(function(error) {
         //error variables 
         var errorCode = error.code;
         var errorMessage = error.message;

         //alert user about error
         alertUserAboutSuccess(errorMessage);s

         //error logs to administrator
         console.warn("CODE:" + errorCode + "MESSAGE:" + errorMessage);         
      });

   }
     else {
        //if email field is empty alert user
        alertUserAboutSuccess("Enter your email adress firs!");
     }
    }

    //user cannot remember the password
    function resetUserPasswordLogging() {

      //forgotten user email
       var forgottenEmail = document.getElementById('email').value;

       //check does email field is empty
       if(forgottenEmail != null) {

         //send email to user to reset password
          firebase.auth().sendPasswordResetEmail(forgottenEmail).then(function(){

            //email send successfully
            alertUserAboutSuccess("Message sent to email:" + forgottenEmail);
          })
         .catch(function(error) {
         //error variables 
         var errorCode = error.code;
         var errorMessage = error.message;

          //alert user about error
          alertUserAboutSuccess(errorMessage);

         //error logs to administrator
         console.warn("CODE:" + errorCode + "MESSAGE:" + errorMessage);
      });

       }//if-end
       else {

          //if input field is empty
          alert("Enter your email!");
       }
    }

    //verify account
    function verifyAccount() {

      //parameters for account verification
       var user = firebase.auth().currentUser;

       //verify account using firebase
       user.sendEmailVerification().then(function(){

         //account verification sent
         alertUserAboutSuccess("Account verification sent!");
       })
       .catch(function(error) {
        //error variables 
        var errorCode = error.code;
        var errorMessage = error.message;

        //alert user about error
        alertUserAboutSuccess(errorMessage);

        //error logs to administrator
        console.warn("CODE:" + errorCode + "MESSAGE:" + errorMessage);
       })
    }

    //delete account
    function deleteAccount() {
       firebase.auth().currentUser.delete().then(function(){

         //deleted successfully
         alertUserAboutSuccess("Account successfuly deleted.");
       })
       .catch(function (error){
        //error variables 
        var errorCode = error.code;
        var errorMessage = error.message;

        //alert user about error
        alertUserAboutSuccess(errorMessage);

        //error logs to administrator
        console.warn("CODE:" + errorCode + "MESSAGE:" + errorMessage);
       });
    }

    //upadte account email
    function updateMail() {

      //mail upadate parameters
       var user = firebase.auth().currentUser;
       var newEmail = document.getElementById('new-mail-set');
       
       //update email
       user.updateEmail(newEmail.value).then(function () {

         //mail updated successfully
         alertUserAboutSuccess("Mail updated successfully!");
          setTimeout(1000,window.location.reload());
       })
       .catch(function(error){
         var errorCode = error.code;
         var errorMessage = error.message;

         //alert user about error
         alertUserAboutSuccess(errorMessage);
         
         //alert admionistartor about error
         console.warn("CODE:" + errorCode + "MESSAGE:" + errorMessage);
       });
    }

    //logged user uploads profile image
    function uploadImageUser(e){
       var user = firebase.auth().currentUser;   

       //if user is online
       if(user){

       // get file from user   
       var filess = e.target.files;

       //save new profileimage to firebase server storage
       for (const filea of filess)//in case of several files
        {
          firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg')
            .put(filea).on("state_changed",snapshot=> { 
               
               //show uploading progress to user statement

               //image is not uploaded more then 0% and progress bar would not work for user
               if((snapshot.bytesTransferred / snapshot.totalBytes) * 100 === "0"){
                  document.getElementById('load-animations').style.display = "none";                  
                 }
                 else{
                  //user is uploading profile image and data is showing on page
                  document.getElementById('load-animations').style.display = 'flex';
                  document.querySelector('.progressBar').value =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  document.getElementById('percentage').innerText = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + "%";   
                 }//else-end

            });//firebase-end

       }//if-end   

    }//for-end
    else {
      firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').put('./media/profileimg.png');

       //if user is not logged, deny user to post profile image
       alertUserAboutSuccess("You must log in to post profile image:");
    }//else-end
   }

    //logged user uploads files in storage
function uploadFileToFirebase(e){
   document.getElementById('postcontent').innerHTML = ``;
  
   var user = firebase.auth().currentUser;      
        
   //user is online
   if(user){

      //allow multiple files uploading
      for(let i=0;i<e.target.files.length;i++){
            let file = e.target.files[i];
            
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
     }
   })
}

for(let i=0;i<e.target.files.length;i++){
   let file = e.target.files[i];
   let HTML=``;
  
   //image url
     var imageURLdownload  = window.URL.createObjectURL(file);
   
   var fileType = file.type,fileSizeProperty = (file.size/1000000).toFixed(2),name = file.name;

   if(name.length > 25) {
      name = name.slice(0,-14);
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

var profleImageUrl;
   //user is logged to firebase in an existing account
   firebase.auth().onAuthStateChanged(function(user) {

      //user is online
      if (user) {

         //show messages
         firebase.database().ref("messages").on('child_added',function(snapshot){
            var html = '',htmluser='';
           var user = firebase.auth().currentUser;
   
            if(snapshot.val().sender === user.email.slice(0, -10)) {
                 html += `
                 <div class="my-message">
    <div class="message-and-image">      
        <p class="user-message">${snapshot.val().message}</p>
    </div>
</div>`;
                 
            
              }else{
               html += `
               
               
               <div class="message-box">
               <p class="username-in-chat">${snapshot.val().sender}</p>
               <div class="message-and-image">
                   <img src="${snapshot.val().profileimage}" alt="" class="user-profile-image-in-chat">
                   <p class="user-message">${snapshot.val().message}</p>
               </div>
           </div>`;
              }
            document.getElementById('chat-box').innerHTML += html;
            
            $('#chat-box').scrollTop(10000000000000000000000000000000000000);
        })

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
                    console.error(imgurl);
               
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
      var emailFom = document.getElementById('mail-input');
      emailFom.value = user.email;


      } else {   
         //if user is not logged in 
         document.getElementById('usernamename').innerHTML = `<p>username</p>`;
         document.getElementById('img').src = 'https://www.clipartmax.com/png/middle/256-2564545_nauman-javid-none-profile.png';
    }
});
AOS.init();

    //show users data/ from storage on page
    function showUsersStorageContectOnPage(context,row, images,name,didsplayname,profileimage,fileSizeProperty,fileType,timeCreated,newCurrnetTime,useriID,storageSveReference,arrayLength) {
      
     
      //get profile image of user
      images.getDownloadURL().then(function(URL) {               
               let HTML = ``;
            
            //display different content for different file type   
            if(fileType === "image/png" || fileType === "image/jpeg" || fileType === "image/jpeg") {
               HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div>
               
               <div class="show-user-saved">
               <img src="${URL}" alt="" width="100%" height="auto" style="pointer-events: none;">
               <div class="not-active" id="${fileType}${name}">
               
           </div>
           </div>
        


               <div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div>
               
               
               
               </article>`;      
            }else if (fileType === "video/mp4") {
               HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div>
               
               <div class="show-user-saved">
               <video src="${URL}" autoplay loop muted width="100%" height="auto"></video>
               <div class="not-active" id="${fileType}${name}">  
           </div>
           </div>
               
               <div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div>    <div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;               
            }else if (fileType === "application/octet-stream"){
               HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div>
               <div class="show-user-saved">
               <img src="./media/rar.jpg" alt ="" width="100%" height="auto" style="pointer-events: none;">
               <div class="not-active" id="${fileType}${name}">  
               </div>
               </div>
               <div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;            
            }else {
               HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div>
               <div class="show-user-saved">
               <img src="./media/none-pic.png" alt ="" width="100%" height="auto" style="pointer-events: none;">
               <div class="not-active" id="${fileType}${name}">  
               </div>
               </div>
               <div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}"><i class="far fa-bookmark" onclick="savePostToStorage('${context}','${URL}','${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i></div></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;    
            }
            
            //fetch saved posts from database server
            fetchSvedPosts(context,URL,name,fileSizeProperty,fileType,timeCreated,newCurrnetTime,didsplayname,storageSveReference,profileimage);
            
            //display all posts to client side
            document.getElementById('bodyID').innerHTML += HTML;

            if(document.getElementById('bodyID').children.length === arrayLength) {
               document.getElementById('loading-popup').style.display = 'none';
               document.getElementById('loadscreen').style.display = 'none';
               document.getElementById('new-overlay').style.display = 'none';
               document.getElementById('bodyID').style.display = 'grid';
            }else{
      document.getElementById('loading-popup').style.display = 'flex';
      document.getElementById('loadscreen').style.display = 'flex';
      document.getElementById('new-overlay').style.display = 'flex';
      document.getElementById('bodyID').style.display = 'none';
            }
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
   }else if(type === "audio/wav" || type === "audio/mp3") {
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
                       console.log(childSnapshot.val())

               //set new bookmark for saved posrs
               document.getElementById(childSnapshot.val().file_name).innerHTML = `<i class="fas fa-bookmark" 
               onclick="removeSvedPost('${cont}','${context}','${URL}','${filename}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}','${didsplayname}','${storageSveReference}','${profileimage}')"></i>`;
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
         }, 500);

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

     if(name.length > 25) {
      displayname = name.slice(0,29);
      }else{
         displayname =name;
      }

      if(type.length > 25) {
         postType = type.slice(0,29);
         }else{
            postType =type;
         }

     //delete popup content 
   document.getElementById('delete-txt').innerHTML = `
   <div class="flx-metadata"><span>Name:</span><span><b class="new-color-3">${displayname}</b></span></div><div class="flx-metadata"><span>Size:</span><span><b class="new-color-3">${size} MB</b></span></div><div class="flx-metadata"><span>Type:</span><span><b class="new-color-3">${postType}</b></span></div><div class="flx-metadata"><span>Posted:</span><span><b class="new-color-3">${date} at ${time}</b></span></div>`;
  
  //onclick function for post deleting
   document.getElementById('delete').addEventListener('click',() =>{
      
      //delete post from ordered storage location
      firebase.storage().ref().child("users/" +user.uid + "/data/" + name).delete().then(() =>{
         document.getElementById('st-dis').style.display = 'none';

       
            document.getElementById('new-overlay').style.display = 'none';
         

      //refresh page   
      pageReloader();
   })
   .catch((error)=>{

      //alert user about deleting
      alertUserAboutSuccess(error);
   })
})
 }

 //alert user
 function alertUserAboutSuccess(message) {
   document.getElementById('alert-popup').style.display = 'flex';
   document.getElementById('text-message-alert').innerText = message;
   document.getElementById('new-overlay').style.display = 'flex';

   document.getElementById('alert-popup').classList.remove('reverse');
   document.getElementById('new-overlay').classList.remove('reverse');
}

//close alert popup
function closeALert() {
 //hide elements
 setTimeout(() => {
   document.getElementById('alert-popup').style.display = 'none';
   document.getElementById('text-message-alert').innerText = "";
   document.getElementById('new-overlay').style.display = 'none';
 }, 500);

 document.getElementById('alert-popup').classList.add('reverse');
 document.getElementById('new-overlay').classList.add('overlay-opacity');
}


        //show info about post
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
        }, 500);
        
        document.getElementById('info-popup').classList.add('reverse');
        document.getElementById('new-overlay').classList.add('overlay-opacity');
        document.getElementById('info-mail').classList.add('reverse');
        document.getElementById('data-info').classList.add('reverse');

         //enable scrolling
         document.body.style.overflowY = 'visible';
        }

      //send email to mailtrap
      function sendMail() {

         //fetch user's ip address
         fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(IPV4=>     
         
         //mail function using smtp protocol with smtp.js and mailtrap
         Email.send({
            Host:"smtp.mailtrap.io",
            Username:"913890b8ed1747",
            Password:"7f91f262bcdb72",          
            To:"mmarko.perovici3@gmail.com",
            From:document.getElementById('mail-input').value,
            Subject:document.getElementById("subject-input").value,
            Body:"From:  " + document.getElementById('mail-input').value + "<br><br>" + "Message:  " + document.getElementById("message-input").value + "<br><br>" + "IP: " + IPV4.ip +" ",
     })
     .then(mesage => {

      //alert user if mail is not sent and reload page
      if(mesage === "Ok" || mesage === "OK" || mesage === "ok") {
      alertUserAboutSuccess("Mail sent!");
    }else{
      alertUserAboutSuccess(mesage);
    }
         window.location.reload();
      }
     )
   )
}

    //close log out pop up
    function closeLogOutPopUp() {
     
      //hide element
      setTimeout(() => {
         logoutPopUpRequest.style.display = 'none';
         document.getElementById('new-overlay').style.display = 'none';
      }, 500);

      logoutPopUpRequest.classList.add('reverse');
      document.getElementById('new-overlay').classList.add('overlay-opacity');
    }
        
    //show mail changer
    function showMailUpdater() {
       document.querySelector('.set-displ').style.display = 'flex';
       document.getElementById('update-ml').style.display = 'flex';
       document.querySelector('.overlay-pop-up').style.display = 'flex';

       //remove class
       document.querySelector('.set-displ').classList.remove('reverse');
       document.getElementById('update-ml').classList.remove('reverse');
       document.querySelector('.overlay-pop-up').classList.remove('overlay-opacity');
    }

    //hide mail changer
    function cancleUpdateMail() {
      //hide elements
      setTimeout(() => {
      document.querySelector('.set-displ').style.display = 'none';
      document.querySelector('.overlay-pop-up').style.display = 'none';
      document.getElementById('update-ml').style.display = 'none';
      }, 500);
      
      document.querySelector('.set-displ').classList.add('reverse');
      document.querySelector('.overlay-pop-up').classList.add('overlay-opacity');
      document.getElementById('update-ml').classList.add('reverse');

      //enable scrolling
      document.body.style.overflowY = 'visible';
    }
    var iconArray = [];
   //sub-class 
   

      //get icons for footer from json file data.json
      async function getFooter() {
         try {
            let data = await fetch('data.json');
            let items = await data.json();
            let icons = items.footer;

            //map icons
            icons = icons.map(item => {
               let icon = item.icon, iconEvenet = item.event;
               return {icon, iconEvenet};
            });

            //
         iconArray.push(icons);

         //draw content for footer
         for(var i=0;i<icons.length;i++){
               document.querySelector('.footer').innerHTML += `<i class="${icons[i].icon}" onclick="iconEvent(${icons[i].iconEvenet})" id="${icons[i].iconEvenet}"></i>`;
         }

         //current page
        var fileName = location.pathname.split("/").slice(-1)
        if(fileName[0] ==="index.html"){
             document.getElementById("1").classList.add('current-page');
         }else if (fileName[0] === "search.html") {
            document.getElementById("2").classList.add('current-page');
         }else if (fileName[0] === "upload.html") {
            document.getElementById("3").classList.add('current-page');
         }else if (fileName[0] === "settings.html") {
            document.getElementById("4").classList.add('current-page');
         }else if (fileName[0] === "profile.html") {
            document.getElementById("5").classList.add('current-page');
         }

            return icons;
            
         }
         catch(error)
         {

            //in case of en error
           console.log(error);

           //alert user about error
           alertUserAboutSuccess(mesage);(error);

           return null;
         }
      }
   
      //display footer
      getFooter();
   
   //open pages from footer
   function iconEvent(ID) {

      //get button/page id and set it to session storage
      sessionStorage.setItem("optionPageID",ID);
      document.getElementById(ID).classList.add('current-page');
      //check the id of button and redirect user to certan page
      switch(sessionStorage.getItem("optionPageID")){
         case "1":
            window.location.href = "index.html";           
            break;
            case "2":
               window.location.href = "search.html";
               break;
               case "3":
                  var user = firebase.auth().currentUser;
               if (user) {
                  window.location.href = "upload.html";
               }
                else {

                  //alert users
                  alertUserAboutSuccess(mesage);("You must log in!");
                }
                  break;
                  case "4":
                     window.location.href = "settings.html";
                     break;
                     case "5":
                        window.location.href = "profile.html";
                        break;
                        default:
                           return null;
      }
   }

   
   //dont have account? create one
   function createAccountPageID() {
      window.location.href = 'create-account.html';
   }

   //login-redirect
   function redirectLogIn(){
      openPage(2);
   }

   //page reloader
   function pageReloader(){
    window.location.reload();
   }

   //send message page
   function help(){
      openPage(1);
   }

   //send user to index
   function sendToIndex() {
      iconEvent(1);
      document.getElementById('postcontent').innerHTML = '';
   }

//    var emojis = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
//       0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
//       0x1F431, 0x1F42A, 0x1F439, 0x1F424];
// var ardArray = [];
// for(var i=0;i<emojis.length;i++){
//       ardArray.push({
//          code:emojis[i],
//          content: String.fromCodePoint(emojis[i]),
//          id: i,
//        });}
//      console.log(ardArray);


   // var ardArray = [{content:""}];
   





  /* async function getEmojies() {
      try {
         let data = await fetch('data.json');
         let items = await data.json();
         let icons = items.ardArray;

         //map icons
         icons = icons.map(item => {
            let content = item.content;
            ardArray.push({"content":item.content});
            return {content};
         });

         return icons;
         
      }
      catch(error)
      {

         //in case of en error
        console.log(error);

        //alert user about error
        alertUserAboutSuccess(mesage);(error);

        return null;
      }
   }*/


//console.log(ardArray);

fetch('data.json',{method:"GET"})
.then(response => response.json())
.then(data => window.onload = showEmojes(data))
.catch(error => console.error(error));




firebase.auth().onAuthStateChanged(function(user) {var user = firebase.auth().currentUser;
if(user) {
   firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(x =>{
      
      document.getElementById('sendMessage').addEventListener('click',(e)=>{
       
         var username = user.email, didsplayname = username.slice(0, -10);
         var message = document.getElementById('text-message-user').value;
   
        
 if(message != "" ){
 
  
        firebase.database().ref("messages").push().set({
            "sender":didsplayname,
            "message":message,
            "profileimage":x,
        
        }) 
    
      }
      document.getElementById('text-message-user').value = ''
    })})}})




    function showEmojes(data){
       var ardArray = data.emojes;
     for(var i=0;ardArray.length;i++){
   document.getElementById('emojis').innerHTML += `<p onclick="setIcon('${ardArray[i].content}')">${ardArray[i].content}</p>`;
}
    }

function setIcon(icon) {document.getElementById('text-message-user').value+=icon}



/*document.getElementById('sendImage').addEventListener('change',(e) =>{
   for(let i=0;i<e.target.files.length;i++){
      let file = e.target.files[i];
      
     
      //image url
        var url  = window.URL.createObjectURL(file);

firebase.storage().ref("messaging/" +file.name).put(file);*/

function showEmojies() {
   document.getElementById('emojis').style.display = 'flex';
  
} document.getElementById('chat-box').addEventListener('click',()=>{
      document.getElementById('emojis').style.display = 'none';
   })
   