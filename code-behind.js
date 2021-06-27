//header id for evry page--------------------------------------------
var contactHeader = document.querySelector('.contact-header');



//files and posts arrays
let files = {};
var posts = [];

     //get data from json file for options in header
     fetch('data.json',{method:"GET"})
     .then(response => response.json())
     .then(data => window.onload = fncHeader(data))
     .catch(error => console.error(error));

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
  if(fileName[0] ==="index.html" || fileName[0] ===""){           
     
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
     //alertUserAboutSuccess(error);

     return null;
   }
}

//display footer
getFooter();

   //get information about browser, device, cpu, versions, os
   var ua = new UAParser();
	var result = ua.getResult();
	//console.log(result);

     //class that defines all popups in the application
     class APPLICATION_POPUP{

      //show information popup
      showInformationPopUp() {
         document.getElementById('info-mail').innerHTML = `<div class="set-class set-pdng popup" id="info-popup"><button class="setting-button" style="padding:0px">File info</button><div class="setting-button" style="padding:0px" id="data-info"></div><div class="flex-button" style="width: 100%;margin-right: 0px;"> <button class="new-mail" onclick="closeDataInfo()">CLOSE</button></div></div>`;
      }

      //show delete popup
      showDeletePopUp() {
         document.getElementById('st-dis').innerHTML = ` 
         <div class="set-class set-pdng  popup" id="ch-mail" style="padding:15px">
         <div class="setting-button" style="padding:0px">Do you want to delete</div>
         <div class="set-display-flex" id="delete-txt"></div><div class="flex-button"> 
         <button class="new-mail" onclick="cancleUpdateMail()" >CANCLE</button>
         <button class="new-mail" id="delete" style="margin-left:8px">DELETE</button></div></div>`;
      }

      //show log out popup
      showLogOutPopUp() {
         document.getElementById('log-out-mail').innerHTML = `<div class="set-class set-pdng popup" id="log-out-mailp" style="padding:15px"> <div class="setting-button" style="width: 100%;justify-content: center;text-align: center;">Do you want to log out?</div><div class="flex-button" style="width: 100%;margin-right: 0px;justify-content: center;"><button  onclick="logOut()"  class="new-mail" id="logoutbtn">LOG OUT</button> <button class="new-mail" style="margin-left:20px" onclick="closeLogOutPopUp()">CANCLE</button></div></div>`;
      }

      //show preview popup
      showPreviewPopUp() {
         document.getElementById('previe-popup').innerHTML = `<div class="set-class popup preview-pop" id="ch-mail"><button class="setting-button" style="padding:0px" id="text-message"></button><div id="preview-div"></div><div class="set-display-flex" id="desc"></div><div class="flex-button"> <button class="new-mail" onclick="closeImagePreview()">CLOSE</button></div></div>`;
      }

      //show update mail
      showMailUpdaterDiv() {
         document.getElementById('update-ml').innerHTML = `<div class=" set-class popup set-pdng " style="padding:15px" id="ch-mail"><button class="setting-button top-mrg">Update email</button><input type="text" name="newmail" id="new-mail-set"  placeholder="New email" autocomplete="off" autofocus="off" class="input-box-new"><div class="flex-button"><button class="new-mail" onclick="cancleUpdateMail()" id="mail-update-btn">CANCLE</button><button class="new-mail" onclick="updateMail()">UPDATE</button></div>`;
      }

      //alert user about success
      showAlertUser() {
         document.getElementById('alert-popup').innerHTML = `<div class="set-class popup set-pdng" id="ch-mail" style="padding:15px"><button class="setting-button" style="padding:0px" id="text-message-alert"></button><div class="set-display-flex" id="desc-alert"></div><div class="flex-button"> <button class="new-mail" onclick="closeALert()">CLOSE</button></div></div>`;
      }

      //loading animation popup
      loadingAnimationPopUp() {
         document.getElementById('loading-popup').innerHTML = `<div class="new-load" id="ch-mail" style="padding:15px"><div id="loadscreen"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>`;
      }

      //show delete accoubt popup
      showDeletePopUpAccount() {
         document.getElementById('acc-delete-popup').innerHTML = ` <div class="set-class popup" id="ch-mail">
         <button class="setting-button" style="padding:0px">Do you want to delete your account?</button>
        <div class="flex-button"> <button class="new-mail" onclick="cancleAccountDeleting()" >CANCLE</button>
        <button class="new-mail" onclick="deleteAccount()" style="background-color:red">DELETE</button></div></div>`;
      }

     }

     //class that displays all popups in div on all pages
     class APPLICATION_PAGE_CONTENT{

      //display popups in index page
       showPopUpLocationOnIndex() {
          document.getElementById('pagecontent-index').innerHTML = `<div class="set-displ" id="st-dis" style="padding: 10px;"></div><div class="overlay-pop-up" id="new-overlay"></div><div class="set-displ" id="previe-popup" style="padding: 10px;"></div><div class="set-displ" id="info-mail" style="padding: 10px;"></div><div class="set-displ" id="log-out-mail" style="padding: 10px;"></div><div class="set-displ" id="update-ml" style="padding: 10px;"></div><div class="set-displ" id="alert-popup" style="padding: 10px;"></div><div class="set-displ" id="loading-popup" style="padding: 10px;"></div><div class="set-displ" id="acc-delete-popup" style="padding: 10px;"></div>`;
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
popupclass.showDeletePopUpAccount();

     //show header options on evry html page
     function fncHeader(data) {
        var item = data.header;
       for(var i = 0; i < item.length; i++) {
         var fileNameX = location.pathname.split("/").slice(-1);
         if (fileNameX[0] !== 'inbox.html') {
        contactHeader.innerHTML += `<a class="${item[i].class}" onclick="openPageInHeader(${item[i].id})">${item[i].name}</a>`;
         }
      }       
    }

    function showDeletePopUpAccountFromClass() {
       document.getElementById('acc-delete-popup').style.display = 'flex';
       document.getElementById('new-overlay').style.display = 'flex';
       document.getElementById('acc-delete-popup').classList.remove('reverse');
       document.getElementById('new-overlay').classList.remove('overlay-opacity');
    }

    function cancleAccountDeleting() {
      setTimeout(() => {
         document.getElementById('acc-delete-popup').style.display = 'none';
         document.getElementById('new-overlay').style.display = 'none';
         }, 200);
         
         //reverse animation
         document.getElementById('acc-delete-popup').classList.add('reverse');
         document.getElementById('new-overlay').classList.add('overlay-opacity');

   
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
    var x = firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(function(url){return url});
    
  console.error(x.toString());}
  //create account
    function createAccount(){

      //account parameters required
        let email = document.getElementById('e-mail-input');
        let password = document.getElementById('password-input');
var idl;
      //create account to firebase storage
       auth.createUserWithEmailAndPassword(email.value, password.value).then((userCredential) => {         
        window.location.href = "settings.html";
     idl = userCredential.uid;

     firebase.storage().ref("users/" + userCredential.user.uid +'/profile_image' + '/profile_image.jpg')
    .put("./media/none-pic.png")
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
		firebase.auth().signInWithEmailAndPassword(emailIN.value, passwordIN.value).then(function() {iconEvent(1);})
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

      var user = firebase.auth().currentUser;
      if(user){
      var fullname = user.email.slice(0, -10);

      var context;
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

       firebase.auth().currentUser.delete().then(function(){
        
         firebase.database().ref("accounts").child(context).remove().catch(function(ex){
            alertUserAboutSuccess(ex);
          })
          
          firebase.database().ref("users").child(context).remove().catch(function(ex){
            alertUserAboutSuccess(ex);
          })

          firebase.storage().ref("users/" + user.uid).delete().catch(function(ex){
            alertUserAboutSuccess(ex);
          })



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

  
    var fileName = location.pathname.split("/").slice(-1)
    if(fileName[0] ==="settings.html" ) {
      document.getElementById('update-profileimg').style.display = 'none';
    }
  //document.getElementById('upload-button').style.display = 'none'
    function uploadImageUser(e){
       var user = firebase.auth().currentUser;   

       if(user){
       var filess = e.target.files;
     
       for (const filea of filess)
        {
           
         filea.size = filea.size/100;
        const reader = new FileReader();
        reader.readAsDataURL(filea);

        reader.onload = (event) => {
           const imgEl = document.createElement('img');
           imgEl.src = event.target.result;

           imgEl.onload = (e) => {
              const canvas = document.createElement('canvas');
              const MAX_WIDTH  = 80;
              
              const SCALE_SIZE = MAX_WIDTH / e.target.width;
              canvas.width = MAX_WIDTH;
              canvas.height = 80 ;//e.target.height * SCALE_SIZE;

              const ctgx = canvas.getContext('2d');
               
            ctgx.drawImage(e.target,0,0,canvas.width,canvas.height);

            const srcEncoded = ctgx.canvas.toDataURL(e.target,'image/jpg');
            sessionStorage.setItem("pr",srcEncoded);

            fetch(srcEncoded)
  .then(res => res.blob())
  .then(blob => {
    const filesss = new File([blob], "File name",{ type: "image/png" })
    
firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg')
    .put(filesss).on("state_changed",snapshot=> { 
       
       //show uploading progress to user statement

       //image is not uploaded more then 0% and progress bar would not work for user
       if((snapshot.bytesTransferred / snapshot.totalBytes) * 100 === "0" ){
          document.getElementById('load-animations').style.display = "none"; 
          document.getElementById('update-profileimg').style.display = 'none';
               
         }
         else{
          //user is uploading profile image and data is showing on page
          document.getElementById('load-animations').style.display = 'flex';
          document.getElementById('update-profileimg').style.display = 'flex';
          
          document.querySelector('.progressBar').value =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById('percentage').innerText = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + "%";   
         }//else-end

    });//firebase-end

  })
         }
         
      }
     
       }//for-end 
    }//if-end
    else {
      firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').put('./media/profileimg.png');

       //if user is not logged, deny user to post profile image
       alertUserAboutSuccess("You must log in to post profile image:");
    }//else-end
   }

   function setUserData(url,fullname,uid) {

      var context;
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

      //save data of all users in app
      firebase.database().ref("accounts/" + context).set(
         {            
              username:fullname,
              id:uid,
              profileimage:url            
         }
      );
     
      
   }
   var fileName = location.pathname.split("/").slice(-1)
  if(fileName[0] ==="upload.html" ) {
   document.getElementById('upload-button').style.display = 'none'; 
  }
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

         //console.log(snapshot.totalBytes);
         
         //show percentage to client
         document.getElementById('total-transfered-percetage').innerText =((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + "%";
      
      } if(((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) == 100){
         document.getElementById('upload-button').classList.add('post-now');
         document.getElementById('uploading-proces').style.display = 'none';
         document.getElementById('upload-button').style.display = 'flex'     
       }
       else{
          
         document.getElementById('uploading-proces').style.display = 'flex';
         document.getElementById('upload-button').style.display = 'none'; 
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

   //console.log(snapshot.totalBytes);
   
   //show percentage to client
   document.getElementById('total-transfered-percetage').innerText =((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + "%";
   
   if(((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) == 100){
      document.getElementById('upload-button').classList.add('post-now');
      document.getElementById('uploading-proces').style.display = 'none';
     }else{
      document.getElementById('upload-button').classList.remove('post-now');
      document.getElementById('uploading-proces').style.display = 'flex';
      document.getElementById('upload-button').style.display = 'none'; 
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
   firebase.database().ref("public_posts/").on('child_added',item =>{
      

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
   
}

listAllPublicPosts();
})
       
   window.onload = function() {
      document.getElementById('public-posts').classList.add('selected');
      document.getElementById('private-posts').classList.remove('selected');
      document.getElementById('bodyID').style.display = 'none';
      document.getElementById('esae').style.display = 'grid';
   }
   
   function publicPosts() {
      var fileNameX = location.pathname.split("/").slice(-1);

      if (  
          fileNameX[0] !== 'upload.html' ||
          fileNameX[0] !== 'inbox.html' ||
          fileNameX[0] !== 'create-account.html' ||
          fileNameX[0] !== 'contact-us.html' ||
          fileNameX[0] !== 'profile.html' ||
          fileNameX[0] !== 'settings.html'
          
          
          
          ) {
         document.getElementById('public-posts').classList.add('selected');
         document.getElementById('private-posts').classList.remove('selected');
         document.getElementById('bodyID').style.display = 'none';
         document.getElementById('esae').style.display = 'grid';
      }

   }
   
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
             
               var fileNameX = location.pathname.split("/").slice(-1);
               
               if (
                  item.val().messageColor !== null || item.val().freindColor !== null  ||
                  item.val().backgroundColor !== null || item.val().freindColorText !== null ||
                  item.val().messageColortext !== null || item.val().usernameInChat !== null
                  
                  ) 
                  {
                     if(item.val().user == context && fileNameX[0] === 'inbox.html') {
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
            var fileNameX = location.pathname.split("/").slice(-1);

             if ( fileNameX[0] === 'inbox.html' && snap.val().chatWallpaper !== null) {
               document.getElementById('chat-box').style.backgroundImage = `url('${snap.val().chatWallpaper}')`;
               document.getElementById('chat-box').style.backgroundSize = 'cover';
               document.getElementById('chat-box').style.backgroundPosition = 'center';
             }         
         })
      }
      
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
            var fileNameX = location.pathname.split("/").slice(-1);
            if (fileNameX[0] === 'inbox.html') {
               document.getElementById('chat-box').innerHTML += html;
                $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);    
            }
});
         firebase.database().ref("accounts/")
         .once('value',snap => {
            snap.forEach(function(snapshot) {

               var fileNameX = location.pathname.split("/").slice(-1);
     
               if(  fileNameX[0] !== 'upload.html' ||
               fileNameX[0] !== 'inbox.html' ||
               fileNameX[0] !== 'create-account.html' ||
               fileNameX[0] !== 'contact-us.html' ||
               fileNameX[0] !== 'profile.html' ||
               fileNameX[0] !== 'settings.html') {
                  document.getElementById('story-wrapper').innerHTML +=`<div class="swiper-slide"><div class="border-frame"><div class="white-frame"><div class="story-image" style="background-image: url(${snapshot.val().profileimage});"></div></div></div><p class="story-username">${snapshot.val().username}</p></div>`;                     
               }

            })

               var swiper = new Swiper('.swiper-container', {
                  slidesPerView: 4,
                  spaceBetween:0,
                  loop:false,
                  freeMode: true,
                });
              });
     
         var username = user.email, didsplayname = username.slice(0, -10);                                           
         var storage = firebase.storage(),storageRef = storage.ref();

         storageRef.child("users/" + user.uid +'/data/').listAll().then(function(result){
         
            var arrayLength = result.items.length;
            result.items.forEach(function(imageRef){
                 
                 imageRef.getMetadata().then(s=>{

                    var fileSizeProperty = (s.size/1000000).toFixed(2);     
                    var fileType = s.contentType, timeCreated = (s.timeCreated).slice(0,-14),
                    time = (s.timeCreated).substring(11),newCurrnetTime = time.slice(0,-8),
                    useriID = user.uid;   

      
          firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(imgurl =>{
                      var iiName = imageRef.name.toString();    
                      profleImageUrl = imgurl;
                  
               
  var fileNameStorage =  imageRef.name.replace(/\s/g, '');     

     var xml = new XMLHttpRequest();
     xml.open("GET","https://api.ipify.org");
     xml.send();
     xml.addEventListener('loadend',getIp);      

   function getIp(e) {
       userIP(xml.responseText)
   }


   function userIP(ipv4) {//console.log(ipv4)
   }
    
                 //reference to database server
                 var storageSveReference = user.uid+fileNameStorage,i=0;

                 var fileXNAME = iiName,NAMECONTEXT;
                 if(fileXNAME.includes(".")) {
                  NAMECONTEXT = fileXNAME.replace(/\./g,' ');
                 }else  if(fileXNAME.includes("#")) {
                  NAMECONTEXT = fileXNAME.replace(/\#/g,' ');
                 }else if(fileXNAME.includes("[")) {
                  NAMECONTEXT = fileXNAME.replace(/\[/g,' ');
                 } else if(fileXNAME.includes("$")) {
                  NAMECONTEXT = fileXNAME.replace(/\$/g,' ');
                 }else {
                  NAMECONTEXT = fileXNAME;
                 }

                 imageRef.getDownloadURL().then(function(URL) { 

              
                  firebase.database().ref("private_posts/" + context + "/" +NAMECONTEXT).set({
                     context:context,
                     i:i,
                     imageRef:URL,
                     iiName:iiName,
                     didsplayname:didsplayname,
                     imgurl:imgurl,
                     fileSizeProperty:fileSizeProperty,
                     fileType:fileType,
                     timeCreated:timeCreated,
                     newCurrnetTime:newCurrnetTime,
                     useriID:useriID,
                     storageSveReference:storageSveReference,
                     arrayLength:arrayLength
   
   
   
                  
               })
            })
           
                   
         
                 //send following data for post to UI function to client side
                 showUsersStorageContectOnPage(context,i, 
                   imageRef,iiName,didsplayname,imgurl,fileSizeProperty,
                 fileType,timeCreated,newCurrnetTime,useriID,storageSveReference,
                  arrayLength);                                   
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
   
   /*firebase.database().ref("private_posts/" +context ).once('value',sa=>{
      sa.forEach(s => {
         console.log(s.val())
            showUsersStorageContectOnPage(s.val().context,s.val().i, 
                   s.val().imageRef,s.val().iiName,s.val().didsplayname,s.val().imgurl,s.val().fileSizeProperty,
                   s.val().fileType,s.val().timeCreated,s.val().newCurrnetTime,s.val().useriID,s.val().storageSveReference,
                   s.val().arrayLength);})
      
      })*/

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
         if(fileType === "image/png" || fileType === "image/jpeg" || fileType === "image/jpg") {
            HTML=`<article class="storage-article" id="${fileSizeProperty}" data-aos="zoom-in-up">
            <div class="artcile-header">
            <div class="user-header-info">
            <div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div>
            <b class="user-username">${didsplayname}</b></div><i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i>
            </div><div class="show-user-saved"><img src="${URL}" alt="" width="100%" height="auto" style="pointer-events: none;"><div class="not-active" id="${fileType}${name}"></div></div>
            <div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a>
<i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div id="${name}" style="display:flex;z-index:999999">
<i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div></div>
<div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;      
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
            
            var fileNameX = location.pathname.split("/").slice(-1);
            if(  fileNameX[0] !== 'upload.html' ||
            fileNameX[0] !== 'inbox.html' ||
            fileNameX[0] !== 'create-account.html' ||
            fileNameX[0] !== 'contact-us.html' ||
            fileNameX[0] !== 'profile.html' ||
            fileNameX[0] !== 'settings.html') {
            document.getElementById('esae').innerHTML += HTML;
            }
              
      }

    //show users data/ from storage on page
    function showUsersStorageContectOnPage(context,row, images,name,didsplayname,profileimage,fileSizeProperty,fileType,timeCreated,newCurrnetTime,useriID,storageSveReference,arrayLength) {
        
      //if using database line unde rthis comment below
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
            var fileNameX = location.pathname.split("/").slice(-1);
            if(

               fileNameX[0] !== 'upload.html' ||
               fileNameX[0] !== 'inbox.html' ||
               fileNameX[0] !== 'create-account.html' ||
               fileNameX[0] !== 'contact-us.html' ||
               fileNameX[0] !== 'profile.html' ||
               fileNameX[0] !== 'settings.html'
            ) {
               document.getElementById('bodyID').innerHTML += HTML;
            }

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
   

   //LOADING ANIMATION-------------------------------------------------------------------------
  /* function loadingAnimationPopUp() {
      document.getElementById('loading-popup').style.display = 'flex';
      document.getElementById('loadscreen').style.display = 'flex';
      document.getElementById('new-overlay').style.display = 'flex';
   }*/

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
         },400);

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

      var userNAME = user.email.slice(0,-10);
      var contextName;
      if(userNAME.includes(".")) {
         contextName = userNAME.replace(/\./g,' ');
      }else  if(userNAME.includes("#")) {
         contextName = userNAME.replace(/\#/g,' ');
      }else if(userNAME.includes("[")) {
         contextName = userNAME.replace(/\[/g,' ');
      } else if(userNAME.includes("$")) {
         contextName = userNAME.replace(/\$/g,' ');
      }else {
         contextName = userNAME;
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
   firebase.database().ref("private_posts").child(correctUsername +"/" + context).remove();
      firebase.storage().ref().child("users/" +user.uid + "/data/" + name).delete().then(() =>{
         document.getElementById('st-dis').style.display = 'none';    
            document.getElementById('new-overlay').style.display = 'none'; 
           
            name = "";
            size = "";
            type = "";
            date = "";
            time = "";

  pageReloader();
   })
   .catch((error)=>{
      alertUserAboutSuccess(error);
   })

})
 }

 function alertUserAboutSuccess(message) {
   document.getElementById('alert-popup').style.display = 'flex';
   document.getElementById('text-message-alert').innerText = message;
   document.getElementById('new-overlay').style.display = 'flex';
   document.getElementById('alert-popup').classList.remove('reverse');
   document.getElementById('new-overlay').classList.remove('reverse');
}

function closeALert() {

 setTimeout(() => {
   document.getElementById('alert-popup').style.display = 'none';
   document.getElementById('text-message-alert').innerText = "";
   document.getElementById('new-overlay').style.display = 'none';
 }, 200);

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
        }, 200);
        
        //add hidning classes animation
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
      }, 200);

      //hide layout and overlay
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
      }, 200);
      
      //reverse animation
      document.querySelector('.set-displ').classList.add('reverse');
      document.querySelector('.overlay-pop-up').classList.add('overlay-opacity');
      document.getElementById('update-ml').classList.add('reverse');

      //enable scrolling
      document.body.style.overflowY = 'visible';
    }
    var iconArray = [];
   //sub-class 

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


//send messages and emojies
firebase.auth().onAuthStateChanged(function(user) {var user = firebase.auth().currentUser;

//box with video and image button   
var iconBox = document.getElementById('icons-for-messag');

firebase.database().ref("accounts/").on('value',(snapshot) => {
   snapshot.forEach((snap) => {
       if (snap.val().username === user.email.slice(0,-10)) {
           localStorage.setItem("profileimage",snap.val().profileimage);
       }
   })
}) 

   firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(x =>{

    //when user clikcs on text box hide icons for video and image sendinf and show button for message sending  
     var fileNameX = location.pathname.split("/").slice(-1);
            if(fileNameX[0] === 'inbox.html') {
               //fetch emojies from json file and add them to emoji box
fetch('data.json',{method:"GET"})
.then(response => response.json())
.then(data => showEmojes(data));
    document.getElementById('text-message-user').addEventListener('click',() =>{
         iconBox.style.display = 'none';   
         document.getElementById('sendMessage').style.display = 'flex';   

   

      });

      //when user clicks on chat show icons for image and video sending and hide send button
    
      document.getElementById('chat-box').addEventListener('click',() =>{
         iconBox.style.display = 'flex';
         document.getElementById('sendMessage').style.display = 'none'; 
      })
   

      //send text message to chat app part in save projects
      document.getElementById('sendMessage').onclick =() => {
       
       
         var message = document.getElementById('text-message-user').value;//message value
         var username = user.email, didsplayname = username.slice(0, -10);

         //show emoji icon
         iconBox.style.display = 'flex';

         
     //if message box is different from empty string     
     if( message != ""){
   
      //send message to database refernece
      
        firebase.database().ref("messages").push().set({
            "sender":didsplayname,
            "message":message,
            "profileimage":x,
            "image":"/" ,
            "video":"/"
        }) 

        sessionStorage.setItem("message",message);
        sessionStorage.setItem("user",didsplayname);
      }  

      
      //clear text box and hide button for sending
      document.getElementById('text-message-user').value = '';
      document.getElementById('sendMessage').style.display = 'none'; 

  
  
    }
   }
    var username = user.email, didsplayname = username.slice(0, -10);
 
 
   
   var username = user.email, didsplayname = username.slice(0, -10);
   var fileNameX = location.pathname.split("/").slice(-1)

   if (fileNameX[0] === 'inbox.html') {
   document.getElementById('sendImage').addEventListener('change',(event) =>{
      var imageStorageReference;
        
      //in case of several files 
      for(var i=0;i<event.target.files.length;i++){
             let filea = event.target.files[i];
               imageStorageReference = filea.name;



               const reader = new FileReader();
               reader.readAsDataURL(filea);
       
               reader.onload = (event) => {
                  const imgEl = document.createElement('img');
                  imgEl.src = event.target.result;
       
                  imgEl.onload = (e) => {
                     const canvas = document.createElement('canvas');
                     const MAX_WIDTH  = 700;
                     
                     const SCALE_SIZE = MAX_WIDTH / e.target.width;
                     canvas.width = MAX_WIDTH;
                     canvas.height = e.target.height * SCALE_SIZE;
       
                     const ctgx = canvas.getContext('2d');
                      
                   ctgx.drawImage(e.target,0,0,canvas.width,canvas.height);
       
                   const srcEncoded = ctgx.canvas.toDataURL(e.target,'image/jpg');
                  // sessionStorage.setItem("pr",srcEncoded);
       
                   fetch(srcEncoded)
         .then(res => res.blob())
         .then(blob => {
           const filesss = new File([blob],imageStorageReference ,{ type: "image/png" })



               //upload image to firebase storage reference
                 firebase.storage().ref("messages/"+ imageStorageReference).put(filesss)
                 .then(snap => {
                  snap.ref.getDownloadURL().then(function(url){
                  firebase.database().ref("messages").push().set({
                   "sender":didsplayname,
                    "message":"message",
                    "profileimage":x,
                    "image":url,
                   "video":"/",
                   "storage_reference":imageStorageReference
                  }) 
                 })  
               })
                /* setTimeout(() => {
                  firebase.storage().ref("messages/"+imageStorageReference).getDownloadURL().then(function(url){
                   firebase.database().ref("messages").push().set({
                    "sender":didsplayname,
                     "message":"message",
                     "profileimage":x,
                     "image":url,
                    "video":"/",
                    "storage_reference":imageStorageReference
                   }) 
                  })
                 }, 7000);  */
         })  }  }          
            }

   //wait for image to be uploaded to storage and download link from storage     
   
   });
}

 
if (fileNameX[0] === 'inbox.html') {
  document.getElementById('sendVideo').addEventListener('change',(event) =>{
      var storageReferenceForVideo;

   //upload video to firebase storage   
   for(var i=0;i<event.target.files.length;i++){
         let file = event.target.files[i];
            storageReferenceForVideo = file.name;

            //upload video to firebase storage reference
              firebase.storage().ref("videos/"+ file.name).put(file)
              .then(snap => {
               snap.ref.getDownloadURL().then(function(url){
                
                     firebase.database().ref("messages").push().set({
                      "sender":didsplayname,
                      "message":"message",
                      "profileimage":x,
                      "image":"/",
                      "video":url,
                      "storage_reference":storageReferenceForVideo
                      }) 
                     })

               })
            
            
                          
   }

   //wait for video to be uploaded and download link from storage
   /*setTimeout(() => {
    firebase.storage().ref("videos/"+storageReferenceForVideo).getDownloadURL().then(function(videoURL){
     firebase.database().ref("messages").push().set({
      "sender":didsplayname,
      "message":"message",
      "profileimage":x,
      "image":"/",
      "video":videoURL,
      "storage_reference":storageReferenceForVideo
      }) 
     })
    }, 7000);  */ 
   });
}
  })
})



//show block with all emojies
var fileNameX = location.pathname.split("/").slice(-1)
if(fileNameX[0] === 'inbox.html') {
//show all emojies in block for sending
function showEmojes(data){
   var ardArray = data.emojes;
for(var i=0;ardArray.length;i++){
   document.getElementById('emojis').innerHTML += `<p onclick="setIcon('${ardArray[i].content}')">${ardArray[i].content}</p>`;
}
}

//send emoji in text message
function setIcon(icon) {
document.getElementById('text-message-user').value+=icon
}
   function showEmojies() {
      document.getElementById('emojis').style.display = 'grid';
   } 

  document.getElementById('chat-box').addEventListener('click',()=>{
   document.getElementById('emojis').style.display = 'none';
})
}

//show image sent in chat 
function openImageFromChat(imageUrl) {
   document.getElementById('open-content').style.display = 'flex';
   document.getElementById('open-content').classList.remove('back');
   document.getElementById('open-content').innerHTML = `<i class="fas fa-times close-x" onclick="closeImageInChatBox()"></i><img src="${imageUrl} alt="" class="viewd-image">`;
}

//close chat video/image preview
function closeImageInChatBox() {
   setTimeout(() => {
   document.getElementById('open-content').style.display = 'none';
   /*document.getElementById('open-content').innerHTML = ``;*/
   }, 200);
   
   document.getElementById('open-content').classList.add('back');
}

//show video sent in chat
function openVideoFromChat(videoUrl) {
   document.getElementById('open-content').style.display = 'flex';
   document.getElementById('open-content').classList.remove('back');
   document.getElementById('open-content').innerHTML = `<i class="fas fa-times close-x" onclick="closeImageInChatBox()"></i><video src="${videoUrl}" class="viewd-image"  loop controls muted autoplay></video>`; 
}

//delete message from chat 
function deleteMessage(messageIdKey,storageReference) {
   document.getElementById('message-overlay').style.display = 'flex';
   document.getElementById('delete-message-popup').classList.remove('reverse');
   document.getElementById('delete-message-popup').style.display = 'flex';
   document.getElementById('message-overlay').classList.remove('reverse');
   document.getElementById('delete-message-popup').innerHTML = `<button class="button-messages">Copy</button><button class="button-messages red-btn" onclick="deleteUserMessage('${messageIdKey}','${storageReference}')">Delete</button><button class="new-mail" onclick="closeDeleteMessage()">CLOSE</button>`;
}

function deleteUserMessage(messageIdKey,storageReference) {
    firebase.database().ref("messages").child(messageIdKey).remove();
    
       document.getElementById(messageIdKey).style.display = 'none';
  
    firebase.storage().ref("messages").child(storageReference).delete(); 
    firebase.storage().ref("videos").child(storageReference).delete(); 
    //console.warn(storageReference);
    closeDeleteMessage();
   }


//close message delete popup
function closeDeleteMessage() {
  setTimeout(() => {
   document.getElementById('delete-message-popup').style.display='none';
   document.getElementById('message-overlay').style.display = 'none';
  }, 200);
  document.getElementById('delete-message-popup').classList.add('reverse');
  document.getElementById('message-overlay').classList.add('reverse');
}
//get icons for footer from json file data.json

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
        // window.location.href = "search.html";
        alertUserAboutSuccess("Not available right now!");
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

window.addEventListener('load',() => {
   var fileNameX = location.pathname.split("/").slice(-1);
            if(fileNameX[0] === 'inbox.html') {
   document.getElementById('customisator').style.height =window.innerHeight + 'px';
   document.getElementById('customisator').classList.add('hide-custom');
   document.getElementById('customisator').classList.remove('hide-custom-2');
   document.getElementById('customisator').classList.remove('custom-added');
            }
})

function customize() {
   document.getElementById('customisator').classList.add('custom-added');
   document.getElementById('customisator').classList.remove('hide-custom');
   document.getElementById('customisator').classList.remove('hide-custom-2');
}

function closeCustomizator() {
   document.getElementById('customisator').classList.remove('custom-added');
   document.getElementById('customisator').classList.add('hide-custom-2');
   document.getElementById('customisator').classList.remove('hide-custom');
}

var root = document.documentElement;

function customizeChat() {
   root.style.setProperty("--msg-color", document.getElementById('color-message').value);
   root.style.setProperty("--user-color", document.getElementById('color-msg-friends').value);
   root.style.setProperty("--chat-color", document.getElementById('color-background').value);
   root.style.setProperty("--friend-color-txt", document.getElementById('color-msg-friends-text').value);

   root.style.setProperty("--msg-color-txt", document.getElementById('color-message-text').value);
   root.style.setProperty("--username-in-chat", document.getElementById('color-background-text').value);

   var messageColor = document.getElementById('color-message').value;
   var messageColortext = document.getElementById('color-message-text').value;
   var freindColor = document.getElementById('color-msg-friends').value;
   var freindColorText = document.getElementById('color-msg-friends-text').value;
   var backgroundColor = document.getElementById('color-background').value;
   var usernameInChat = document.getElementById('color-background-text').value;


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
   firebase.database().ref("custom-colors/"+context).remove();
   firebase.database().ref("custom-colors/"+context).set({
      messageColor:messageColor,
      messageColortext:messageColortext,
      freindColor:freindColor,
      freindColorText:freindColorText,
      backgroundColor:backgroundColor,
      usernameInChat:usernameInChat,
      user:context
   });
 }
   
  closeCustomizator();
}

function setGroupName(event) {
   firebase.database().ref("custom-colors/"+"name").set({
      name:event.target.value
   })
}
var user = firebase.auth().currentUser;



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
      

      firebase.database().ref("custom-colors/").child("name").on('value',snap => {  
         var fileNameX = location.pathname.split("/").slice(-1);
            if(fileNameX[0] === 'inbox.html') {      
         document.getElementById('group-name-headline').innerText = snap.val().name;
         document.getElementById('grop-name').value = snap.val().name;    
            }  
      })

      firebase.storage().ref("wallpapers/" + user.email.slice(0,-10) + "/wallpaper.jpg").getDownloadURL().then(url => {
         firebase.database().ref("wallpapes/" + context).set({
            chatWallpaper:url,
         
         })
               
      })

   } 

})
   
function typing() {
   console.log("typing...");
}

firebase.database().ref("messages").on('child_removed',function(snapshot){  
   console.warn(snapshot.key);        
  document.getElementById(snapshot.key).style.display = 'none';
});

function uploadChatBackgroundImage(e) {
 const files = e.target.files;
 const user = firebase.auth().currentUser;

 if(user) {
   for(const filea of files) {
      

      filea.size = filea.size/100;
      const reader = new FileReader();
      reader.readAsDataURL(filea);
      
      reader.onload = (event) => {
         const imgEl = document.createElement('img');
         imgEl.src = event.target.result;
      
         imgEl.onload = (e) => {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH  = 1500;
            
            const SCALE_SIZE = MAX_WIDTH / e.target.width;
            canvas.width = MAX_WIDTH;
            canvas.height = e.target.height * SCALE_SIZE;
      
            const ctgx = canvas.getContext('2d');
             
          ctgx.drawImage(e.target,0,0,canvas.width,canvas.height);
      
          const srcEncoded = ctgx.canvas.toDataURL(e.target,'image/jpg');
          console.log(srcEncoded)
         // sessionStorage.setItem("pr",srcEncoded);
      
          fetch(srcEncoded)
      .then(res => res.blob())
      .then(blob => {
      const filesss = new File([blob], "File name",{ type: "image/png" })
     
      firebase.storage().ref("wallpapers/" + user.email.slice(0,-10) + "/wallpaper.jpg").put(filesss).on('state_changed', snapshot =>{
         if((snapshot.bytesTransferred / snapshot.totalBytes) * 100 === 100) {
            setTimeout(() => {
               window.location.reload();
            }, 100);
         }
      })
    })
         }
      }
      
   }
}
}

function setAsDefault() {
   var user = firebase.auth().currentUser;
  

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


   firebase.database().ref("custom-colors/"+context).set({
      messageColor:"linear-gradient(to top, #333399, #ff00cc)",
      messageColortext:"white",
      freindColor:"rgba(255, 255, 255, 0.5)",
      freindColorText:"black",
      backgroundColor:"rgba(255, 255, 255, 0.9)",
      usernameInChat:"rgb(107, 107, 107)",
      user:context
   });

   firebase.storage().ref("wallpapers/" + user.email.slice(0,-10) + "/wallpaper.jpg").delete()
   firebase.database().ref("wallpapes").child(context).remove();
   document.getElementById('chat-box').style.backgroundImage = 'none';

   closeCustomizator();
}

function removeChatWallpaper() {

   var user = firebase.auth().currentUser;
  

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

   firebase.storage().ref("wallpapers/" + user.email.slice(0,-10) + "/wallpaper.jpg").delete()
   firebase.database().ref("wallpapes").child(context).remove();
   document.getElementById('chat-box').style.backgroundImage = 'none';

   closeCustomizator();
}


function darkModeApp() {
   var root = document.documentElement;

   root.style.setProperty('--header-footer-color','rgb(0, 0, 0)');
   root.style.setProperty('--bar-color','#171717');
   root.style.setProperty('--body-color','rgb(0, 0, 0)');
   root.style.setProperty('--chat-color','rgb(0, 0, 0)');
   root.style.setProperty('--post-button','#292929');
   root.style.setProperty('--post-button-2','#292929');
   root.style.setProperty('--post-color','#171717');
   root.style.setProperty('--selected-color','#3d3d3d');
   root.style.setProperty('--post-text-color','rgb(255, 255, 255)');
   root.style.setProperty('--post-name-link','#00a2ff');
   root.style.setProperty('--post-border','none');
   root.style.setProperty('--bar-border','.5px solid #242424');
   root.style.setProperty('--txt-message-color','0px 0px 0px .3px rgb(255,255,255)');
   root.style.setProperty('--public-button','rgb(38, 255, 0)');
   root.style.setProperty('--popup-button','none');
   root.style.setProperty('--public-color','linear-gradient(to left,rgb(59, 59, 59),rgb(36, 36, 36))');
   root.style.setProperty('--delete-overlay','rgba(0, 0, 0,0.5)');
   root.style.setProperty('--customizer-color','#171717');
   root.style.setProperty('--chat-img-border','1px solid rgb(255, 255, 255)');
   root.style.setProperty('--group-box-border','1px solid rgb(255, 255, 255)');
    root.style.setProperty('--header-footer-property','#171717');

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
   firebase.database().ref("custom-colors/"+context).remove();
   firebase.database().ref("custom-colors/"+context).set({
      freindColor:'rgb(255,255,255)',
      freindColorText:'rgb(0,0,0)',
      backgroundColor:'rgb(0,0,0)',
      usernameInChat:'rgb(255,255,255)',
      user:context
   });
}

   localStorage.setItem("theme","darkmode");

}

if (localStorage.getItem("theme") === "darkmode" ) {
   root.style.setProperty('--chat-color','rgb(0, 0, 0)');
   root.style.setProperty('--header-footer-color','rgb(0, 0, 0)');
   root.style.setProperty('--chat-img-border','1px solid rgb(255, 255, 255)');
   root.style.setProperty('--group-box-border','1px solid rgb(255, 255, 255)');
   root.style.setProperty('--customizer-color','#171717');
   root.style.setProperty('--bar-color','#171717');
   root.style.setProperty('--post-border','none');
   root.style.setProperty('--delete-overlay','rgba(0, 0, 0,0.5)');
   root.style.setProperty('--popup-button','none');
   root.style.setProperty('--body-color','rgb(0, 0, 0)');
   root.style.setProperty('--post-button','#292929');
   root.style.setProperty('--post-button-2','#292929');
   root.style.setProperty('--post-color','#171717');
   root.style.setProperty('--selected-color','#3d3d3d');
   root.style.setProperty('--post-text-color','rgb(255, 255, 255)');
   root.style.setProperty('--post-name-link','#00a2ff');
   root.style.setProperty('--public-button','rgb(38, 255, 0)');
   root.style.setProperty('--bar-border','.5px solid #242424');
   root.style.setProperty('--header-footer-property','#171717');
   root.style.setProperty('--txt-message-color','0px 0px 0px .3px rgb(255,255,255)');
   root.style.setProperty('--public-color','linear-gradient(to left,rgb(59, 59, 59),rgb(36, 36, 36))');

}

function chatDarkMode() {
   
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
   firebase.database().ref("custom-colors/"+context).remove();
   firebase.database().ref("custom-colors/"+context).set({
      freindColor:'rgb(255,255,255)',
      freindColorText:'rgb(0,0,0)',
      backgroundColor:'rgb(0,0,0)',
      usernameInChat:'rgb(255,255,255)',
      user:context
   });
}
closeCustomizator();
}







function LightMode() {
   var root = document.documentElement;

   root.style.setProperty('--header-footer-color','rgb(255, 255, 255)');
   root.style.setProperty('--bar-color','rgba(255, 255, 255, 0.8)');
   root.style.setProperty('--body-color','linear-gradient(to left, #333399, #ff00cc)');
   root.style.setProperty('--chat-color','rgba(255, 255, 255, 0.9)');
   root.style.setProperty('--post-button','transparent');
   root.style.setProperty('--post-color','rgba(255, 255, 255, 0.8)');
   root.style.setProperty('--selected-color','rgba(255, 255, 255, 0.8)');
   root.style.setProperty('--post-text-color','black');
   root.style.setProperty('--post-name-link','navy');
   root.style.setProperty('--post-border','1px solid grey');
   root.style.setProperty('--bar-border','none');
   root.style.setProperty('--txt-message-color','0px 0px 0px .3px rgb(38,38,38)');
   root.style.setProperty('--public-button','white');
   root.style.setProperty('--popup-button','1px solid whitesmoke');
   root.style.setProperty('--public-color','linear-gradient(to left,rgb(226, 226, 226),rgb(151, 151, 151))');
   root.style.setProperty('--delete-overlay','rgba(0, 0, 0,0.8)');
   root.style.setProperty('--customizer-color','rgb(255, 255, 255)');
   root.style.setProperty('--chat-img-border','1px solid black');
   root.style.setProperty('--post-button-2','white');
   root.style.setProperty('--group-box-border','1px solid rgb(26, 26, 26)');
    root.style.setProperty('--header-footer-property','white');

    localStorage.setItem("theme","lightmode");

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
   firebase.database().ref("custom-colors/"+context).remove();
  
 } 
}

if (localStorage.getItem("theme") === "lightmode" ) {
   root.style.setProperty('--header-footer-color','rgb(255, 255, 255)');
   root.style.setProperty('--bar-color','rgba(255, 255, 255, 0.8)');
   root.style.setProperty('--body-color','linear-gradient(to left, #333399, #ff00cc)');
   root.style.setProperty('--chat-color','rgba(255, 255, 255, 0.9)');
   root.style.setProperty('--post-button','transparent');
   root.style.setProperty('--post-button-2','white');
   root.style.setProperty('--post-color','rgba(255, 255, 255, 0.8)');
   root.style.setProperty('--selected-color','rgba(255, 255, 255, 0.8)');
   root.style.setProperty('--post-text-color','black');
   root.style.setProperty('--post-name-link','navy');
   root.style.setProperty('--post-border','1px solid grey');
   root.style.setProperty('--bar-border','none');
   root.style.setProperty('--txt-message-color','0px 0px 0px .3px rgb(38,38,38)');
   root.style.setProperty('--public-button','white');
   root.style.setProperty('--popup-button','1px solid whitesmoke');
   root.style.setProperty('--public-color','linear-gradient(to left,rgb(226, 226, 226),rgb(151, 151, 151))');
   root.style.setProperty('--delete-overlay','rgba(0, 0, 0,0.8)');
   root.style.setProperty('--customizer-color','rgb(255, 255, 255)');
   root.style.setProperty('--chat-img-border','1px solid black');
   root.style.setProperty('--group-box-border','1px solid rgb(26, 26, 26)');
    root.style.setProperty('--header-footer-property','white');
}