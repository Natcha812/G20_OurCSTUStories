const form = document.querySelector("form"),
         submit = form.querySelector(".submit"),
         allInput = form.querySelector(".form1 input");

submit.addEventListener("click" , ()=>{
    allInput.forEach(input => {
       if(input.value != ""){
        form.classList.add('secActive')
       }else{
        form.classList.remove('secActive');
        
       }

    })
})