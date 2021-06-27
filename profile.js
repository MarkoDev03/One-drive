var database = firebase.database();
var storage = firebase.storage();

var username = document.getElementById('profile-username')
var profileImage = document.getElementById('profile-profileimage')
var publicPostsCounter = document.getElementById('public-post-counter')
var privatePostsCounter = document.getElementById('private-post-counter')
var overlay = document.getElementById('post-wrapper-overlay');


firebase.auth().onAuthStateChanged((user) => {

    document.getElementById('all').classList.add('selected-2')
    document.getElementById('private').classList.remove('selected-2')
    document.getElementById('public').classList.remove('selected-2')

    if (user) {

        var fullname = user.email.slice(0, -10),context;

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

        username.innerText = user.email.slice(0,-10);

        database.ref("accounts/").on('value',(snapshot) => {
            snapshot.forEach((snap) => {
                if (snap.val().username === user.email.slice(0,-10)) {
                     profileImage.style.backgroundImage = `url('${snap.val().profileimage}')`;
                     profileImage.style.backgroundSize = 'cover';
                }
            })
        }) 

        database.ref("public_posts/").on('value', (snapshot) => {        
           var postCount = 0;

           snapshot.forEach(snap => {
              if (snap.val().user.username === user.email.slice(0,-10)) {
                    postCount++;
                    
               }  
           });

           publicPostsCounter.innerText = postCount
        })

        database.ref("private_posts/" + context).on('child_added', (snap) => { 
           
                

        })

        database.ref("private_posts/" + context).once('value', (snapshot) => {
            var postCounter = 0;
  
            snapshot.forEach((snap) => {
                postCounter++                          
            })

            privatePostsCounter.innerText = postCounter
        })

        listPrivateAndAll()
    }
})


  function public() {

    document.getElementById('all').classList.remove('selected-2')
    document.getElementById('private').classList.remove('selected-2')
    document.getElementById('public').classList.add('selected-2')

    document.getElementById('posts').innerHTML = '';

    database.ref("public_posts/").on('child_added', (snap) => {
 
        var post = '';
        
           
            var user = firebase.auth().currentUser;
            var activeUser = user.email.slice(0,-10);
       
      
          
            if (snap.val().user.username === activeUser)
            {
                setTimeout(() => {
                    document.getElementById(snap.val().post.post_url).style.height = document.getElementById(snap.val().post.post_url).clientWidth +"px";
                }, 200); 
            if (snap.val().post.post_type === "image/png" ||snap.val().post.post_type === "image/jpg" ||snap.val().post.post_type === "image/jpeg"  ) {
                post = `<div class="post-prof" id="${snap.val().post.post_url}" onclick="openPost('${snap.val().post.post_url}','${snap.val().post.post_type}','${snap.val().user.username}','${snap.val().user.profile_image}','${snap.val().post.post_size}','${snap.val().post.post_date}','${snap.val().post.post_time}','${snap.val().post.post_name}')" style="background-image: url(${snap.val().post.post_url});background-size:cover"></div>`
            } else if (snap.val().post.post_type === "video/mp4") {
                setTimeout(() => {
                    document.getElementById('z').style.height = document.getElementById('z').clientWidth +"px";
                   }, 100);
                post = `<video class="post-prof" id="z" onclick="openPost('${snap.val().post.post_url}','${snap.val().post.post_type}','${snap.val().user.username}','${snap.val().user.profile_image}','${snap.val().post.post_size}','${snap.val().post.post_date}','${snap.val().post.post_time}','${snap.val().post.post_name}')" src="${snap.val().post.post_url}" autoplay muted loop></video>`;
            } else {
                post = `<div class="post-prof" id="${snap.val().post.post_url}" onclick="openPost('${snap.val().post.post_url}','${snap.val().post.post_type}','${snap.val().user.username}','${snap.val().user.profile_image}','${snap.val().post.post_size}','${snap.val().post.post_date}','${snap.val().post.post_time}','${snap.val().post.post_name}')" style="background-image: url('./media/none-pic.png');background-size:cover"></div>`
            }
            } 
            
            document.getElementById('posts').innerHTML += post;            
    })
  }

function listPrivateAndAll() {
    var user = firebase.auth().currentUser;
    var fullname = user.email.slice(0, -10),context;

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

    document.getElementById('posts').innerHTML = '';

    database.ref("private_posts/" + context).once('value', (snapshot) => {
       
        var post = '';
        snapshot.forEach((snap) => {     
            setTimeout(() => {
                document.getElementById(snap.val().imageRef).style.height = document.getElementById(snap.val().imageRef).clientWidth +"px";
            }, 200);    
           
            if (snap.val().fileType == "image/png" ||snap.val().fileType == "image/jpg" ||snap.val().fileType == "image/jpeg") {
                post = `<div class="post-prof"  id="${snap.val().imageRef}"
                onclick="openPost('${snap.val().imageRef}','${snap.val().fileType}','${snap.val().didsplayname}','${snap.val().imgurl}','${snap.val().fileSizeProperty}','${snap.val().timeCreated}','${snap.val().newCurrnetTime}','${snap.val().iiName}')" 
                style="background-image: url(${snap.val().imageRef});background-size:cover"></div>`
            } else if (snap.val().fileType === "video/mp4") {
                setTimeout(() => {
                    document.getElementById(snap.val().iiName).style.height = document.getElementById(snap.val().iiName).clientWidth +"px";
                   }, 100);
                post = `<video class="post-prof" id="${snap.val().iiName}" onclick="openPost('${snap.val().imageRef}','${snap.val().fileType}','${snap.val().didsplayname}','${snap.val().imgurl}','${snap.val().fileSizeProperty}','${snap.val().timeCreated}','${snap.val().newCurrnetTime}','${snap.val().iiName}')"  src="${snap.val().imageRef}" autoplay muted loop></video>`;
            } else {
                post = `<div class="post-prof"   id="${snap.val().imageRef}"  onclick="openPost('${snap.val().imageRef}','${snap.val().fileType}','${snap.val().didsplayname}','${snap.val().imgurl}','${snap.val().fileSizeProperty}','${snap.val().timeCreated}','${snap.val().newCurrnetTime}','${snap.val().iiName}')"  style="background-image: url('./media/none-pic.png');background-size:cover"></div>`
            }  
         
            document.getElementById('posts').innerHTML += post;
          
        })

       
    })

}

function private() {

    document.getElementById('all').classList.remove('selected-2')
    document.getElementById('private').classList.add('selected-2')
    document.getElementById('public').classList.remove('selected-2')

    
    listPrivateAndAll()

   
}

function allIn() {
    document.getElementById('all').classList.add('selected-2')
    document.getElementById('private').classList.remove('selected-2')
    document.getElementById('public').classList.remove('selected-2')
    listPrivateAndAll();
}

function openPost(postUrl,postType,username,profileImage,postSize,timeCreated,newTime,postName) {
    document.body.style.overflow = 'hidden'
    console.log(postUrl)
    overlay.classList.add('load-overlay');
    overlay.style.display = 'flex'
    overlay.innerHTML = '';

    if (postType === "image/png" ||postType === "image/jpg" ||postType === "image/jpeg") {
           overlay.innerHTML = 
           `
           <div class="post" id="postids">
           <div class="post-header">
               <div class="left-block">
                 <div style="background-image:url('${profileImage}');background-size:cover;" class="user-profile-image"></div>
                 <span class="username-post-info"><b>${username}</b></span>
               </div>
               <i class="fas fa-times f-icon" onclick="closePost()"></i>
           </div>
           <img src="${postUrl}" alt="" class="post-content-pewview">
           <div class="post-header">
               <div class="left-block">
                    <a href="${postUrl}"> <i class="fas fa-download f-icon"></i></a>
                   <i class="far fa-trash-alt f-icon" onclick="deleteThisPost('${postName}','${postSize}','${postType}','${timeCreated}','${newTime}')"></i>
                   <i class="far fa-eye f-icon" onclick="preview('${postUrl}','${postType}')"></i>
               </div>
               <i class="fas fa-share f-icon" onclick="shareLink('${postUrl}')"></i>
           </div>
       </div>
           `;
    }else if (postType === "video/mp4") {
        overlay.innerHTML = 
           `
           <div class="post" id="postids">
           <div class="post-header">
               <div class="left-block">
                 <div style="background-image:url('${profileImage}');background-size:cover;" class="user-profile-image"></div>
                 <span class="username-post-info"><b>${username}</b></span>
               </div>
               <i class="fas fa-times f-icon" onclick="closePost()"></i>
           </div>
           <video src="${postUrl}" class="post-content-pewview" autoplay muted></video>
           <div class="post-header">
               <div class="left-block">
               <a href="${postUrl}"> <i class="fas fa-download f-icon"></i></a>
                   <i class="far fa-trash-alt f-icon" onclick="deleteThisPost('${postName}','${postSize}','${postType}','${timeCreated}','${newTime}')"></i>
                   <i class="far fa-eye f-icon" onclick="preview('${postUrl}','${postType}')"></i>
               </div>
               <i class="fas fa-share f-icon" onclick="shareLink('${postUrl}')"></i>
           </div>
       </div>
           `;
    }else {
        overlay.innerHTML =  `
        <div class="post" id="postids">
        <div class="post-header">
            <div class="left-block">
              <div style="background-image:url('${profileImage}');background-size:cover;" class="user-profile-image"></div>
              <span class="username-post-info"><b>${username}</b></span>
            </div>
            <i class="fas fa-times f-icon" onclick="closePost()"></i>
        </div>
        <img src="./media/none-pic.png" alt="" class="post-content-pewview">
        <div class="post-header">
            <div class="left-block">
               <a href="${postUrl}"> <i class="fas fa-download f-icon"></i></a>
                <i class="far fa-trash-alt f-icon" onclick="deleteThisPost('${postName}','${postSize}','${postType}','${timeCreated}','${newTime}')"></i>
                <i class="far fa-eye f-icon" onclick="preview('${postUrl}','${postType}')"></i>
            </div>
            <i class="fas fa-share f-icon" onclick="shareLink('${postUrl}')"></i>
        </div>
    </div>
        `;
    }
}

function closePost() {
   setTimeout(() => {
    document.getElementById('postids').style.display = 'none'
    document.body.style.overflow = 'auto'
    overlay.innerHTML = ''
    overlay.style.display = 'none'
   }, 100);
   document.getElementById('postids').classList.add('close')
}

function shareLink(text) {

    
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      

    alertUserAboutSuccess("Link copied!");
  }