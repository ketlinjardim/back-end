document.querySelector("#login").addEventListener("click",()=>{
    fetch("http://localhost:3000/login",{
    method: "POST",
    headers: {
    'Content-type' : 'application/json'
    },
    body: JSON.stringify({
    "user" : document.querySelector("#user").value,
    "pass" : parseInt(document.querySelector("#pass").value)
    })
    }).then((res)=>{
    if(res.status == 200){
    window.location.href = "../../Front-end/html/index.html"
    }
    else{
    const inputuser = document.querySelector("#user");
    const inputpass = document.querySelector("#pass");
    
    inputuser.style.color = "red";
    inputpass.style.color = "red";
    
    const lugar = document.querySelector("#lugar");
    const error = document.createElement("p");
    error.className = "error";
    error.innerText = "Usuario ou senha incorreto";
    lugar.append(error);
    }
    })
    })