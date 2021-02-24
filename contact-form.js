//send email
document.querySelector('#submit').addEventListener('click',() => {
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
    })