// Accesorios

function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let s = parseInt(document.getElementById("txtStock").value)
    let i = document.getElementById("txtImagen").value
 
    let accesorio = {
        nombre: n,
        precio: p,
        stock: s,
        imagen:i
    }
    let url = "https://39077966.pythonanywhere.com/accesorios"
    var options = {
        body: JSON.stringify(accesorio),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "/accesorios.html";  //NUEVO  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
 
}

