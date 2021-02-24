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
      }else if(get == 1) {
         window.location.href = 'log-in.html'
      }
    }

    //create account
   
