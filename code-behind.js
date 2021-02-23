var contactHeader = document.querySelector('.contact-header');

     fetch('data.json',{method:"GET"})
     .then(response => response.json())
     .then(data => window.onload = fncHeader(data))
     .catch(error => console.error());


     function fncHeader(data) {
        var item = data.header;
       for(var i = 0; i < item.length; i++) {
        contactHeader.innerHTML += `<a href="" class="${item[i].class}">${item[i].name}</a>`;
       }       
    }


