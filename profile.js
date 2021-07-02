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

        username.innerText = user.displayName;

        database.ref("accounts/").on('value',(snapshot) => {
            snapshot.forEach((snap) => {
                if (snap.val().username === user.displayName) {
                     profileImage.style.backgroundImage = `url('${snap.val().profileimage}')`;
                     profileImage.style.backgroundSize = 'cover';
                }
            })
        }) 

        database.ref("public_posts/").on('value', (snapshot) => {        
           var postCount = 0;

           snapshot.forEach(snap => {
              if (snap.val().user.user_id === user.uid) {
                    postCount++;
                    
               }  
           });

           publicPostsCounter.innerText = postCount
        })

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       database.ref("users/" + context +"/").on('child_added',(snap) => {
        
          // console.log(snap.val().post)       
          var post = '';
            
                          var postUrl = snap.val().post.post_url;
                          var profileImage = snap.val().post.profile_image;
                          var timeCreated = snap.val().post.time_created;
                          var dateCreated = snap.val().post.date_created;
                          var fileType = snap.val().post.file_type;
                          var postSize = snap.val().post.file_size;
                          var postName = snap.val().post.file_name;
                          var postId = snap.val().post.post_id;
                          var usernamePost = snap.val().post.username;
               
 //openPost(postUrl,postType,username,profileImage,postSize,timeCreated,newTime,postName)         
                          
                          if (fileType == "image/png" ||fileType == "image/jpg" || fileType == "image/jpeg") {
                  
                         
                   post = `<div class="post-prof set-hzx" id="${postUrl+timeCreated}"
                     style="background-image: url(${postUrl});background-size:cover;"
                     onclick="opeSvedPostHTML('${postUrl}','${fileType}','${usernamePost}','${profileImage}','${postSize}','${timeCreated}','${dateCreated}','${postName}')"
                     ></div>`
               } else if (fileType === "video/mp4") {
               
                   post = `<video class="post-prof set-hzx" id="${postUrl+timeCreated}" src="${postUrl}" autoplay muted loop
                   onclick="opeSvedPostHTML('${postUrl}','${fileType}','${usernamePost}','${profileImage}','${postSize}','${timeCreated}','${dateCreated}','${postName}')"
                   ></video>`;
               } else {
               
               
                   post = `<div class="post-prof set-hzx"   id="${postUrl+timeCreated}"  style="background-image: url('./media/none-pic.png');background-size:cover"
                   onclick="opeSvedPostHTML('${postUrl}','${fileType}','${usernamePost}','${profileImage}','${postSize}','${timeCreated}','${dateCreated}','${postName}')"
                   ></div>`
               }  
            
               document.getElementById('saved').innerHTML += post;
           
       })


       database.ref("users/" + context +"/").on('child_removed',(snap) => {
        var postUrl = snap.val().post.post_url;   
        var timeCreated = snap.val().post.time_created;
        document.getElementById(postUrl+timeCreated).style.display = 'none'
        setTimeout(() => {
            document.getElementById(postUrl+timeCreated).style.height = document.getElementById(postUrl+timeCreated).clientWidth +"px";
        }, 10000);
       })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        database.ref("private_posts/" + user.uid).once('value', (snapshot) => {
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
       
      
          
            if (snap.val().user.user_id === user.uid)
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

    database.ref("private_posts/" + user.uid).once('value', (snapshot) => {
       
        var post = '';
        snapshot.forEach((snap) => {     
            setTimeout(() => {
                document.getElementById(snap.val().imageRef).style.height = document.getElementById(snap.val().imageRef).clientWidth +"px";
            }, 10);    
           
            if (snap.val().fileType == "image/png" ||snap.val().fileType == "image/jpg" ||snap.val().fileType == "image/jpeg") {
                post = `<div class="post-prof"  id="${snap.val().imageRef}"
                onclick="openPost('${snap.val().imageRef}','${snap.val().fileType}','${snap.val().didsplayname}','${snap.val().imgurl}','${snap.val().fileSizeProperty}','${snap.val().timeCreated}','${snap.val().newCurrnetTime}','${snap.val().iiName}')" 
                style="background-image: url(${snap.val().imageRef});background-size:cover"></div>`
               
                   // document.getElementById(snap.val().imageRef).style.height = document.getElementById(snap.val().imageRef).clientWidth +"px";
                
               
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
           <video src="${postUrl}" class="" autoplay muted style="width:100%;height:auto;max-height:${(window.innerHeight)/98 - 207 + 'px'}" id="video+${postUrl}"></video>
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
           setTimeout(() => {
            document.getElementById('video'+postUrl).style.maxHeight = (window.innerHeight)/98 - 97 + 'px'
           }, 1000);
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

function openSavedPosts() {
        document.getElementById('saved').classList.add('open-x');
        document.getElementById('saved-overlay').style.display = 'flex'
       // document.getElementById('saved').style.zIndex = 99
      //  overlay.classList.add('load-overlay');
     //   overlay.style.display = 'flex'
       // overlay.innerHTML = '';
       document.getElementById('saved').style.display = 'block'
}

function closeSavedPosts() {

       document.getElementById('saved').classList.add('close')
       document.getElementById('saved').classList.remove('open-x');
       setTimeout(() => {
        document.getElementById('saved').style.display = 'none'
        document.getElementById('saved-overlay').style.display = 'none'
       }, 100);
      
}

function opeSvedPostHTML(postUrl,postType,username,profileImage,postSize,timeCreated,newTime,postName) {
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
                   <i class="far fa-bookmark f-icon" onclick="deleteThisPost('${postName}','${postSize}','${postType}','${timeCreated}','${newTime}')"></i>
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
           <video src="${postUrl}" class="" autoplay muted style="width:100%;height:auto;max-height:${(window.innerHeight)/98 - 207 + 'px'}" id="video+${postUrl}"></video>
           <div class="post-header">
               <div class="left-block">
               <a href="${postUrl}"> <i class="fas fa-download f-icon"></i></a>
                   <i class="far fa-bookmark f-icon" onclick="deleteThisPost('${postName}','${postSize}','${postType}','${timeCreated}','${newTime}')"></i>
                   <i class="far fa-eye f-icon" onclick="preview('${postUrl}','${postType}')"></i>
               </div>
               <i class="fas fa-share f-icon" onclick="shareLink('${postUrl}')"></i>
           </div>
       </div>
           `;
           setTimeout(() => {
            document.getElementById('video'+postUrl).style.maxHeight = (window.innerHeight)/98 - 97 + 'px'
           }, 1000);
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
                <i class="far fa-bookmark f-icon" onclick="deleteThisPost('${postName}','${postSize}','${postType}','${timeCreated}','${newTime}')"></i>
                <i class="far fa-eye f-icon" onclick="preview('${postUrl}','${postType}')"></i>
            </div>
            <i class="fas fa-share f-icon" onclick="shareLink('${postUrl}')"></i>
        </div>
    </div>
        `;
    }
}