var contactHeader = document.querySelector('.contact-header');
let files = {};


 console.log(navigator.userAgent)
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)){
console.warn("You're using Mobile Device!!");} else console.warn("no dy");

var ua = new UAParser();
	var result = ua.getResult();
	console.log(result);


	console.log(result.browser);
	//console.log(result.device);
	console.log(result.os);
 fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(IPV4=>  
   informAdmin(IPV4.ip)
 )

function informAdmin(ip) {

   var ua = new UAParser();
	var result = ua.getResult();

   /*Email.send({
      Host:"smtp.mailtrap.io",
      Username:"6241169ec85c51",
      Password:"e7b51c6c0341ee",          
    To:"mmarko.perovici3@gmail.com",
      From:"user@gmail.com",
      Subject: ip + " JOINED",
      Body:"IP:" +  ip + "<br>" + "Mobile: "  + result.device.model + "<br>" + "OS: "+result.os.name
}).catch(e=>console.log(e))*/
}

     //get data from json file for options in header
     fetch('data.json',{method:"GET"})
     .then(response => response.json())
     .then(data => window.onload = fncHeader(data))
     .catch(error => console.error(error));



     //show header options on index page
     function fncHeader(data) {
        var item = data.header;
       for(var i = 0; i < item.length; i++) {
        contactHeader.innerHTML += `<a class="${item[i].class}" onclick="openPageInHeader(${item[i].id})">${item[i].name}</a>`;
       }       
    }

       //class for pop ups
class PopUp{
      
   //log out pop up in header button
      showLogOutPopUp(){  
         document.getElementById('log-out-mail').innerHTML =`<div class="set-class popup" id="log-out-mailp"> <div class="setting-button" style="width: 100%;justify-content: center;text-align: center;">Do you want to log out?</div><div class="flex-button" style="width: 100%;margin-right: 0px;justify-content: center;"><button  onclick="logOut()"  class="new-mail hover-red" style="background-color: red;margin-right: 10px;" >LOG OUT</button> <button class="new-mail" onclick="closeLogOutPopUp()">CANCLE</button></div></div>`;
   }

   //info about evry post on page
   showInformationPopUp() {
      document.getElementById('info-mail').innerHTML = ` <div class="set-class popup" id="info-popup"><button class="setting-button" style="padding:0px">File info</button><div class="setting-button" style="padding:0px" id="data-info"></div><div class="flex-button" style="width: 100%;margin-right: 0px;"> <button class="new-mail" onclick="closeDataInfo()">CLOSE</button></div></div>`;
   }

   //show post perview popup
   showPreviewPopUp() {
      document.getElementById('previe-popup').innerHTML = `<div class="set-class popup" id="ch-mail"><button class="setting-button" style="padding:0px" id="text-message"></button><div id="preview-div"></div><div class="set-display-flex" id="desc"></div><div class="flex-button"> <button class="new-mail" onclick="closeImagePreview()">CLOSE</button></div></div>`;
   }

   //show delete popup
   showDeletePopUp() {
      document.getElementById('st-dis').innerHTML = `<div class="set-class popup" id="ch-mail"><button class="setting-button" style="padding:0px">Do you want to delete</button><div class="set-display-flex" id="delete-txt"></div><div class="flex-button"> <button class="new-mail" onclick="cancleUpdateMail()">CANCLE</button><button class="new-mail hover-red" id="delete" style="background-color:red">DELETE</button></div></div>`;
   }

}

var popupclass = new PopUp();

switch((location.pathname.substring(location.pathname.lastIndexOf("/") + 1)).slice(0,-5)) {
     case "log-in":
          popupclass.showLogOutPopUp();
             break;
      case "contact-us":
          popupclass.showLogOutPopUp();
             break;
             case "index":
               popupclass.showDeletePopUp();
               popupclass.showInformationPopUp();
               popupclass.showPreviewPopUp();
               popupclass.showLogOutPopUp();
               break;
            case "settings":
                  popupclass.showLogOutPopUp();
             break;
             case "search":
               popupclass.showLogOutPopUp();
          break;
          case "index":
                  popupclass.showLogOutPopUp();
             break;
             default:
            
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
         default:
                 return null;     
     }
    }

    //open page in header by using id
    function openPageInHeader(pageId){
      sessionStorage.setItem("pageIdInHeader",pageId);
      var get = sessionStorage.getItem("pageIdInHeader");

     switch(get) {
        case "1":
         window.location.href= "contact-us.html";;
              break;
         case "2":
            var user = firebase.auth().currentUser;
            if(user) {
               document.getElementById('log-out-mail').style.display = 'flex';
               document.getElementById('log-out-mailp').style.display = 'flex';
               document.getElementById('new-overlay').style.display = 'flex';
            }
            else {
               window.location.href= "log-in.html"; 
            }  
         default:
                 return null;     
     }
    }

    //close log out pop up
    function closeLogOutPopUp() {
      document.getElementById('log-out-mail').style.display = 'none';
      document.getElementById('log-out-mailp').style.display = 'none';
      document.getElementById('new-overlay').style.display = 'none';
    }
        
    //show mail changer
    function showMailUpdater() {
       document.querySelector('.set-displ').style.display = 'flex';
       document.querySelector('.overlay-pop-up').style.display = 'flex';
    }

    //hide mail changer
    function cancleUpdateMail() {
      document.querySelector('.set-displ').style.display = 'none';
      document.querySelector('.overlay-pop-up').style.display = 'none';
      document.body.style.overflowY = 'visible';
    }

    //create account
    var firebaseConfig = {
      apiKey: "AIzaSyBInVpEsEvXzZtYDLy7qNA4AOIaS-5mjb8",
      authDomain: "saveprojects-e2b7f.firebaseapp.com",
      projectId: "saveprojects-e2b7f",
      storageBucket: "saveprojects-e2b7f.appspot.com",
      messagingSenderId: "1068677321956",
      appId: "1:1068677321956:web:97a4d0b9ddeb63520588f1",
      measurementId: "G-HXW1NYY74D"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
   
  //create account
    function createAccount(){
        let email = document.getElementById('e-mail-input');
        let password = document.getElementById('password-input');
        let username = document.getElementById('e-username-input');
       auth.createUserWithEmailAndPassword(email.value, password.value).then((userCredential) => {         
         var user = userCredential.user;
        window.location.href = "settings.html";
       })
       .catch(function (error){
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log("CODE:" + errorCode + "MESSAGE:" + errorMessage);
         window.alert("CODE:" + errorCode + "MESSAGE:" + errorMessage);
       });
 alert("Your account is created!");
      }

   //log in
   function logIn(){		
		var emailIN = document.getElementById("email");
		var passwordIN = document.getElementById("password");		
		const status = firebase.auth().signInWithEmailAndPassword(emailIN.value, passwordIN.value);
      status.then(function() {
         iconEvent(4);
         

      })
		status.catch(function (error){
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log("CODE:" + errorCode + "MESSAGE:" + errorMessage);
         window.alert("CODE:" + errorCode + "MESSAGE:" + errorMessage);
      });
	}
 
   //log out
    function logOut() {    
		auth.signOut();
		alert("Signed Out");
      window.location.href = 'log-in.html';
    }

    //upload image
    function uploadImage(e){
     console.log(e);
      var files = e.target.files;
       for (const file of files) {
          firebase
        .storage()
          .ref("images")
           .child(file.name)
            .put(file);
            
       }
    }

    //reset password email verification
    function resetPassword() {
        var user = firebase.auth().currentUser;
        if(user) {
      firebase.auth().sendPasswordResetEmail(user.email).then(function() {
         window.alert("Message sent to email: " +  user.email );
      }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("CODE:" + errorCode + "MESSAGE:" + errorMessage);
            window.alert("CODE:" + errorCode + "MESSAGE:" + errorMessage);
      });
   }
     else {
        window.alert("Enter your email adress firs!");
     }
    }

    //user cannot remember the password
    function resetUserPasswordLogging() {
       var forgottenEmail = document.getElementById('email').value;
       if(forgottenEmail != null){
          firebase.auth().sendPasswordResetEmail(forgottenEmail).then(function(){
             window.alert("Message sent to email:" + forgottenEmail);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("CODE:" + errorCode + "MESSAGE:" + errorMessage);
            window.alert("CODE:" + errorCode + "MESSAGE:" + errorMessage);
      });
       }
    }
    //verify account
    function verifyAccount() {
       var user = firebase.auth().currentUser;
       user.sendEmailVerification().then(function(){
            window.alert("Account verification sent!");
       }).catch(function(error) {
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log("CODE:" + errorCode + "MESSAGE:" + errorMessage);
         window.alert("CODE:" + errorCode + "MESSAGE:" + errorMessage);
       })
    }

    //delete account
    function deleteAccount() {
       firebase.auth().currentUser.delete().then(function(){
          window.alert("Account successfuly deleted.");
       }).catch(function (error){
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log("CODE:" + errorCode + "MESSAGE:" + errorMessage);
         window.alert("CODE:" + errorCode + "MESSAGE:" + errorMessage);
       });
    }

    //upadte account email
    function updateMail() {
       var user = firebase.auth().currentUser;
       var newEmail = document.getElementById('new-mail-set');
       user.updateEmail(newEmail.value).then(function () {
          alert("Mail updated successfully!");
          setTimeout(1000,window.location.reload());
       }).catch(function(error){
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log("CODE:" + errorCode + "MESSAGE:" + errorMessage);
         window.alert("CODE:" + errorCode + "MESSAGE:" + errorMessage);
       });
    }


    //logged user uploads profile image
    function uploadImageUser(e){
       var user = firebase.auth().currentUser;    
       if(user){
       var filess = e.target.files;
       for (const filea of filess) {
          firebase
        .storage()
          .ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg')
            .put(filea).on("state_changed",snapshot=> {            
               if((snapshot.bytesTransferred / snapshot.totalBytes) * 100 === "0"){
                  document.getElementById('load-animations').style.display = "none";                  
                 }else{
                  document.getElementById('load-animations').style.display = 'flex';
               document.querySelector('.progressBar').value =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               document.getElementById('percentage').innerText= ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + "%";   
                 }  
            });                    
       }
       
    }else{
       alert("You must log in to post profile image:");
    }
   }

   //user is logged to firebase
   firebase.auth().onAuthStateChanged(function(user) {
//<img class="y-yJ5 i1HvM " crossorigin="anonymous" decoding="sync" sizes="505.96881103515625px" srcset="https://instagram.fbeg4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/150140867_262871772028219_8056152452590206927_n.jpg?tp=1&amp;_nc_ht=instagram.fbeg4-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=wTEkQIcM8_YAX_YfP62&amp;ccb=7-4&amp;oh=6534fb8aacba3b089c49d56886588bf7&amp;oe=6054F93F&amp;ig_cache_key=MjUwOTkwMzc2NjMyMzI4OTUzNw%3D%3D.2-ccb7-4 750w,https://instagram.fbeg4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/150140867_262871772028219_8056152452590206927_n.jpg?tp=1&amp;_nc_ht=instagram.fbeg4-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=wTEkQIcM8_YAX_YfP62&amp;ccb=7-4&amp;oh=5a96285dfdbd7d37df3c85f85393eab0&amp;oe=6054687B&amp;ig_cache_key=MjUwOTkwMzc2NjMyMzI4OTUzNw%3D%3D.2-ccb7-4 640w,https://instagram.fbeg4-1.fna.fbcdn.net/v/t51.2885-15/e35/p480x480/150140867_262871772028219_8056152452590206927_n.jpg?tp=1&amp;_nc_ht=instagram.fbeg4-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=wTEkQIcM8_YAX_YfP62&amp;ccb=7-4&amp;oh=83b1125baf629d35bac1889193a0ce48&amp;oe=6054C741&amp;ig_cache_key=MjUwOTkwMzc2NjMyMzI4OTUzNw%3D%3D.2-ccb7-4 480w,https://instagram.fbeg4-1.fna.fbcdn.net/v/t51.2885-15/e35/p320x320/150140867_262871772028219_8056152452590206927_n.jpg?tp=1&amp;_nc_ht=instagram.fbeg4-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=wTEkQIcM8_YAX_YfP62&amp;ccb=7-4&amp;oh=647d92f970643267419fb72f3204485e&amp;oe=6054D0C8&amp;ig_cache_key=MjUwOTkwMzc2NjMyMzI4OTUzNw%3D%3D.2-ccb7-4 320w,https://instagram.fbeg4-1.fna.fbcdn.net/v/t51.2885-15/e35/p240x240/150140867_262871772028219_8056152452590206927_n.jpg?tp=1&amp;_nc_ht=instagram.fbeg4-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=wTEkQIcM8_YAX_YfP62&amp;ccb=7-4&amp;oh=58269d9259ebefd3617369e182aa3539&amp;oe=605459BA&amp;ig_cache_key=MjUwOTkwMzc2NjMyMzI4OTUzNw%3D%3D.2-ccb7-4 240w" src="https://instagram.fbeg4-1.fna.fbcdn.net/v/t51.2885-15/e35/150140867_262871772028219_8056152452590206927_n.jpg?tp=1&amp;_nc_ht=instagram.fbeg4-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=wTEkQIcM8_YAX_YfP62&amp;ccb=7-4&amp;oh=d850ef07dbb13ca2d2e1d5bc5baf9bd9&amp;oe=60547711&amp;ig_cache_key=MjUwOTkwMzc2NjMyMzI4OTUzNw%3D%3D.2-ccb7-4">
      if (user) {
         
            var username = user.email, didsplayname = username.slice(0, -10);
            var fullname = didsplayname.toString(),context;
            
         
          if(fullname.includes(".")) {
             context = fullname.replace(".","");
          }else  if(fullname.includes("#")) {
            context = fullname.replace("#","");
         }else if(fullname.includes("[")) {
            context = fullname.replace("]","");
         }else if(fullname.includes("$")) {
            context = fullname.replace("$","");
         }else {
            context = fullname;
         }

         var xml = new XMLHttpRequest();
         xml.open("GET","https://api.ipify.org");
         xml.send();
         xml.addEventListener('loadend',getIp);      

         function getIp(e) {
            userIP(xml.responseText)
         }
         function userIP(ipv4) {
           

            firebase.database().ref("users/" + context).set({
               ipv4:ipv4,
            

            })
         }

         //display user's profile image
         firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(imgurl =>{
            var profileimage =imgurl;
                        });  
                        var username = user.email, didsplayname = username.slice(0, -10);                                           
                        //display all storage files
                        var storage = firebase.storage(),storageRef = storage.ref();
                        var i = 0;
         storageRef.child("users/" + user.uid +'/data/').listAll().then(function(result){
            result.items.forEach(function(imageRef){
                 console.log(imageRef.name.toString()); 
                 imageRef.getMetadata().then(s=>{
                    console.log(s.size/1000000);
                    var fileSizeProperty = (s.size/1000000).toFixed(2);     
                    var fileType = s.contentType, timeCreated = (s.timeCreated).slice(0,-14),
                    time = (s.timeCreated).substring(11),newCurrnetTime = time.slice(0,-8),
                    useriID = user.uid;                    
                i++;
          firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(imgurl =>{
  var iiName = imageRef.name.toString();            
                showUsersStorageContectOnPage(i, imageRef,iiName,didsplayname,imgurl,fileSizeProperty,fileType,timeCreated,newCurrnetTime,useriID);
                });
               }).catch(function(er){console.log(er)})
         });
      });

      var emailFom = document.getElementById('mail-input');
      emailFom.value = user.email;
      } else {
         
         document.getElementById('usernamename').innerHTML = `<p>username</p>`;
         document.getElementById('img').src = 'https://www.clipartmax.com/png/middle/256-2564545_nauman-javid-none-profile.png';
        
      }
    });

    //show users data/ from storage on page
    function showUsersStorageContectOnPage(row, images,name,didsplayname,profileimage,fileSizeProperty,fileType,timeCreated,newCurrnetTime,useriID) {
               images.getDownloadURL().then(function(URL) {               
               let HTML = ``;
                 
            if(fileType === "image/png" || fileType === "image/jpg" || fileType === "image/jpeg") {
               HTML=`<article class="storage-article" id="${fileSizeProperty}"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div>
               <i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><img src="${URL}" alt ="" width="100%" height="auto" style="pointer-events: none;"><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;      
            }else if (fileType === "video/mp4") {
               HTML=`<article class="storage-article" id="${fileSizeProperty}"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div>
               <i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div>
               <video src="${URL}" autoplay loop muted width="100%" height="auto"></video><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;               
            }else if (fileType === "application/octet-stream"){
                HTML=`<article class="storage-article" id="${fileSizeProperty}"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div>
               <i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><img src="./media/rar.jpg" alt ="" width="100%" height="auto" style="pointer-events: none;"><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;            
            }else {
                 HTML=`<article class="storage-article" id="${fileSizeProperty}"><div class="artcile-header"><div class="user-header-info"><div style="background-image:url(${profileimage});background-size:cover;" class="user-profile-image"></div><b class="user-username">${didsplayname}</b></div>
                <i class="fas fa-ellipsis-v" onclick="infoData('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div>
                <img src="./media/none-pic.png" alt ="" width="100%" height="auto" style="pointer-events: none;"><div class="post-options"><div class="left-options"><a href='${URL}'><i class="fas fa-download"></i></a><i class="far fa-trash-alt"onclick="deleteThisPost('${name}','${fileSizeProperty}','${fileType}','${timeCreated}','${newCurrnetTime}')"></i></div><i class="far fa-eye" onclick="preview('${URL}','${fileType}')"></i></div><div class="article-description"><span><b class="user-username">name:</b></span><span class="post-name">${name}</span></div><div class="article-description"><span><b class="user-username">size:</b></span><span class="post-name">${fileSizeProperty} MB</span></div><div class="article-description"><span><b class="user-username">type:</b></span><span class="post-name">${fileType}</span></div><div class="article-description"><span><b class="user-username">posted:</b></span><span class="post-name">${timeCreated} at ${newCurrnetTime}</span></div></article>`;    
            }
                
               document.getElementById('bodyID').innerHTML += HTML;
               });
    }

    //show preview of image
  function preview(locationOfImage,type) {
   var div = document.getElementById('preview-div');
   var src = locationOfImage;
   div.style.display ='flex'; 
   document.body.style.overflowY = 'hidden';
   if(type === "image/png" || type === "image/jpeg" || type === "image/jpeg"){  
      div.innerHTML = `<img src="${src}" alt="" class="preview-image">`;
      document.getElementById('previe-popup').style.display = 'flex';
      document.getElementById('new-overlay').style.display = 'flex';
      document.getElementById('text-message').style.display = 'none';
   }else if(type === "video/mp4") {    
      div.innerHTML = `<video src="${src}" autoplay loop muted controls class="preview-image"></video>`;
      document.getElementById('previe-popup').style.display = 'flex';
      document.getElementById('new-overlay').style.display = 'flex';
      document.getElementById('text-message').style.display = 'none';
   }else if(type === "audio/wav" || type === "audio/mp3") {
      div.innerHTML = `<video src="${src}" autoplay loop muted controls class="preview-audio" id="audio"></video>`;
      document.getElementById('previe-popup').style.display = 'flex';
      document.getElementById('new-overlay').style.display = 'flex';
      document.getElementById('text-message').style.display = 'none';
   }else{
      document.getElementById('text-message').style.display = 'flex';
     document.getElementById('text-message').innerText =  "Cannot preview the "  + type + " file";
      document.getElementById('previe-popup').style.display = 'flex';
      document.getElementById('new-overlay').style.display = 'flex';
      image.classList.remove('preview-image');
   }
}
            
     //close image preview
     function closeImagePreview(){
      document.body.style.overflowY = 'visible';
      var div = document.getElementById('preview-div');
      div.innerHTML = ``;
          document.getElementById('previe-popup').style.display = 'none';
           document.getElementById('new-overlay').style.display = 'none';
           div.style.display = 'none';
           document.getElementById('audio').pause();      
     }

    //delete file from firebase storage
function deleteThisPost(name,size,type,date,time){
   var user = firebase.auth().currentUser;
   document.body.style.overflowY = 'hidden';
      document.getElementById('st-dis').style.display = 'flex';
      document.getElementById('new-overlay').style.display = 'flex';
   document.getElementById('delete-txt').innerHTML = `
   <div class="flx-metadata"><span>Name:</span><span><b class="new-color-3">${name}</b></span></div>
   <div class="flx-metadata"><span>Size:</span><span><b class="new-color-3">${size} MB</b></span></div><div class="flx-metadata"><span>Type:</span><span><b class="new-color-3">${type}</b></span></div><div class="flx-metadata"><span>Posted:</span><span><b class="new-color-3">${date} at ${time}</b></span></div>`;
   document.getElementById('delete').addEventListener('click',() =>{
       firebase.storage().ref().child("users/" +user.uid + "/data/" + name).delete().then(() =>{
         document.getElementById('st-dis').style.display = 'none';
         document.getElementById('new-overlay').style.display = 'none';
      pageReloader();
   }).catch((error)=>{
      alert(error);
   })
   })
 }

        //show info about post
        function infoData(name,size,type,date,time){
           document.getElementById('info-popup').style.display = 'flex';
           document.getElementById('new-overlay').style.display = 'flex';
           document.getElementById('info-mail').style.display = 'flex';
           document.getElementById('data-info').style.display = 'flex';
        
       if (name.length > 25) {
       name = name.substr(0,25) + '...';
      }

         document.getElementById('data-info').innerHTML = `
         <div class="flx-metadata"><span>Name:</span><span><b class="new-color-3">${name}</b></span></div>
         <div class="flx-metadata"><span>Size:</span><span><b class="new-color-3">${size} MB</b></span></div><div class="flx-metadata"><span>Type:</span><span><b class="new-color-3">${type}</b></span></div><div class="flx-metadata"><span>Posted:</span><span><b class="new-color-3">${date} at ${time}</b></span></div>`;
         document.getElementById('data-info').style.display = 'block';
         document.getElementById('data-info').style.fontSize = '15px'
         document.body.style.overflowY = 'hidden';
        } 

        //Close data info
        function closeDataInfo(){
         document.getElementById('info-popup').style.display = 'none';
         document.getElementById('new-overlay').style.display = 'none';
         document.getElementById('info-mail').style.display = 'none';
         document.getElementById('data-info').style.display = 'none';
         document.body.style.overflowY = 'visible';
        }

        //logged user uploads files in storage
function uploadFileToFirebase(e){
   document.getElementById('postcontent').innerHTML = ``;
   var user = firebase.auth().currentUser;      
        if(user){
            for(let i=0;i<e.target.files.length;i++){
            let file = e.target.files[i];
            
        firebase.storage()
   .ref("users/" + user.uid +'/data/'+ file.name).put(file).on('state_changed',snapshot =>{
      if(((snapshot.bytesTransferred / snapshot.totalBytes) * 100) === "0") {
         document.getElementById('uploading-proces').style.display="none";
      }else{
         document.getElementById('uploading-proces').style.display="flex";
         document.getElementById('uploading-proces-value').value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log(snapshot.totalBytes);
         document.getElementById('total-transfered-percetage').innerText =((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + "%";
      }
      console.warn(file);
      firebase.storage().ref("users/" + user.uid +'/data/'+ file.name).getMetadata().then(snapshot => {;
         var fileType = snapshot.contentType,name = snapshot.name,fileSizeProperty=2,timeCreated=1,newCurrnetTime=2,profileimage=null,didsplayname=null;
     
      firebase.storage()
      .ref("users/" + user.uid +'/data/'+ file.name).getDownloadURL().then(imageURLdownload =>{
         
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
        })  
      }) 
   })
             }
           }
           else{
              alert("You must log in!");
           }
   }

      //send email
      function sendMail() {
         fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(IPV4=>     
         Email.send({
            Host:"smtp.mailtrap.io",
            Username:"6241169ec85c51",
            Password:"e7b51c6c0341ee",          
            To:"mmarko.perovici3@gmail.com",
            From:document.getElementById('mail-input').value,
            Subject:document.getElementById("subject-input").value,
            Body:"From:  " + document.getElementById('mail-input').value + "<br><br>" + "Message:  " + document.getElementById("message-input").value + "<br><br>" + "IP: " + IPV4.ip +" ",
     }).then(mesage => {alert(mesage); window.location.reload();}
     )
     )
   }

   //sub-class 
   class DataProvider{
      async getFooter() {
         try {
            let data = await fetch('data.json');
            let items = await data.json();
            let icons = items.footer;
            icons = icons.map(item => {
               let icon = item.icon, iconEvenet = item.event;
               return {icon, iconEvenet};
            });
            return icons;
         }
         catch(error)
         {
           console.log(error);
           alert(error);
           return null;
         }
         finally{
            console.log("Loaded");
         }
      }
   }

   //class for userinterface
   class UserInterface{
      displayFooter(icons) {
         let result = '';
         icons.forEach(icon => {
            result += `<i class="${icon.icon}" onclick="iconEvent(${icon.iconEvenet})"></i>`;
         });
         document.querySelector('.footer').innerHTML = result;
      }
   }

   //dom content listener
   document.addEventListener('DOMContentLoaded',(event) => {
      const DATA = new DataProvider();
      const GUI  = new UserInterface();
      DATA.getFooter().then(item => GUI.displayFooter(item));
   });

   //open pages from footer
   function iconEvent(ID) {
      sessionStorage.setItem("optionPageID",ID);
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
                   alert("You must log in!");
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
