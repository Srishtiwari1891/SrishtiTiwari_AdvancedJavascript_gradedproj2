window.history.forward();
function restrictBackward(){
    window.history.forward();
}

localStorage.setItem("credentials",JSON.stringify({uname:["admin","srishti"],pwd:["admin123","s12345"]}));
var a = localStorage.getItem("credentials");
console.log(a);

function authenticateUser(){
    var uname=document.getElementById("uname").value;
    var pwd=document.getElementById("pwd").value;

    var credentials = JSON.parse(a);
    credentials.uname.map((item,ind)=>{
        if(uname == item && pwd== credentials.pwd[ind]){
            location.href="Resume.html";
        }
        else{
            document.getElementById("error").innerHTML="Invalid Username or Password"
        }
    })
}