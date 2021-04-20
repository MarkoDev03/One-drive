//display public or private buttons on index
function fillWithButtons() {
    var postButtons = [
      {
        class: "fas fa-lock-open",
        function: "publicPosts()",
        id: "public-posts",
      },
      { class: "fas fa-lock", function: "privatePosts()", id: "private-posts" },
    ];
    var postBlock = document.getElementById("post-buttons");
    for (var i = 0; i < postButtons.length; i++) {
      postBlock.innerHTML += `<button onclick="${postButtons[i].function}" class="${postButtons[i].class} post-button" id="${postButtons[i].id}"></button>`;
    }
  }
  
  fillWithButtons();  