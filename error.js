function logout1(){
    window.location="index.html";
    localStorage.removeItem("Username");
    localStorage.removeItem("ROOMNAME");
    localStorage.removeItem("Password");
}