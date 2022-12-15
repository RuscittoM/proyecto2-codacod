sup=`
   <header>
      <div>         
         <a id="logo" class="brand" href="principal.html">Pets</a>
    
         <ul class="menu">               
            <li class="menu-li"><a href="index.html" class="menu-a">Inicio</a></li>              
            <li class="menu-li" ><a href="" class="menu-a">Productos</a>
               <ul class="submenu">
                  <li class="submenu-li" ><a href="./accesorios.html" class="submenu-a">Accesorios</a></li>
                  <li class="submenu-li" ><a href="./paseo.html" class="submenu-a">Paseo</a></li>
                  <li class="submenu-li" ><a href="./juguetes.html" class="submenu-a">juguetes</a></li>
                  <li class="submenu-li" ><a href="./descanso.html" class="submenu-a">Descanso</a></li>
                
               </ul>
            </li>               
            <li class="menu-li"><a href="./sucursales.html" class="menu-a">Sucursales</a></li>
            <li class="menu-li" ><a href="/login.html" class="menu-a" >Cuenta</a></li>
         </ul>
      </div>
   </header>
`
document.write(sup)

sup=`
<footer>
         <div class="contenido-footer">    
         <a id="logo" class="brand logo2" href="principal.html">Pets</a> 
            <p> ofrecemos una experiencia cómoda en las compras para tus mascotas. Podes comprar las 24hs desde tu smart phone o compu.</p>                     
         </div>

         <div class="contenido-footer"> 
            <p>INTEGRANTES:</p>               
            <ul>
            
               <li><a href="contacto.html"><i class="fa-sharp fa-solid fa-user"></i>Micaela Ruscitto</a></li>
            </ul>
         </div>

         <div class="contenido-footer">
      
            <p>Proyecto Codo a Codo 2022 <br>
            TPO Desarrollo Web HTML CSS y JS</p>           
         </div>
   
</footer>
`
document.write(sup)

// carrousel

var imagenes =['/templates/img/principal2.png', '/templates/img/principal.jpg' , '/templates/img/images.jpg'],
cont=0;

function carrousel (contenedor){
    contenedor.addEventListener('click', e=>{
     let atras =contenedor.querySelector('.atras'),
        adelante= contenedor.querySelector('.adelante'),
        img= contenedor.querySelector('.imgC'),
        tgt= e.target;

        if(tgt==atras){
            if(cont>0){
               img.src=imagenes[cont-1];
               cont--;
            }else{
                img.src= imagenes[imagenes.length-1];
                cont= imagenes.length-1;
            }

        }else if(tgt==adelante){
            if(cont<imagenes.length-1){
                img.src=imagenes[cont+1];
                cont++;
             }else{
                 img.src= imagenes[0];
                 cont= 0;
             }
        }
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor= document.querySelector('.contenedor');

    carrousel(contenedor);
})


