var contactHeader = document.querySelector('.contact-header');

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
           window.location.href= "contact-us.html";
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
                   break;      
     }
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
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        alert("si");
      }
  
      //send email
      function sendMail() {
         Email.send({
            Host:"smtp.mailtrap.io",
            Username:"3614ca97b06892",
            Password:"f66ed6c438d0a3",          
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
   class UserInterface{
      displayFooter(icons) {
         let result = '';
         icons.forEach(icon => {
            result += `<i class="${icon.icon}" onclick="iconEvent(${icon.iconEvenet})"></i>`;
         });
         document.querySelector('.footer').innerHTML = result;
      }
   }
   document.addEventListener('DOMContentLoaded',(event) => {
      const DATA = new DataProvider();
      const GUI  = new UserInterface();
      DATA.getFooter().then(item => GUI.displayFooter(item));
   });
   function iconEvent(ID) {
      sessionStorage.setItem("optionPageID",ID);
   }
 