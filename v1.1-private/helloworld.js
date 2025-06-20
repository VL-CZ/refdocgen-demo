function greet(){
    alert("Hello world");
}

function init(){
    const button = document.getElementById("click-button");
    button.addEventListener('click', greet);
}


window.addEventListener('load', init);
