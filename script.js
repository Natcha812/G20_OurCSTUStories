const commentsContainer = document.getElementById('commentsContainer');
let comments = [];





document.getElementById('form25').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    
    if (name && comment) {
        comments.push({ name, text: comment });
        displayComments();
        document.getElementById('form25').reset();
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

                                                    /* space*/



/*
const section = document.querySelector("section"),
overlay = document.querySelector(".overlay"),
submit = document.querySelector(".submit"),
buttons = document.querySelector(".buttons");

submit.addEventListener("click" , () =>  section.classList.add("active"));

overlay.addEventListener("click" , () => section.classList.add("active"));

buttons.addEventListener("click" , () => section.classList.remove("active"));
*/

                                                    /* space*/


const form25 = document.getElementById('form25');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const gen = document.getElementById('gen');
const occupation = document.getElementById('occupation');

form.addEventListener('submit' , e =>{
    e.preventDefault();

    validateInputs();
})

const setError = (element , message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('succes');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

const validateInputs = () => {
    const nameValue = name.value.trim();
const emailValue = email.value.trim();
const numberValue = number.value.trim();
const genValue= gen.value.trim();
const occupationValue = occupation.value.trim();

if(nameValue === ''){
  setError(name , 'Name is required')
}else{
    setSuccess(name);
}
if(emailValue === '') {
    setError(email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}


 if(numberValue === '') {
    setError(number, 'PhoneNumber is required');
} else if (numberValue.length < 10 ) {
    setError(password, 'PhoneNumber must be at least 10 character.')
} else {
    setSuccess(password);
}

if(genValue === ''){
    setError(gen , 'Name is required')
  }else{
      setSuccess(gen);
  }

  if(occupationValue === ''){
    setError(occupation , 'Occupation is required')
  }else{
      setSuccess(occupation);
  }






};