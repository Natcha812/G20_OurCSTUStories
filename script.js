const commentsContainer = document.getElementById('commentsContainer');
let comments = [];

const section = document.querySelector("section"),
overlay = document.querySelector(".overlay"),
submit = document.querySelector(".submit"),
closebtn = document.querySelector(".close-btn");

submit.addEventListener("click" , () => section.classList.add("active"));
overlay.addEventListener("click" , () => section.classList.remove("active"));

closebtn.addEventListener("click" , () => 
section.classList.remove("active"));




document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();
    const textex = document.getElementById('textex').value.trim();
    const comment = document.getElementById('textex').value.trim();
    
    if (textex && comment) {
        comments.push({ textex, text: comment });
        displayComments();
        document.getElementById('form1').reset();
    }
});

function displayComments() {
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-box');
        commentDiv.innerHTML = `<p class="comment-name">${comment.name}</p><p>${comment.text}</p>`;
        commentsContainer.appendChild(commentDiv);
    });
}

