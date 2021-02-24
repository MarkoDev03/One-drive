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
      if(get == 3) {
         window.location.href= "contact-us.html";
      }else if (get == 4) {
         window.location.href= "index.html";
      }else if (get == 2) {
         window.location.href= "create-account.html";
      }
    }

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
