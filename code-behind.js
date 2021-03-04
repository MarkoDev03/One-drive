var contactHeader = document.querySelector('.contact-header');
let files = {};

     //get data from json file for options in header
     fetch('data.json',{method:"GET"})
     .then(response => response.json())
     .then(data => window.onload = fncHeader(data))
     .catch(error => console.error(error));


     //show header options on index page
     function fncHeader(data) {
        var item = data.header;
       for(var i = 0; i < item.length; i++) {
        contactHeader.innerHTML += `<a class="${item[i].class}" onclick="openPage(${item[i].id})">${item[i].name}</a>`;
       }       
    }

    //open new page for options from header
    function openPage(id) {
      sessionStorage.setItem("pageId",id);
      var get = sessionStorage.getItem("pageId");

     switch(get) {
        case "1":
           window.location.href= "log-in.html";
              break;
         case "2":
            window.location.href= "create-account.html"; 
               break;
         case "3":
              window.location.href= "contact-us.html";
                break;
         case "4":
               window.location.href= "index.html";
                 break;
         default:
                 return null;     
     }
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
         localStorage.setItem("username",user.email);
         // localStorage.setItem("")
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
    }

    //upload image
    function uploadImage(e){
     console.log(e);
      var files = e.target.files;
      //  var storageRef = firebase.storage().ref("num");
      //  storageRef.put(file);
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
      if (user) {
         firebase.storage().ref("users/" + user.uid +'/profile_image' + '/profile_image.jpg').getDownloadURL().then(imgurl =>{
            document.getElementById('img').src = imgurl;
                        });
                        var username = user.email;
                        var didsplayname = username.slice(0, -10);
                        document.getElementById('usernamename').innerHTML = `<p>${didsplayname}</p>`;
      } else {
         document.getElementById('usernamename').innerHTML = `<p>username</p>`;
         document.getElementById('img').src = 'https://www.clipartmax.com/png/middle/256-2564545_nauman-javid-none-profile.png';
      }
    });

        //logged user uploads files in storage
function uploadFileToFirebase(e){
   var user = firebase.auth().currentUser;      
        if(user){
            for(let i=0;i<e.target.files.length;i++){
            let file = e.target.files[i];
        firebase.storage()
   .ref("users/" + user.uid +'/data/'+ file.name).put(file); 
                     }
           }
           else{
              alert("You must log in!");
           }
   }

      //send email
      function sendMail() {
         Email.send({
            Host:"smtp.mailtrap.io",
            Username:"6241169ec85c51",
            Password:"e7b51c6c0341ee",          
            To:"mmarko.perovici3@gmail.com",
            From:document.getElementById('mail-input').value,
            Subject:document.getElementById("subject-input").value,
            Body:"From:  " + document.getElementById('mail-input').value + "<br><br>" + "Message:  " + document.getElementById("message-input").value + "<br><br>",
     }).then(mesage => alert(mesage)
     );
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
      openPage(2);
   }

   //login-redirect
   function redirectLogIn(){
      openPage(1);
   }

   //page reloader
   function pageReloader(){
    window.location.reload();
   }

   //send message page
   function help(){
      openPage(3);
   }
