var firebaseConfig = {
    apiKey: "AIzaSyBInVpEsEvXzZtYDLy7qNA4AOIaS-5mjb8",
    authDomain: "https://saveprojects.netlify.app",
    projectId: "saveprojects-e2b7f",
    storageBucket: "saveprojects-e2b7f.appspot.com",
    messagingSenderId: "1068677321956",
    appId: "1:1068677321956:web:97a4d0b9ddeb63520588f1",
    measurementId: "G-HXW1NYY74D"
  };
      
  // Initialize Firebase to saveprojects
  firebase.initializeApp(firebaseConfig);

  window.onload=function () {
    render();
  };
  function render() {
      window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }
  function phoneAuth() {
      //get the number
      var number=document.getElementById('number').value;
      console.log(window.recaptchaVerifier)
      //phone number authentication function of firebase
      //it takes two parameter first one is number,,,second one is recaptcha
      firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
          //s is in lowercase
          window.confirmationResult=confirmationResult;
          coderesult=confirmationResult;
          console.log(coderesult);
          alert("Message sent");
      }).catch(function (error) {
          alert(error.message);
      });
  }
  function codeverify() {
      var code=document.getElementById('verificationCode').value;
      coderesult.confirm(code).then(function (result) {
          alert("Successfully registered");
          var user=result.user;
          console.log(user);
      }).catch(function (error) {
          alert(error.message);
      });
  }