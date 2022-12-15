const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('buttonLogin')




button.addEventListener('click',(ev)=>{
ev.preventDefault()
const data={
username: username.value,
password: password.value, 
}


})

function ir(){
    var c=2468;
    var u="MICAELA"

    if(document.getElementById('password').value==c && document.getElementById('username').value==u){
        alert("Bienvenido a PETS administracion")
        window.location="/index.html"
    }
    else{
        window.location="/indexusuario.html"
    
    }

}