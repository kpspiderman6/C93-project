function login(){
    user_name = document.getElementById("username").value;
    Password = document.getElementById("password").value;
    localStorage.setItem("Username",user_name);
    localStorage.setItem("Password",Password);
    window.location = "kwitter_room.html";
}