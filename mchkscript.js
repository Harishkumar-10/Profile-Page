function validate() {
    var result = "";
    result += validateEmail();
    result += loginValid();
    if (result == "") return true;
    alert("Login:" + result);
    return false;
}

function validateEmail() {
    var email = valueOf("username");
    if (email.indexOf('@' == -1)){
        return "";
    }
    else {
        return "INVALID MAIL ID";
    }

}

function loginValid() {

    var username = valueOf("username");
    var pass = valueOf("pass");
    if (username == "admin@ex.com" && pass == "admin") {
        return "";
    }
    return "invalid username and password";
    alert("entrer the script")
}

function valueOf(name) {
    return document.getElementsByName(name)[0].value;
}