function validate() {
    var e = document.getElementById("email");
    var validRegex =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    if (validRegex.test(e.value)){
        return true;
    }  
    else {
        document.getElementById("eerror").textContent="Invalid E-mail ID";
        document.getElementById("eerror").style.color="red";
        e.style.border="2px solid red";
        e.value="";
        return false;
    }
}
