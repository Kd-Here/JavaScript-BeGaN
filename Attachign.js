// No need to write <script> here directly give your js code here
function red(){
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "red"
}

function yellow(){
    document.getElementsByTagName("body")[0].style.backgroundColor='yellow'
}

// Here we chagned by color 
function change(){
    document.getElementsByTagName("BODY")[0].style.backgroundColor='transparent'
}

// here we tricked and think if reload gives same result so searched for reload methods.
function reset(){
    location.reload();
}

