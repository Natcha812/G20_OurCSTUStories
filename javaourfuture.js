const containericon = document.getElementById('containericon');
const navContainer = document.querySelector('.nav-container');

window.addEventListener('load', () => {
    navContainer.style.display = "none";  
    containericon.classList.remove("change");  
});

containericon.addEventListener("click", () => {
    
    if (navContainer.style.display === "block") {
        navContainer.style.display = "none";
    } else {
        navContainer.style.display = "block";
    }

    containericon.classList.toggle("change");
});
